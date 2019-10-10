const catalogModel = require('./CatalogModel')();

class CatalogRepositorio {
    constructor() {
    }

    GetAllCatalogs() {
        return catalogModel.find();
    }
    GetCatalogById(idCatalog) {
        return catalogModel.find({_id : idCatalog});
    }
    CadastrarCatalog(catalog){
        return catalogModel.create(catalog);
    }
}


module.exports = () => CatalogRepositorio;