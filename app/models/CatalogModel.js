const mongodb = require('../../config/mongodb');

var catalogSchema =  new mongodb.Schema({
    titulo : { 
        type: String,
        require : true
    },
    descricao : { 
        type: String,
        require : true
    },
    diretorioImagem : {
        type : String,
        require : true
    },
    dataCriacao : {
        type : Date,
        default : Date.now
    }
});

const catalog =  mongodb.model('catalog', catalogSchema);

module.exports = () => catalog;