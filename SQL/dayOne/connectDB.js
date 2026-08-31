const mySql = require("mysql2/promise");

let db= mySql.createPool({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "eslam",
        queueLimit:0,
        waitForConnections:true,
        connectionLimit:4
})

async function bootstrap(app,port=3000){
    try {
        const[data,fields]=await db.query("SELECT 1+1 AS RESULT")
        app.listen(port, () => {
            console.log(`server is runnig at port: ${port}`);
        });
        console.log("connected to DB");
    } catch (error) {
        console.log("fail to connect to DB");
    }
}

module.exports={db,bootstrap}