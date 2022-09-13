const { app, BrowserWindow, Menu, globalShortcut } = require("electron");
const templateMenu = require("./src/scripts/menu.js");
const controle = require("./src/scripts/menuActions.js");

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
                sair();
            }
        });

    globalShortcut.register("CmdOrCtrl+X", () => { controle.sair() } );
    globalShortcut.register("CmdOrCtrl+S", () => { controle.salvar() });
});

var criarJanela = async function() {
    janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600
    });

    await janelaPrincipal.loadFile("src/paginas/principal/index.html");
}