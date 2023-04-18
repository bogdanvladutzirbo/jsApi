const db = require('../dbConnection');
const dbClient = db.database;

async function getAllClients() {
    const dbResult = await dbClient.getConnection().query('SELECT * FROM public.client;');
    return dbResult.rows;
}

async function getClientById(id) {
    const dbResult = await dbClient.getConnection().query(`SELECT * FROM public.client where id=${id};`);
    return dbResult.rows.length > 0 ? dbResult.rows[0] : "";
}

async function addClient(client) {
    console.log("CLEINT:" + JSON.stringify(client));
    const dbResult = await dbClient.getConnection().query(
        `INSERT INTO public.client("name", phone, email, address, status)
        VALUES('${client.name}',
         '${client.phone}',
          '${client.email}', 
          '${client.address}', 
          '${client.status}');`
    );
    return dbResult.rowCount;
}

async function deleteClient(id) {
    const dbResult = await dbClient.getConnection().query(
        `DELETE FROM public.client WHERE id=${id};`);

    return dbResult.rowCount;
}

async function updateClient(id, client) {
    const dbResult = await dbClient.getConnection().query(
        `UPDATE public.client SET 
        "name"='${client.name}', 
        phone='${client.phone}', 
        email='${client.email}', 
        address='${client.address}', 
        status='${client.status}' 
        WHERE id=${id};`
        );

    return dbResult.rowCount;
}

module.exports = {
    getAllClients,
    getClientById,
    addClient,
    deleteClient,
    updateClient
}