const { Pool, Client } = require('pg')

const database = (function () {
    let newConnectionCount=0;
    let getConnectionCount=0;
    let connection;

    function createConnection() {
        newConnectionCount++;
        let client = new Client({
            user: 'vlad',
            host: '127.0.0.1',
            database: 'postgres',
            password: 'vlad',
            port: 5432,
        });
        client.connect();

        return client;
    }

    function getConnection() {
        getConnectionCount++;
        if (connection) {
            console.log("Return existing connection")
            return connection;
        }
        console.log("No instance, create a new instance;")
        connection = createConnection();

        return connection;
    }

    function closeConnection(){
        connection.end();
    }

    function status(){
        return "GETs: " + getConnectionCount + " | CONNECTIONs " + newConnectionCount;
    }

    return {
        getConnection,
        closeConnection,
        status
    }

})();

module.exports = {
    database
}