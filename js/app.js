let tabelaExiste = false;
async function testaApi(){
    if (!tabelaExiste) {
        const [responseUsuarios, responseEmpresas] = await Promise.all([
            await fetch("http://localhost:3333/usuarios"),
            await fetch("http://localhost:3333/empresas")
        ])  
        const [usuarios, empresas] = await Promise.all([
            await responseUsuarios.json(),
            await responseEmpresas.json(),
        ])  
        montaTabela(usuarios, 'usuarios');
    
        montaTabela(empresas, 'empresas');

        tabelaExiste = true;
    }
}

function montaTabela(titulo, tabela) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    

    if (tabela == 'usuarios') {
        cabecalho(thead, 'id');
        cabecalho(thead, 'nome');
        cabecalho(thead, 'email');
        cabecalho(thead, 'Ações');
        table.appendChild(thead); 
        table.appendChild(tbody);
        document.getElementById("tabela-usuario").appendChild(table);
    } else {
        cabecalho(thead, 'id');
        cabecalho(thead, 'empresa');
        cabecalho(thead, 'usuarioID');
        cabecalho(thead, 'Ações');
        table.appendChild(thead); 
        table.appendChild(tbody);
        document.getElementById("tabela-empresa").appendChild(table);
    }

    titulo.forEach(item => {
        const dados = item;
        linhaTabela(tbody, dados, tabela);
    });
}

function cabecalho(thead, titulo){
    const th = document.createElement("th");
    th.innerHTML = titulo;
    thead.appendChild(th);
}

function linhaTabela(tbody, dados, tabela){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = dados.id;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    if (tabela == 'usuarios') {
        td2.innerHTML = dados.nome;
    } else {
        td2.innerHTML = dados.nomeEmpresa; 
    }
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    if (tabela == 'usuarios') {
        td3.innerHTML = dados.email;
    }else {
        td3.innerHTML = dados.usuarioId;
    }
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    const a = document.createElement("a");
    a.setAttribute("href", `post.html?id=${dados.id}&tipo=${tabela}`);
    a.innerHTML = "editar";
    td4.appendChild(a);
    tr.appendChild(td4);

    tbody.appendChild(tr);
}
document.addEventListener("DOMContentLoaded", function() {
});