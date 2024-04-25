import { app, BrowserWindow, session  } from 'electron';
import path from 'node:path';
import os from 'node:os';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
    });




    if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
        win.loadURL(process.env['ELECTRON_RENDERER_URL']);
    } else {
        win.loadFile('../renderer/index.html');
    }
}

app.whenReady().then(async () => {
    const reactDevToolsPath = path.join(
        os.homedir(),
        'AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\5.1.0_0'
    );
    await session.defaultSession.loadExtension(reactDevToolsPath, { allowFileAccess: true });
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
