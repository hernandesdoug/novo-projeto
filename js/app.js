async function testaApi(){
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json(); 
    montaPosts(posts, 'Posts');

    const respComments = await fetch("http://localhost:3000/comments");
    const comments = await respComments.json(); 
    montaComments(comments, 'Comments');

}

function montaPosts(posts, tabela) {
    const table = document.createElement("table");
    table.id = tabela;
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    cabecalho(thead, 'id');
    cabecalho(thead, 'title');
    cabecalho(thead, 'views');
    cabecalho(thead, 'Ações');
    table.appendChild(thead);   
    table.appendChild(tbody);
    document.getElementById("tabela-posts").appendChild(table);

    posts.forEach(item => {
        const dados = item;
        linhaPosts(tbody, dados);
    });
}

function montaComments(comments, tabela) {
    const table = document.createElement("table");
    table.id = tabela;
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    cabecalho(thead, 'id');
    cabecalho(thead, 'text');
    cabecalho(thead, 'postId');
    cabecalho(thead, 'Ações');
    table.appendChild(thead);   
    table.appendChild(tbody);
    document.getElementById("tabela-comments").appendChild(table);

    comments.forEach(item => {
        const dados = item;
        linhaComments(tbody, dados);
    });
}

function cabecalho(thead, titulo){
    const th = document.createElement("th");
    th.innerHTML = titulo;
    thead.appendChild(th);
}

function linhaPosts(tbody, dados){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = dados.id;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = dados.title;
    tr.appendChild(td2);

    const valorTitle = dados.title;
    localStorage.setItem('td2',valorTitle);
    console.log(valorTitle);

    const td3 = document.createElement("td");
    td3.innerHTML = dados.views;
    tr.appendChild(td3);

    const valorViews = dados.views;
    localStorage.setItem('td3', valorViews);
    console.log(valorViews);

    const td4 = document.createElement("td");
    const a = document.createElement("a");
    a.setAttribute("href", `post.html?id=${dados.id}`);
    a.innerHTML = "editar";
    td4.appendChild(a);
    tr.appendChild(td4);

    tbody.appendChild(tr);
}
function linhaComments(tbody, dados){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = dados.id;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = dados.text;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = dados.postId;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    const a = document.createElement("a");
    
    a.setAttribute("href", `post.html?id=${dados.id}`);
    a.innerHTML = "editar";
    td4.appendChild(a);
    tr.appendChild(td4);

    tbody.appendChild(tr);
}
document.addEventListener("DOMContentLoaded", testaApi());