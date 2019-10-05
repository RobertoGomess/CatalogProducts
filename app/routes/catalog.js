module.exports = (application) => {

    application.get('/catalog/catalogList', (req, res) => {
        application.app.controllers.catalog.catalog(application, req, res);
    });
}