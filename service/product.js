const productRepository = require('../repository/product')

async function getAllProducts(){
    let result = await productRepository.getAllProducts();
    return result;
}

async function getProductById(id){
    let result = await productRepository.getProductById(id);
    return result;  
}

async function addProduct(product){
    let result = await productRepository.addProduct(product);
    console.log(result);
    return result === 1? true: false;
}

async function deleteProduct(id){
    let result = await productRepository.deleteProduct(id);
    return result === 1? true: false;
}

async function updateProduct(id, product){
    let result = await productRepository.updateProduct(id, product);
    return result === 1? true: false;
}

async function updateProductStock(id, items){
    let result = await productRepository.updateProductStock(id, items);
    return result === 1? true: false;
}

async function updateProductInStock(id, inStock){
    let result = await productRepository.updateProductInStock(id, inStock);
    return result === 1? true: false;
}

module.exports  ={
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct,
    updateProductStock,
    updateProductInStock
}