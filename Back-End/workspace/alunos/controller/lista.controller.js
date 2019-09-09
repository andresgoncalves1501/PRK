function listarAlunos(callback) {

    var pingoDoce = {
        produto: "arroz",
        preço: 5
    }

    global.modelJogos.find(function(err, result) {
        if (err) {
            console.log(err)
        }
        else {
            global.tabela += "<!DOCTYPE html>"
            global.tabela += "<table class='table'><tbody>";
            for (var i = 0; i < result.length; i++) {
                global.tabela += "<tr><td>" + result[i].nome + "</td>" + "<td>" + result[i].numero + "</td>" + "<td>" + result[i].grupo + "</td></tr>";
            }
            global.tabela += "</tbody></table>";

            console.log("TABLE - " + global.tabela)
            
            callback(null, global.tabela);
        }
    })
}

function listarAlunoEspecifico(valorPesquisa, callback) {
    var value = valorPesquisa;

    console.log("val - " + valorPesquisa);

    //global.numTeam = "";
    var tabela = "";

    global.modelAluno.find({ numero: value }, function(err, result) {

        if (err) {
            console.log(err)
        }
        else {
            if (result == 0) {
                console.log("Não existe nenhum utilizador com esse número");
            }
            else {
                for (var i = 0; i < result.length; i++) {
                    console.log("Num da equipa - " + result[i].grupo);
                    
                    global.nomeUser = result[i].nome;

                    global.numGrupo = result[i].grupo;
                }
            }

            global.modelGrupo.find({ numero: global.numGrupo }, function(err, result) {

                if (err) {
                    console.log(err)
                }
                else {
                    for (var i = 0; i < result.length; i++) {
                        console.log("resultado - " + result[i].projeto);

                        global.numProjeto = result[i].projeto;
                    }

                }

                global.modelProjeto.find({ id: global.numProjeto }, function(err, result) {

                    if (err) {
                        console.log(err)
                    }
                    else {
                        for (var i = 0; i < result.length; i++) {
                            console.log("resultado - " + result[i].nome);

                            global.nomeProjeto = result[i].nome;
                        }

                    }

                    tabela += "<!DOCTYPE html>"

                    tabela += "<table class='table'><tbody>";
                    
                    tabela += "<tr><td>" + global.nomeUser + "</td>" + "<td>" + global.numGrupo + "</td>" + "<td>" + global.nomeProjeto + "</td></tr>";
                    
                    tabela += "</tbody></table>";
                    
                    callback(null, tabela);
                })
            })
        }
    })

    /*global.modelProjeto.find({ id: 62 }, function(err, result) {

        if (err) {
            console.log(err)
        }
        else {
            for (var i = 0; i < result.length; i++) {
                console.log("resultado - " + result[i].project);

                global.numProjeto = result[i].project;
            }
            
        }
    })*/
}

//exportar as funções
module.exports = {
    listarAlunos: listarAlunos,
    listarAlunoEspecifico: listarAlunoEspecifico
}
