const axios = require('axios');

// testa se fornece o nome de um utilizador em específico ao administrador
function getUser() {

    return axios.get('https://parque-de-estacionamento-cdaves.c9users.io/utilizadores/5c3bb634b5e3f3931bc55753')
        .then((response) => {
            response => response.data;
            

            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}

setTimeout = 3000;


test('Testa o obter um utilizador', async () => {

    expect.assertions(1);
    var test = await getUser();
    
    var nome = "";

    for (var x in test) {
        nome = test[x].name;
    }

    expect(nome).toEqual("Rebelo");
})

// o administrador edita o e-mail de um utilizador
function editUtilizador() {

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxNzE0MCwiZXhwIjoxNTQ3NTAzNTQwfQ.sC8NleTkfZ938ppCEdRiDTVlJEp9wTMU_loaCkoTl8Y";

    return axios.put('https://parque-de-estacionamento-cdaves.c9users.io/utilizadores/5c364bb46c52787bb44e28ff', {
        email:"pedronogueira@hotmail.com" ,
        token: token
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}

test('Testa o alterar email de um utilizador', async () => {

    expect.assertions(1);
    var data = await editUtilizador();    

    expect(data).not.toBe("error");
})

// testa se fornece todos os utilizadores ao administrador
function getAllUsers() {

    return axios.get('https://parque-de-estacionamento-cdaves.c9users.io/utilizadores')
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}

test('Testa o obter todos os utilizadores', async () => {

    expect.assertions(1);
    var test = await getAllUsers();    

    expect(test).not.toBe("error");
})

// apagar um utilizador pelo administrador
function deleteUser() {

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxOTA4MSwiZXhwIjoxNTQ3NTA1NDgxfQ.vkE0NJyJBex-6DK4-vmVpDhtTxgtKn081l9FpgjL1rg";

    return axios.delete('https://parque-de-estacionamento-cdaves.c9users.io/utilizadores/5c3bb634b5e3f3931bc55753', {
        token: token
    })
        .then((response) => {
            response => response.data;
            console.log("QUERO MORRER - " + response);

            return response.data;
        })
        .catch(err => 'error');
}


test('Testa o apagar um utilizador', async () => {

    expect.assertions(1);
    var data = await deleteUser();    

    expect(data).not.toBe("error");
})

// obter a informação do utilizador logado
function getOwnInfo() {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxOTA4MSwiZXhwIjoxNTQ3NTA1NDgxfQ.vkE0NJyJBex-6DK4-vmVpDhtTxgtKn081l9FpgjL1rg";

    return axios.get('https://parque-de-estacionamento-cdaves.c9users.io/users/5c1240058ff4371708fb653b',{
        token: token
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}

test('Testa o obter um utilizador', async () => {

    expect.assertions(1);
    var test = await getOwnInfo();    

    expect(test).not.toBe("error");
})

// adicionar um utilizador (criar conta)
function addUser() {

    return axios.post('https://parque-de-estacionamento-cdaves.c9users.io/users', {
        name: "Xiquinho",
        email: "xicodasbabes@gmail.com",
        password: 123456789
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}

test('Testa o adicionar utilizador', async () => {

    expect.assertions(1);
    var data = await addUser();

    expect(data).not.toBe("error");
})

// alterar o nome de utilizador
function editNameUser() {

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxNzE0MCwiZXhwIjoxNTQ3NTAzNTQwfQ.sC8NleTkfZ938ppCEdRiDTVlJEp9wTMU_loaCkoTl8Y";

    return axios.put('https://parque-de-estacionamento-cdaves.c9users.io/users/5c3bb634b5e3f3931bc55753/name', {
        name: "Ortega",
        token: token
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}

test('Testa o alterar nome de utilizador', async () => {

    expect.assertions(1);
    var data = await editNameUser();

    expect(data).not.toBe("error");
})

// alterar a password de utilizador
function editPassUser() {

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxNzE0MCwiZXhwIjoxNTQ3NTAzNTQwfQ.sC8NleTkfZ938ppCEdRiDTVlJEp9wTMU_loaCkoTl8Y";

    return axios.put('https://parque-de-estacionamento-cdaves.c9users.io/users/5c3bb634b5e3f3931bc55753/password', {
        password: "12345678",
        token: token
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}

test('Testa o alterar password de utilizador', async () => {

    expect.assertions(1);
    var data = await editPassUser();

    expect(data).not.toBe("error");
})


// testa se fornece todos os estacionamentos ao administrador
function getEstacionamento() {

    return axios.get('https://parque-de-estacionamento-cdaves.c9users.io/estacionamento')
        .then((response) => {
            response => response.data;
            
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}

test('Testa o obter um estacionamento', async () => {

    expect.assertions(1);
    var test = await getEstacionamento();    

    expect(test).not.toBe("error");
})


// adicionar um estacionamento pelo administrador
function addEstacionamento() {

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxNzE0MCwiZXhwIjoxNTQ3NTAzNTQwfQ.sC8NleTkfZ938ppCEdRiDTVlJEp9wTMU_loaCkoTl8Y";

    return axios.post('https://parque-de-estacionamento-cdaves.c9users.io/estacionamento', {
        name: "Estacionamento da PizzaHut",
        local: "Rua da Rotunda Grande",
        limit: 100,
        arduino: "chefemaster",
        token: token
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}

test('Testa o adicionar um estacionamento', async () => {

    expect.assertions(1);
    var data = await addEstacionamento();    

    expect(data).not.toBe("error");
})


// alterar o estacionamento pelo administrador
function editEstacionamento() {

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxNzE0MCwiZXhwIjoxNTQ3NTAzNTQwfQ.sC8NleTkfZ938ppCEdRiDTVlJEp9wTMU_loaCkoTl8Y";

    return axios.put('https://parque-de-estacionamento-cdaves.c9users.io/estacionamento/5c322ef66c071d193bebbd87', {
        name: "Estacionamento das Fontainhas",
        local: "castelo da maia",
        limit: 250,
        arduino: "maia",
        token: token
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}

test('Testa o editar um estacionamento', async () => {

    expect.assertions(1);
    var data = await editEstacionamento();
    
    expect(data).not.toBe("error");
})


// apagar um estacionamento pelo administrador
function deleteEstacionamento() {

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjM2JiNjM0YjVlM2YzOTMxYmM1NTc1MyIsImlhdCI6MTU0NzQxOTA4MSwiZXhwIjoxNTQ3NTA1NDgxfQ.vkE0NJyJBex-6DK4-vmVpDhtTxgtKn081l9FpgjL1rg";

    return axios.delete('https://parque-de-estacionamento-cdaves.c9users.io/estacionamento/5c322ef66c071d193bebbd87', {
        token: token
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}


test('Testa o apagar um estacionamento', async () => {

    expect.assertions(1);
    var data = await deleteEstacionamento();    

    expect(data).not.toBe("error");
})

// login
function login() {

    return axios.post('https://parque-de-estacionamento-cdaves.c9users.io/login', {
        email: "militao@gmail.pt",
        password: "qweasdzxc"
    })
        .then((response) => {
            response => response.data;

            return response.data;
        })
        .catch(err => 'error');
}

test('Testa o adicionar um estacionamento', async () => {

    expect.assertions(1);
    var data = await login();   

    expect(data).not.toBe("error");
})