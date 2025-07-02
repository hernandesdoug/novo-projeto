async function testaApi(){
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json(); 
    
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    cabecalho(thead, 'ID');
    cabecalho(thead, 'Title');
    cabecalho(thead, 'Views');
    table.appendChild(thead);   
    table.appendChild(tbody);
    document.getElementById("tabela-api").appendChild(table);

    posts.forEach(item => {
        const dados = item;
        linhaColuna(tbody, dados);
    });
}
function cabecalho(thead, titulo){
    const th = document.createElement("th");
    th.innerHTML = titulo;
    thead.appendChild(th);
}

function linhaColuna(tbody, dados){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = dados.id;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = dados.title;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = dados.views;
    tr.appendChild(td3);

    tbody.appendChild(tr);
}
document.addEventListener("DOMContentLoader", testaApi());