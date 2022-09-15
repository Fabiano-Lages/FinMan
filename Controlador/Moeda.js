const Banco = require("../banco/connection")

Banco.open("./banco/data/FinMan.db");
const Moeda = { 
    open: async (nrows) => {
        let retorno = await Banco.consulta("SELECT * FROM moeda").then((rows) => {
            return(rows);
        });

        return(retorno);
    }
};

module.exports = Moeda;