const { app, BrowserWindow, Menu } = require("electron");
const templateMenu = require("./src/menu.js");

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
                app.quit()
            }
        });
});

async function criarJanela() {
    janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600
    });

    await janelaPrincipal.loadFile("src/paginas/principal/index.html");
}