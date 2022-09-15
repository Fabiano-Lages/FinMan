//const { ipcMain } = require('electron');
//const sqlite = require('sqlite-electron');
const sqlite3 = require("sqlite3");
const Banco = {
  aberto: false,
  db: null,
  open: (dbPath) => {
    this.db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if(err) {
        console.log(err.message);
      } else {
        this.aberto = true;
      }
    });
  },
  consulta: async (sql) => {
    return(
      new Promise((resolve, reject) => {
        this.db.all(sql, (err, rows) => {
          if(err) {
            reject(err.message);
          } else {
            resolve(rows);
          }
        });
      })
    );
  }
};

/*const Banco = {
  openDB: function(dbPath) {
    ipcMain.handle('FinMan', (event, dbPath) => {
      let retorno = true;
      sqlite.dbPath = dbPath;

      ipcMain.handle('executeQuery', async (event, query, fetch, value) => {
        let retornoIn = true;
        try {
          retornoIn = await sqlite.executeQuery(query, fetch, value);
        } catch (error) {
          retornoIn = error;
        }
        return(retornoIn);
      });
      
      ipcMain.handle('executeMany', async (event, query, values) => {
        let retornoIn = true;
        try {
          retornoIn = await sqlite.executeMany(query, values);
        } catch (error) {
          retornoIn = error;
        }
        return(retornoIn);
      });
      
      ipcMain.handle('executeScript', async (event, scriptpath) => {
        let retornoIn = true;
        try {
          retornoIn = await sqlite.executeScript(scriptpath);
        } catch (error) {
          retornoIn = error;
        }
        return(retornoIn);
      });
      return (retorno);
    });
  },
  consulta: async (query) => {
    let retornoIn = true;
    try {
      retornoIn = await sqlite.executeQuery(query, fetch, value);
    } catch (error) {
      retornoIn = error;
    }
    return(retornoIn);
  }
};
*/
module.exports = Banco;