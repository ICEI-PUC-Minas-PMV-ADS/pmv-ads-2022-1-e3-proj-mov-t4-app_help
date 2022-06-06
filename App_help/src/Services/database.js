import * as SQLite from 'expo-sqlite';


var db = SQLite.openDatabase("database.db")

class DatabaseInit {
    constructor() {
        console.log("constructor")

      var sql = "create table if not exists user (id integer primary key not null, nome text, tipo text);";

        db.transaction(
            tx => {

                tx.executeSql(sql);
                console.log("rodou SQL KKKKKKKKKKKKKKKKKKKK")
            }, (error) => {
                console.log("error create table : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction create ");
            }
        );


    }

    addData(param) {
        var sqlDrop = "delete from user;"
  
        var sql = `insert into user (id,nome,tipo)  values (${param.id},"${param.nome}","${param.tipo}");`;

        db.transaction(
            tx => {
           
                tx.executeSql(sqlDrop);
                tx.executeSql(sql);


            }, (error) => {
                console.log("error insert : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction insert");
            }
        );

        //   console.log(param)
        //     return new Promise((resolve, reject) =>db.transaction(
        //         tx => {
        //             tx.executeSql(`insert into usuario_logado (id,nome_usuario,tipo_usuario) 
        //             values (?,?,?)`, 
        //             [param.id,param.nome,param.tipo], 
        //             (_, { insertId, rows }) => {
        //                 console.log("id insert: " + insertId);
        //                 resolve(insertId)
        //             }), (sqlError) => {
        //                 console.log(sqlError);
        //             }}, (txError) => {
        //             console.log(txError);
        //         }));
    }

    truncateTable() {
        db.transaction(
            tx => {
                tx.executeSql(`delete from usuario `), (sqlError) => {
                    console.log(sqlError);
                }
            }, (txError) => {
                console.log(txError);

            });
    }

    findUsuario() {

        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from user`, 1, (_, { rows }) => {
          
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }
        }, (txError) => {
            console.log(txError);

        }));
    }

  
}
const dbSQLite = new DatabaseInit()
export default dbSQLite



