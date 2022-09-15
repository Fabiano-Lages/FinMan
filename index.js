const { app, BrowserWindow, Menu, globalShortcut, ipcMain } = require("electron");
const path = require('path');
const Banco = require("./banco/connection");
const templateMenu = require("./src/scripts/menu");
const controle = require("./src/scripts/menuActions");
const Moeda = require("./Controlador/Moeda");

var janelaPrincipal = null;
Menu.setApplicationMenu(
    Menu.buildFromTemplate(templateMenu)
);

app.whenReady().then(() => {
    criarJanela();

    app
        .on("activate", () => {
            if(BrowserWindow.getAllWindows() === 0) {
                criarJanela();
            }
        })
        .on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                controle.sair();
            }
        });
        
    globalShortcut.register("CmdOrCtrl+X", () => { controle.sair() } );
    globalShortcut.register("CmdOrCtrl+S", () => { controle.salvar() });

    //let b = Moeda.open().then((resp) => ipcMain.handle("Moeda", resp));
});

var criarJanela = async function() {
    janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false
    });
    janelaPrincipal.webContents.openDevTools();
    await janelaPrincipal.loadFile("src/paginas/principal/index.html");
}