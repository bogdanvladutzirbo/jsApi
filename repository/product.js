const db = require('../dbConnection');
const dbClient = db.database;

async function getAllProducts() {
    const dbResult = await dbClient.getConnection().query('SELECT * FROM public.product;');
    return dbResult.rows;
}

async function getProductById(id) {
    const dbResult = await dbClient.getConnection().query(`SELECT * FROM public.product where id=${id};`);
    return dbResult.rows.length > 0 ? dbResult.rows[0] : "";
}

async function addProduct(product) {
    const dbResult = await dbClient.getConnection().query(
        `INSERT INTO public.product ("name", description, quantityvalue, quantitytype, deliverby, price, items, instock)
        VALUES('${product.name}',
         '${product.description}',
          ${product.quantityvalue}, 
          '${product.quantitytype}', 
          '${product.deliverby}', 
          ${product.price},
          ${product.items},
          ${product.instock});`
    );
    return dbResult.rowCount;
}

async function deleteProduct(id) {
    const dbResult = await dbClient.getConnection().query(
        `DELETE FROM public.product WHERE id=${id};`);

    return dbResult.rowCount;
}

async function updateProduct(id, product) {
    console.log(product);
    const dbResult = await dbClient.getConnection().query(
        `UPDATE public.product SET 
        "name"='${product.name}', 
        description='${product.description}', 
        quantityvalue=${product.quantityvalue}, 
        quantitytype='${product.quantitytype}', 
        deliverby='${product.deliverby}', 
        price=${product.price},
        items=${product.items},
        instock=${product.instock} 
        WHERE id=${id};`);

    return dbResult.rowCount;
}

async function updateProductStock(id, items) {
    const dbResult = await dbClient.getConnection().query(
        `UPDATE public.product SET 
        items=${items}
        WHERE id=${id};`);

    return dbResult.rowCount;
}

async function updateProductInStock(id, inStock) {
    const dbResult = await dbClient.getConnection().query(
        `UPDATE public.product SET 
        instock=${inStock}
        WHERE id=${id};`);

    return dbResult.rowCount;
}


module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct,
    updateProductStock,
    updateProductInStock
}