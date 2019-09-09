function adicionarGrupos(numero, projeto) {
    
    var cont = 0;
    
    var number = numero;
    var project = projeto;
    
    var Grupo = require('../model/grupo.model.js');
    
    console.log("O Grupo é  - " + Grupo);

    var grupo = new Grupo({
        numero: number,
        projeto: project
    })
    
    console.log("grupo - " + grupo.numero)

    Grupo.find({}, function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            for (var i = 0; i < result.length; i++) {
                if (grupo.number == result[i].numero) {
                    cont++;
                }

            }

            if (cont == 0) {

                global.modelProjeto.find({ id: grupo.projeto }, function(err, result2) {
                    if (err) {
                        console.log(err);
                    }
                    else {

                        if (grupo.projeto != undefined && result2 == 0) {
                            console.log("Não existe nenhum projeto com esse id, cria primeiro um projeto");
                        }
                        else {
                            grupo.save(function(err) {
                                if (err) {
                                    throw err;
                                }
                                else {
                                    console.log("Grupo saved successfully!");
                                }
                            })
                        }
                    }
                })
            }
            else {
                console.log("Já existe um grupo com esse número");
            }
        }
    })


    console.log("Passou o save do grupo");
}

//exportar as funções
module.exports = {
    adicionarGrupos: adicionarGrupos
}