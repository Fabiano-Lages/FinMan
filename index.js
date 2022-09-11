const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
    criarJanela();
});

async function criarJanela() {
    janelaPrincipal = new BrowserWindow({
        width: 600,
        height: 400
    });

    await janelaPrincipal.loadFile("src/paginas/principal/index.html");
}