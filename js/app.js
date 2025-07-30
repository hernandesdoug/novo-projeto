let tabelaExiste = false;
async function testaApi(){
    if (!tabelaExiste) {
        const response = await fetch("http://localhost:3333/usuarios");
        const usuarios = await response.json(); 
        montaUsuarios(usuarios);
    
        const respComments = await fetch("http://localhost:3333/empresas");
        const empresas = await respComments.json(); 
        montaEmpresas(empresas);

        tabelaExiste = true;
    }
}

function montaUsuarios(usuarios) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    cabecalho(thead, 'id');
    cabecalho(thead, 'nome');
    cabecalho(thead, 'email');
    cabecalho(thead, 'Ações');
    table.appendChild(thead);   
    table.appendChild(tbody);
    document.getElementById("tabela-posts").appendChild(table);

    usuarios.forEach(item => {
        const dados = item;
        linhaUsuarios(tbody, dados);
    });
}

function montaEmpresas(empresas) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    cabecalho(thead, 'id');
    cabecalho(thead, 'nome Empresa');
    cabecalho(thead, 'usuarioId');
    cabecalho(thead, 'Ações');
    table.appendChild(thead);   
    table.appendChild(tbody);
    document.getElementById("tabela-comments").appendChild(table);

    empresas.forEach(item => {
        const dados = item;
        linhaEmpresas(tbody, dados);
    });
}

function cabecalho(thead, titulo){
    const th = document.createElement("th");
    th.innerHTML = titulo;
    thead.appendChild(th);
}

function linhaUsuarios(tbody, dados){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = dados.id;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = dados.nome;
    tr.appendChild(td2);


    const td3 = document.createElement("td");
    td3.innerHTML = dados.email;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    const a = document.createElement("a");
    a.setAttribute("href", `post.html?id=${dados.id}&tipo=usuarios`);
    a.innerHTML = "editar";
    td4.appendChild(a);
    tr.appendChild(td4);

    tbody.appendChild(tr);
}
function linhaEmpresas(tbody, dados){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = dados.id;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = dados.nomeEmpresa;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = dados.usuarioId;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    const a = document.createElement("a");
    
    a.setAttribute("href", `post.html?id=${dados.id}&tipo=empresas`);
    a.innerHTML = "editar";
    td4.appendChild(a);
    tr.appendChild(td4);

    tbody.appendChild(tr);
}
document.addEventListener("DOMContentLoaded", function() {
});