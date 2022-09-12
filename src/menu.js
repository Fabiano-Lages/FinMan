const templateMenu = [
    {
        label: "Arquivo",
        submenu: [
            {
                label: "Salvar"
            },
            {
                label: "Fechar",
                role: (process.platform === "darwin" ? "close" : "quit")
            }
        ]
    }
];

module.exports = templateMenu;