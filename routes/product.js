const express = require('express')
let router = express.Router();

const db = require('../dbConnection');
const dbConnection = db.database;

const productService = require('../service/product')

router.route('/')
    .get((req, res) => {
        // dbConnection.getConnection().query('SELECT * FROM public.product;', (err, data) => {
        //     if (err) {
        //         console.error(err);
        //     }
        //     if (data) {
        //         console.log(data.rows);
        //         res.send(data.rows)
        //     }
        //     console.log(dbConnection.status());
        // });
        productService.getAllProducts()
            .then(result => {
                res.send(result);
            })
    })
    .post((req, res) => {
        // dbConnection.getConnection().query(
        //     `INSERT INTO public.product("name", description, quantityvalue, quantitytype, deliverby, price)
        //     VALUES('${req.body.name}',
        //      '${req.body.description}',
        //       ${req.body.quantityvalue}, 
        //       '${req.body.quantitytype}', 
        //       '${req.body.deliverby}', 
        //       ${req.body.price});`,
        //     (err, data) => {
        //         if (err) {
        //             console.error(err);
        //         }
        //         if (data) {
        //             console.log(data.rows);
        //             res.json(req.body)
        //         }
        //         console.log(dbConnection.status());
        //     });
        let product = {
            "name": req.body.name,
            "description": req.body.description,
            "quantityvalue": req.body.quantityvalue,
            "quantitytype": req.body.quantitytype,
            "deliverby": req.body.deliverby,
            "price": req.body.price,
            "items": req.body.items,
            "instock": req.body.instock
        };
        productService.addProduct(product)
            .then(result => {
                res.send(result);
            })
        // console.log("Product body:" + JSON.stringify(req.body));
        // res.json(req.body)
    });

router.route('/:id')
    .get((req, res) => {
        productService.getProductById(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(error => console.log(error));
    })
    .put((req, res) => {
        // dbConnection.getConnection().query(
        //     `UPDATE public.product SET 
        //     "name"='${req.body.name}', 
        //     description='${req.body.description}', 
        //     quantityvalue=${req.body.quantityvalue}, 
        //     quantitytype='${req.body.quantitytype}', 
        //     deliverby='${req.body.deliverby}', 
        //     price=${req.body.price} 
        //     WHERE id=${req.params.id};`,
        //     (err, data) => {
        //         if (err) {
        //             console.error(err);
        //         }
        //         if (data) {
        //             console.log(data.rowCount)
        //             res.json(data.rowCount)
        //         }
        //         console.log(dbConnection.status());
        //     });

        let product = {
            "name": req.body.name,
            "description": req.body.description,
            "quantityvalue": req.body.quantityvalue,
            "quantitytype": req.body.quantitytype,
            "deliverby": req.body.deliverby,
            "price": req.body.price,
            "items": req.body.items,
            "instock": req.body.instock
        };

        productService.updateProduct(req.params.id, product)
            .then((data) => {
                res.send(data)
            })
            .catch(error => console.log(error));
    })
    .delete((req, res) => {
        // dbConnection.getConnection().query(
        //     `DELETE FROM public.product
        //     WHERE id=${req.params.id};`,
        //     (err, data) => {
        //         if (err) {
        //             console.error(err);
        //         }
        //         if (data) {
        //             console.log(data)
        //             res.json(data.rowCount)
        //         }
        //         console.log(dbConnection.status());
        //     });
        productService.deleteProduct(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(error => console.log(error));
    });

router.route('/:id/items/:items')
    .put((req, res) => {
        productService.updateProductStock(req.params.id, req.params.items)
            .then(data => res.send(data))
            .catch(error => console.log(error));
    });

router.route('/:id/instock/:inStock')
    .put((req, res) => {
        productService.updateProductInStock(req.params.id, req.params.inStock)
            .then(data => res.send(data))
            .catch(error => console.log(error));
    });

module.exports = router;