module.exports.catalogListAll = (application, req, res) => {
    var catalogRepositorio = new application.app.models.CatalogRepositorio();

    catalogRepositorio.GetAllCatalogs()
    .then(data => res.render('catalog/catalog-list', {catalogs : data}))
    .catch(err => res.render('catalog/catalog-list', {catalogs : []}));

}

module.exports.registrarCatalogo = (application, req, res) => {
    res.render('catalog/register-catalog', { cadastrado : false });
}

module.exports.getCatalog = (application, req, res) => {
    var catalogId = req.params.id;
    var catalogRepositorio = new application.app.models.CatalogRepositorio();

    catalogRepositorio.GetCatalogById(catalogId)
    .then(data => res.render('catalog/catalog', {catalogs : data}))
    .catch(err => res.render('catalog/catalog', {catalogs : []}));}

module.exports.cadastrarNovoCatalogo = (application, req, res) => {
    var catalogRepositorio = new application.app.models.CatalogRepositorio();
    catalogRepositorio.CadastrarCatalog(req.body)
        .then(data => res.render('catalog/register-catalog', { cadastrado : true }))
        .catch(err => res.render('catalog/register-catalog', { cadastrado : false }));

}
