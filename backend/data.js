import sql from "mysql2"

export const dbCon = sql.createConnection({

    host: "127.0.0.1",
    port: 3306,
    database: "product_db",
    user: "root",
    password: "KaviArasan@123",


})

