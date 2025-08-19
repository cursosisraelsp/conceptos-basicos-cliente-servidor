const sqlite3 = require("sqlite3").verbose();

function creoBBDD() {
    const db = new sqlite3.Database(
        "bbdd_tareas_users.db",
        sqlite3.OPEN_READWRITE,
        (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("conectado ...");
        },
    );
    db.exec(
        `   CREATE TABLE if not exists USERS(
                 ID_USER INTEGER PRIMARY KEY AUTOINCREMENT,
                 NAME_USER           CHAR(50),
                 APELIDO1            CHAR(50),
                 APELIDO2            CHAR(50),
                 IDADE               INTEGER,
                 PWD                 CHAR(50),
                 EMAIL               CHAR(50)
              );
              CREATE TABLE if not exists USERS(
                 ID_USER INTEGER PRIMARY KEY AUTOINCREMENT,
                 NAME_USER           CHAR(50),
                 APELIDO1            CHAR(50),
                 APELIDO2            CHAR(50),
                 IDADE               INTEGER,
                 PWD                 CHAR(50),
                 EMAIL               CHAR(50)
              );
              `,
        (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("creada ...");
        },
    );
    return db;
}

module.exports = creoBBDD();