const electron = require('electron');
const fs = require('fs');
const path = require('path');
const url = require('url');

const app = electron.app;
const ipcMain = electron.ipcMain;
const session = electron.session;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({minWidth: 680, minHeight: 900, icon: path.join(__dirname, './assets/logo.png'), webPreferences: { nodeIntegration: true, enableRemoteModule: true }});
    mainWindow.maximize();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

ipcMain.on('load-time', (event) => {
    let file = fs.readFileSync(path.join(__dirname, '/../src/assets/time.json'));
    let data = JSON.parse(file);
    event.returnValue = data;
})

ipcMain.on('save-time', (event, time) => {
    fs.writeFileSync(path.join(__dirname, '/../src/assets/time.json'), JSON.stringify(time));
    event.returnValue = 'success';
})