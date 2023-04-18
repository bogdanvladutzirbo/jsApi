const clientRepository = require('../repository/client')

async function getAllClients(){
    let result = await clientRepository.getAllClients();
    return result;
}

async function getClientById(id){
    let result = await clientRepository.getClientById(id);
    return result;  
}

async function addClient(client){
    let result = await clientRepository.addClient(client);
    return result === 1? true: false;
}

async function deleteClient(id){
    let result = await clientRepository.deleteClient(id);
    return result === 1? true: false;
}

async function updateClient(id, client){
    let result = await clientRepository.updateClient(id, client);
    return result === 1? true: false;
}

module.exports  ={
    getAllClients,
    getClientById,
    addClient,
    deleteClient,
    updateClient
}