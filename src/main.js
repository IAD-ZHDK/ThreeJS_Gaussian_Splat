import './style.css';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import GUI from 'lil-gui';

const appEl = document.getElementById('app');
const statusEl = document.getElementById('status');
const fileInput = document.getElementById('plyInput');
const urlInput = document.getElementById('plyUrl');
const loadUrlBtn = document.getElementById('loadUrl');
const resetViewBtn = document.getElementById('resetView');
const helpToggleBtn = document.getElementById('helpToggle');
const helpPanelEl = document.getElementById('helpPanel');

const initialCameraPosition = [0, 1.5, 4];
const initialCameraLookAt = [0, 0, 0];

const viewerOptions = {
    selfDrivenMode: true,
    renderer: 'internal',
    camera: 'internal',
    useBuiltInControls: true,
    ignoreDevicePixelRatio: false,
    gpuAcceleratedSort: false,
    enableSIMDInSort: false,
    sharedMemoryForWorkers: false,
    integerBasedSort: false,
    halfPrecisionCovariancesOnGPU: false,
    dynamicScene: false,
    webXRMode: GaussianSplats3D.WebXRMode.None,
    renderMode: GaussianSplats3D.RenderMode.Always,
    sceneRevealMode: GaussianSplats3D.SceneRevealMode.Gradual,
    antialiased: true,
    focalAdjustment: 1.0,
    logLevel: GaussianSplats3D.LogLevel.None,
    sphericalHarmonicsDegree: 0,
    enableOptionalEffects: false,
    inMemoryCompressionLevel: 0,
    freeIntermediateSplatData: false,
};

const gui = new GUI({ title: 'Viewer' });
let viewer = null;
let dynamicSceneController = null;
let sharedMemoryController = null;
let manualLoopId = 0;

let objectUrl = null;
let lastLoadedScene = null;
let fallbackInProgress = false;
let rebuildInProgress = false;
let operationQueue = Promise.resolve();
let lastWorkingViewerOptions = { ...viewerOptions };

function refreshGuiDisplay() {
    if (typeof gui.controllersRecursive === 'function') {
        gui.controllersRecursive().forEach((controller) => controller.updateDisplay());
    }
}

function queueViewerOperation(operation) {
    operationQueue = operationQueue.then(() => operation(), () => operation());
    return operationQueue;
}

function isSharedMemorySupported() {
    return globalThis.crossOriginIsolated === true;
}

function getEffectiveSharedMemoryForWorkers() {
    return viewerOptions.sharedMemoryForWorkers && isSharedMemorySupported();
}

function getEffectiveDynamicSafeOptions() {
    if (!viewerOptions.dynamicScene) {
        return {
            gpuAcceleratedSort: viewerOptions.gpuAcceleratedSort,
            enableSIMDInSort: viewerOptions.enableSIMDInSort,
            sharedMemoryForWorkers: getEffectiveSharedMemoryForWorkers(),
            integerBasedSort: viewerOptions.integerBasedSort,
        };
    }

    return {
        gpuAcceleratedSort: false,
        enableSIMDInSort: false,
        sharedMemoryForWorkers: false,
        integerBasedSort: false,
    };
}

function getEnumOptions(enumObj) {
    const options = {};
    for (const key of Object.keys(enumObj)) {
        if (!Number.isNaN(Number(key))) {
            continue;
        }
        const value = enumObj[key];
        if (typeof value === 'number') {
            options[key] = value;
        }
    }
    return options;
}

function stopManualLoop() {
    if (manualLoopId) {
        cancelAnimationFrame(manualLoopId);
        manualLoopId = 0;
    }
}

function startManualLoop(instance) {
    const tick = () => {
        if (viewer !== instance) {
            return;
        }
        if (typeof instance.update === 'function') {
            instance.update();
        }
        if (typeof instance.render === 'function') {
            instance.render();
        }
        manualLoopId = requestAnimationFrame(tick);
    };
    manualLoopId = requestAnimationFrame(tick);
}

function createViewer() {
    stopManualLoop();
    const safeOptions = getEffectiveDynamicSafeOptions();

    const instance = new GaussianSplats3D.Viewer({
        rootElement: appEl,
        cameraUp: [0, 1, 0],
        initialCameraPosition,
        initialCameraLookAt,
        selfDrivenMode: viewerOptions.selfDrivenMode,
        renderer: viewerOptions.renderer === 'internal' ? undefined : viewerOptions.renderer,
        camera: viewerOptions.camera === 'internal' ? undefined : viewerOptions.camera,
        useBuiltInControls: viewerOptions.useBuiltInControls,
        ignoreDevicePixelRatio: viewerOptions.ignoreDevicePixelRatio,
        gpuAcceleratedSort: safeOptions.gpuAcceleratedSort,
        enableSIMDInSort: safeOptions.enableSIMDInSort,
        sharedMemoryForWorkers: safeOptions.sharedMemoryForWorkers,
        integerBasedSort: safeOptions.integerBasedSort,
        halfPrecisionCovariancesOnGPU: viewerOptions.halfPrecisionCovariancesOnGPU,
        dynamicScene: viewerOptions.dynamicScene,
        webXRMode: viewerOptions.webXRMode,
        renderMode: viewerOptions.renderMode,
        sceneRevealMode: viewerOptions.sceneRevealMode,
        sceneFadeInRateMultiplier: 1.0,
        antialiased: viewerOptions.antialiased,
        focalAdjustment: viewerOptions.focalAdjustment,
        logLevel: viewerOptions.logLevel,
        sphericalHarmonicsDegree: viewerOptions.sphericalHarmonicsDegree,
        enableOptionalEffects: viewerOptions.enableOptionalEffects,
        inMemoryCompressionLevel: viewerOptions.inMemoryCompressionLevel,
        freeIntermediateSplatData: viewerOptions.freeIntermediateSplatData,
        splatSortDistanceMapPrecision: viewerOptions.dynamicScene ? 12 : 16,
    });

    if (viewerOptions.selfDrivenMode) {
        instance.start();
    } else {
        startManualLoop(instance);
    }

    return instance;
}

viewer = createViewer();

function inferSceneFormat(sourceName) {
    const lowerName = sourceName.toLowerCase();
    if (lowerName.endsWith('.ksplat')) {
        return GaussianSplats3D.SceneFormat.KSplat;
    }
    if (lowerName.endsWith('.splat')) {
        return GaussianSplats3D.SceneFormat.Splat;
    }
    return GaussianSplats3D.SceneFormat.Ply;
}

async function clearExistingScene() {
    if (!viewer) {
        return;
    }

    const sceneCount = viewer.getSceneCount();
    if (sceneCount < 1) {
        return;
    }

    const indexes = [];
    for (let index = 0; index < sceneCount; index++) {
        indexes.push(index);
    }

    await viewer.removeSplatScenes(indexes, false);
}

async function loadSplatScene(path, label, format) {
    if (!viewer) {
        viewer = createViewer();
    }

    statusEl.textContent = `Loading ${label}...`;
    await clearExistingScene();
    viewer.sceneRevealMode = viewerOptions.sceneRevealMode;
    await viewer.addSplatScene(path, {
        format,
        showLoadingUI: true,
    });
    statusEl.textContent = `${label} loaded`;
}

async function reloadLastScene() {
    if (!lastLoadedScene) {
        statusEl.textContent = 'No file loaded';
        return;
    }

    if (lastLoadedScene.type === 'url') {
        await loadSplatFromUrlInternal(lastLoadedScene.sourceUrl, { persistLastScene: false });
        return;
    }

    if (lastLoadedScene.type === 'file') {
        await loadSplatFromFileInternal(lastLoadedScene.file, { persistLastScene: false });
        return;
    }

    statusEl.textContent = 'No file loaded';
}

async function rebuildViewer() {
    if (rebuildInProgress) {
        return;
    }
    rebuildInProgress = true;

    statusEl.textContent = 'Rebuilding viewer...';

    try {
        if (viewerOptions.sharedMemoryForWorkers && !isSharedMemorySupported()) {
            viewerOptions.sharedMemoryForWorkers = false;
            if (sharedMemoryController) {
                sharedMemoryController.updateDisplay();
            }
            statusEl.textContent = 'Shared memory disabled: crossOriginIsolated is required';
        }

        const previousViewer = viewer;
        viewer = null;

        if (previousViewer) {
            stopManualLoop();
            try {
                await previousViewer.dispose();
            } catch (error) {
                console.warn('Viewer dispose failed during rebuild, continuing with fresh instance.', error);
            }
        }

        viewer = createViewer();

        if (lastLoadedScene) {
            await reloadLastScene();
        } else {
            statusEl.textContent = 'No file loaded';
        }
    } finally {
        rebuildInProgress = false;
    }
}

async function fallbackFromDynamicMode(reason) {
    if (!viewerOptions.dynamicScene || fallbackInProgress) {
        return;
    }

    fallbackInProgress = true;
    try {
        viewerOptions.dynamicScene = false;
        if (dynamicSceneController) {
            dynamicSceneController.updateDisplay();
        }
        statusEl.textContent = `Dynamic Scene disabled (${reason})`;
        await queueViewerOperation(async () => {
            await rebuildViewer();
        });
    } catch (error) {
        statusEl.textContent = 'Failed to recover from dynamic mode error';
        console.error(error);
    } finally {
        fallbackInProgress = false;
    }
}

function isMemoryBoundsErrorMessage(message) {
    if (!message) {
        return false;
    }
    return String(message).toLowerCase().includes('memory access out of bounds');
}

function resetView() {
    if (!viewer.camera || !viewer.controls) {
        return;
    }

    viewer.camera.position.fromArray(initialCameraPosition);
    viewer.controls.target.fromArray(initialCameraLookAt);
    viewer.controls.update();
}

async function loadSplatFromUrl(url) {
    return loadSplatFromUrlInternal(url, { persistLastScene: true });
}

async function loadSplatFromUrlInternal(url, options = { persistLastScene: true }) {
    const targetUrl = url.trim();
    if (!targetUrl) {
        statusEl.textContent = 'Enter a scene URL first';
        return;
    }

    try {
        const sceneName = targetUrl.split('/').pop() || targetUrl;
        const format = inferSceneFormat(sceneName);

        const response = await fetch(targetUrl);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        if (format === GaussianSplats3D.SceneFormat.KSplat && arrayBuffer.byteLength < 4096) {
            throw new Error('Invalid KSplat data (file too small or wrong URL)');
        }

        if (objectUrl) {
            URL.revokeObjectURL(objectUrl);
        }

        const blob = new Blob([arrayBuffer]);
        objectUrl = URL.createObjectURL(blob);

        await loadSplatScene(objectUrl, sceneName, format);

        if (options.persistLastScene) {
            lastLoadedScene = {
                type: 'url',
                sourceUrl: targetUrl,
                label: sceneName,
                format,
            };
        }
    } catch (error) {
        statusEl.textContent = `Failed to load ${targetUrl} (${error.message || 'invalid data'})`;
        console.error(error);
    }
}

async function loadSplatFromFile(file) {
    return loadSplatFromFileInternal(file, { persistLastScene: true });
}

async function loadSplatFromFileInternal(file, options = { persistLastScene: true }) {
    if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
    }

    objectUrl = URL.createObjectURL(file);
    try {
        const format = inferSceneFormat(file.name);
        await loadSplatScene(objectUrl, file.name, format);

        if (options.persistLastScene) {
            lastLoadedScene = {
                type: 'file',
                file,
                label: file.name,
                format,
            };
        }
    } catch (error) {
        statusEl.textContent = `Failed to load ${file.name}`;
        console.error(error);
    }
}

fileInput.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
        return;
    }

    await queueViewerOperation(async () => {
        await loadSplatFromFile(file);
    });
});

loadUrlBtn.addEventListener('click', () => {
    queueViewerOperation(async () => {
        await loadSplatFromUrl(urlInput.value);
    });
});

urlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        queueViewerOperation(async () => {
            await loadSplatFromUrl(urlInput.value);
        });
    }
});

resetViewBtn.addEventListener('click', () => {
    resetView();
});

helpToggleBtn.addEventListener('click', () => {
    const isOpen = !helpPanelEl.hidden;
    helpPanelEl.hidden = isOpen;
    helpToggleBtn.setAttribute('aria-expanded', String(!isOpen));
});

const advancedFolder = gui.addFolder('Advanced Options');

const rebuildOnChange = (controller) => controller.onFinishChange(async () => {
    const rollbackOptions = { ...lastWorkingViewerOptions };

    try {
        await queueViewerOperation(async () => {
            await rebuildViewer();
        });
        lastWorkingViewerOptions = { ...viewerOptions };
    } catch (error) {
        Object.assign(viewerOptions, rollbackOptions);
        refreshGuiDisplay();
        statusEl.textContent = 'Option failed; reverted to last working config';
        console.error(error);

        try {
            await queueViewerOperation(async () => {
                await rebuildViewer();
            });
        } catch (recoveryError) {
            statusEl.textContent = 'Failed to recover viewer after rollback';
            console.error(recoveryError);
        }
    }
});

rebuildOnChange(advancedFolder.add(viewerOptions, 'selfDrivenMode').name('selfDrivenMode'));
advancedFolder.add(viewerOptions, 'renderer', { internal: 'internal' }).name('renderer');
advancedFolder.add(viewerOptions, 'camera', { internal: 'internal' }).name('camera');
rebuildOnChange(advancedFolder.add(viewerOptions, 'useBuiltInControls').name('useBuiltInControls'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'ignoreDevicePixelRatio').name('ignoreDevicePixelRatio'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'gpuAcceleratedSort').name('gpuAcceleratedSort'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'enableSIMDInSort').name('enableSIMDInSort'));
sharedMemoryController = advancedFolder.add(viewerOptions, 'sharedMemoryForWorkers').name('sharedMemoryForWorkers');
rebuildOnChange(sharedMemoryController);
rebuildOnChange(advancedFolder.add(viewerOptions, 'integerBasedSort').name('integerBasedSort'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'halfPrecisionCovariancesOnGPU').name('halfPrecisionCovariancesOnGPU'));
dynamicSceneController = advancedFolder.add(viewerOptions, 'dynamicScene').name('dynamicScene');
rebuildOnChange(dynamicSceneController);
rebuildOnChange(advancedFolder.add(viewerOptions, 'webXRMode', getEnumOptions(GaussianSplats3D.WebXRMode)).name('webXRMode'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'renderMode', getEnumOptions(GaussianSplats3D.RenderMode)).name('renderMode'));
rebuildOnChange(
    advancedFolder
        .add(viewerOptions, 'sceneRevealMode', getEnumOptions(GaussianSplats3D.SceneRevealMode))
        .name('sceneRevealMode')
);
rebuildOnChange(advancedFolder.add(viewerOptions, 'antialiased').name('antialiased'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'focalAdjustment', 0.1, 3, 0.01).name('focalAdjustment'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'logLevel', getEnumOptions(GaussianSplats3D.LogLevel)).name('logLevel'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'sphericalHarmonicsDegree', 0, 2, 1).name('sphericalHarmonicsDegree'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'enableOptionalEffects').name('enableOptionalEffects'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'inMemoryCompressionLevel', 0, 2, 1).name('inMemoryCompressionLevel'));
rebuildOnChange(advancedFolder.add(viewerOptions, 'freeIntermediateSplatData').name('freeIntermediateSplatData'));

advancedFolder.close();

const defaultStartupUrl = (urlInput.value || '/data/sample.ksplat').trim();
if (defaultStartupUrl) {
    queueViewerOperation(async () => {
        await loadSplatFromUrl(defaultStartupUrl);
    }).catch(() => {
        statusEl.textContent = 'No file loaded';
    });
}

window.addEventListener('error', (event) => {
    if (isMemoryBoundsErrorMessage(event?.message) || isMemoryBoundsErrorMessage(event?.error?.message)) {
        fallbackFromDynamicMode('WASM sort error');
    }
});

window.addEventListener('unhandledrejection', (event) => {
    const reasonMessage = event?.reason?.message || event?.reason;
    if (isMemoryBoundsErrorMessage(reasonMessage)) {
        fallbackFromDynamicMode('WASM sort error');
    }
});
