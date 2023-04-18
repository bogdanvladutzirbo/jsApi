const express = require('express')
let router = express.Router();

const clientService = require('../service/client')

router.route('/')
    .get((req, res) => {
        clientService.getAllClients()
            .then(result => {
                res.send(result);
            })
            .catch(error => console.log(error));
    })
    .post((req, res) => {
        let client = {
            "name": req.body.name,
            "phone": req.body.phone,
            "email": req.body.email,
            "address": req.body.address,
            "status": req.body.status
        };
        clientService.addClient(client)
            .then(result => {
                res.send(result);
            })
            .catch(error => console.log(error));
    });

router.route('/:id')
    .get((req, res) => {
        clientService.getClientById(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(error => console.log(error));
    })
    .put((req, res) => {
        let client = {
            "name": req.body.name,
            "phone": req.body.phone,
            "email": req.body.email,
            "address": req.body.address,
            "status": req.body.status
        };

        clientService.updateClient(req.params.id, client)
            .then((data) => {
                res.send(data)
            })
            .catch(error => console.log(error));
    })
    .delete((req, res) => {
        clientService.deleteClient(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(error => console.log(error));
    });

module.exports = router;