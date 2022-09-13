const { app } = require("electron");

var controle = {
    salvar: async function() {
        console.log("teste");
    },
    sair: function() {
        app.quit();
    }
};

module.exports = controle;