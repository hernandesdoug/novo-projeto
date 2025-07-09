let id = '';
let tipo = '';
async function novoRegistro(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const views = document.getElementById("views").value;
    const response = await fetch(`http://localhost:3000/${tipo}`, {
        method: "post",
        body: JSON.stringify({ title, views })
    });
    console.log(response);
    console.log(await response.json());
}
async function alteraRegistro(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const views = document.getElementById("views").value;
    const response = await fetch(`http://localhost:3000/${tipo}/${id}`, {
        method: "put",
        body: JSON.stringify({ title, views })
    });
    console.log(response);
}
async function deletaRegistro(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/${tipo}/${id}`, {
        method: "delete"
    });
    console.log(response);
}
async function buscaId() {

    const response = await fetch(`http://localhost:3000/${tipo}/${id}`);
    const dados = await response.json();
    const titleInput = document.getElementById("title");
    const viewsInput = document.getElementById("views");
    if (tipo == 'posts') {
        titleInput.value = dados.title;
        viewsInput.value = dados.views;
    }
    if (tipo == 'comments') {
        titleInput.value = dados.text;
        viewsInput.value = dados.postId;
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
