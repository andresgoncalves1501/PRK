function adicionarAlunos(nome, numero, grupo) {

    var cont = 0;

    var name = nome;
    var number = numero;
    var team = grupo;

    var Aluno = require('../model/aluno.model.js');

    console.log("O Aluno é  - " + Aluno);

    var user = new Aluno({
        nome: name,
        numero: number,
        grupo: team
    })

    console.log("nome - " + user.nome)

    Aluno.find({}, function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            for (var i = 0; i < result.length; i++) {
                if (user.numero == result[i].numero) {
                    cont++;
                }
            }

            if (cont == 0) {

                global.modelGrupo.find({ numero: user.grupo }, function(err, result2) {
                    if (err) {
                        console.log(err);
                    }
                    else {

                        console.log("Grupo - " + user.grupo)

                        if (user.grupo != undefined && result2 == 0) {
                            console.log("Não existe nenhum grupo com esse id, cria primeiro um grupo");
                        }
                        else {
                            user.save(function(err) {
                                if (err) {
                                    throw err;
                                }
                                else {
                                    console.log("User saved successfully!");
                                }
                            })
                        }
                    }
                })

            }
            else {
                console.log("Já existe alguém com esse número");
            }
        }
    })
    console.log("Passou o save");
};

function alterarAlunos(nome, numero, grupo, valorPesquisa) {

    var name = nome;
    var number = numero;
    var team = grupo;
    var value = valorPesquisa;

    console.log("valor pesquisa - " + value);

    //var count = 0;

    var Aluno = require('../model/aluno.model.js');

    var user = new Aluno({
        nome: name,
        numero: number,
        grupo: team,
        valorPesquisa: value
    })

    console.log("valor pesquisa2 - " + valorPesquisa);

    console.log("user.valorPesquisa - " + user.valorPesquisa);


    Aluno.find({ numero: valorPesquisa }, function(err, result) {
        if (err) {
            console.log(err);
        }
        else {

            if (result == 0) {
                console.log("Não existe utilizador com esse número");
            }
            else {
                global.modelGrupo.find({ numero: user.grupo }, function(err, result2) {
                    if (err) {
                        console.log(err);
                    }
                    else {

                        if (user.grupo != undefined && result2 == 0) {
                            console.log("Não existe nenhum grupo com esse id, cria primeiro um grupo");
                        }
                        else {
                            Aluno.findOneAndUpdate({ numero: valorPesquisa}, { nome: user.nome, numero: user.numero, grupo: user.grupo }, function(err, user) {
                                if (err) {
                                    console.log(err);
                                }
                                else {

                                    console.log("Utilizador atualizado com sucesso!");
                                }

                            })
                        }
                    }
                })

            }
        }
    })
    console.log("Passou o alterar");
};

//exportar as funções
module.exports = {
    adicionarAlunos: adicionarAlunos,
    alterarAlunos: alterarAlunos,
    //listarAlunos: listarAlunos,
    /*apagarAlunos: apagarAlunos*/
}
