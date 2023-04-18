const { Pool, Client } = require('pg')

// const dbConnection = require("./DbConnection.js");

// const client = dbConnection.getConnection();


// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })

this.client = new Client({
    user: 'vlad',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'vlad',
    port: 5432,
});
client.connect()

function select(selectQuery, callback) {
    console.log('Start selectQuery');
    client.query(selectQuery, (err, res) => {
        return callback(err, res);
    });
    console.log('End selectQuery');
}

function closeClient() {
    client.connect()
}

module.exports = {
    select,
    closeClient
}





