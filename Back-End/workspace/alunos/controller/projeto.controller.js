function adicionarProjetos(id, nome) {
    
    var cont = 0;
    
    var ident = id;
    var name = nome;
    
    var Projeto = require('../model/projeto.model.js');
    
    console.log("O Projeto é  - " + Projeto);

    var projeto = new Projeto({
        id: ident,
        nome: name
    })
    
    console.log("projeto - " + projeto.id)

   Projeto.find({}, function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            for (var i = 0; i < result.length; i++) {
                if (projeto.id == result[i].id) {
                    cont++;
                }

            }

            if (cont == 0) {
                projeto.save(function(err) {
                    if (err) {
                        throw err;
                    }
                    else {
                        console.log("Projeto saved successfully!");
                    }
                })
            }
            else {
                console.log("Já existe um projeto com esse número");
            }
        }
    })

    console.log("Passou o save do projeto");
}

//exportar as funções
module.exports = {
    adicionarProjetos: adicionarProjetos
}