module.exports = (application) => {

    application.get('/catalog/catalogList', (req, res) => {
         application.app.controllers.catalog.catalogListAll(application, req, res);
    });

    application.get('/catalog/registrarCatalogo', (req, res) => {
        application.app.controllers.catalog.registrarCatalogo(application, req, res);
    });

    application.post('/catalog/registrarCatalogo', (req, res) => {
        application.app.controllers.catalog.cadastrarNovoCatalogo(application, req, res);
    });
}