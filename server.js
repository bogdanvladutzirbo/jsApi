const port = 8001;

const express = require('express');
const db = require('./dbConnection');
const dbConnection = db.database;

const productRouter = require('./routes/product')
const clientRouter = require('./routes/client')


// const postgresClient = require("./PostgresSQLClient");


const server = express();

server.use(express.json());
server.use('/product', productRouter);
server.use('/client', clientRouter);

// const values = [1, 2, 3, 4]
// const newValues = [...values]
// console.log("Values:" + newValues);



server.get('/', (req, res) => {
    // dbConnection.getConnection().query('SELECT * FROM public.accounts;', (err, data) =>{
    //     if(err){
    //         console.error(err);
    //     }
    //     if(data){
    //         console.log(data.rows);
    //         res.send(data.rows)
    //     }
    //     console.log(dbConnection.status());
    // });
    res.send('Hello Express!');
});

server.listen(port, () => {
    console.log('Server is running on port', port)
})