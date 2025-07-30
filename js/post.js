let id = '';
let tipo = '';
async function novoRegistro(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const response = await fetch(`http://localhost:3333/${tipo}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ nome, email, senha })
    });
    console.log(response);
    console.log(await response.json());
}
async function alteraRegistro(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const response = await fetch(`http://localhost:3333/${tipo}/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ nome, email, senha:"1234" })
    });
    console.log(response);
}
async function deletaRegistro(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:3333/${tipo}/${id}`, {
        method: "delete"
    });
    console.log(response);
}
async function buscaId() {

    const response = await fetch(`http://localhost:3333/${tipo}/${id}`);
    const dados = await response.json();
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    if (tipo == 'usuarios') {
        nomeInput.value = dados.nome;
        emailInput.value = dados.email;
    }
    if (tipo == 'empresas') {
        nomeInput.value = dados.nome;
        emailInput.value = dados.email;
    }

    console.log(dados);
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(document.location.search);

    const param = params.get("id");
    id = param;
    const paramTipo = params.get("tipo");
    tipo = paramTipo;

    buscaId();

});
