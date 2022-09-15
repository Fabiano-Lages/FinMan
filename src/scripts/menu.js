const controle = require("./menuActions.js");

const templateMenu = [
    {
        label: "Arquivo",
        submenu: [
            {
                label: "Salvar",
                accelerator: "CmdOrCtrl+S",
                click: () => {
                    controle.salvar(); 
                }
            },
            {
                label: "Fechar",
                accelerator: "CmdOrCtrl+X",
                role: (process.platform === "darwin" ? "close" : "quit")
            }
        ]
    }
];

module.exports = templateMenu;