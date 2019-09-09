global.app.post('/adicionarAlunos', function (req, res){
    //res.send('Hello World');
    console.log("teste: " + req.body.name);
    global.controllerAluno.adicionarAlunos(req.body.nome, req.body.numero, req.body.grupo, function(err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            
            //res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.post('/alterarAlunos', function (req, res){
    //res.send('Hello World');
    console.log("teste: " + req.body.value);
    global.controllerAluno.alterarAlunos(req.body.nome, req.body.numero, req.body.grupo, req.body.valorPesquisa, function(err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            
            //res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.post('/adicionarGrupos', function (req, res){
    //res.send('Hello World');
    console.log("teste grupos: " + req.body.number);
    global.controllerGrupo.adicionarGrupos(req.body.numero, req.body.projeto, function(err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            
            //res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.post('/alterarGrupos', function (req, res){
    //res.send('Hello World');
    console.log("teste: " + req.body.value);
    global.controllerGrupo.alterarGrupos(req.body.numero, req.body.projeto, req.body.valorPesquisa, function(err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            
            //res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.post('/adicionarProjetos', function (req, res){
    //res.send('Hello World');
    console.log("teste projetos: " + req.body.id);
    global.controllerProjeto.adicionarProjetos(req.body.id, req.body.nome, function(err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            
            //res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.post('/alterarProjetos', function (req, res){
    //res.send('Hello World');
    console.log("teste: " + req.body.value);
    global.controllerProjeto.alterarProjetos(req.body.id, req.body.nome, req.body.valorPesquisa, function(err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            
            //res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.get('/listarAlunos', function (req, res){
    
    console.log("entrou")

    global.controllerListar.listarAlunos(function(err, data) {
        console.log("entrou2 - " + data);
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            console.log("data - " + data)
            res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.post('/listarAlunoEspecifico', function (req, res){
    
    console.log("entrou listarAlunoEspecifico")

    global.controllerListar.listarAlunoEspecifico(req.body.valorPesquisa, function(err, data) {
        console.log("entrou2 listarAlunoEspecifico - " + data);
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            console.log("data - " + data)
            res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})

global.app.post('/apagarAlunos', function (req, res){

    global.controllerAluno.apagarAlunos(req.body.valorPesquisa, function(err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        }
        else {
            
            //res.send(data);
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });
})