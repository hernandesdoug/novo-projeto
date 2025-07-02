async function testaApi(){
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json(); 
    
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById("tabela-api").appendChild(table);

    posts.forEach(item => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        const id = item.id;
        td1.innerHTML = id;
        tr.appendChild(td1);

        const td2 = document.createElement("td");
        const title = item.title;
        td2.innerHTML = title;
        tr.appendChild(td2);

        const td3 = document.createElement("td");
        const views = item.views;
        td3.innerHTML = views;
        tr.appendChild(td3);

        tbody.appendChild(tr);
    });
}
document.addEventListener("DOMContentLoader", testaApi());