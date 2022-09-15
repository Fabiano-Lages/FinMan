const { app } = require("electron");

const controle = {
    salvar: async function() {
        console.log("teste");
    },
    sair: function() {
        app.quit();
    }
};

module.exports = controle;