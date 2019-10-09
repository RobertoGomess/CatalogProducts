module.exports.catalog = (application, req, res) => {
    var catalog =  require('../models/catalog')();
    
    catalog.find()
        .then(data => {
            res.render('catalog/catalog-list', {catalogs : data});
        })
        .catch(err => {
            console.log(err);
            res.render('catalog/catalog-list', {catalogs : {}});

        });

}