const catalogModel = require('./CatalogModel')();

class CatalogRepositorio {
    constructor() {
    }

    GetAllCatalogs() {
        return catalogModel.find();
    }
    CadastrarCatalog(catalog){
        return catalogModel.create(catalog);
    }
}


module.exports = () => CatalogRepositorio;