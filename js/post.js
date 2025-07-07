let id = '';
async function novoRegistro(event){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const views = document.getElementById("views").value;
    const response = await fetch("http://localhost:3000/posts", { 
        method:"post",
        body:JSON.stringify({title, views})
    });
    console.log(response);
    console.log(await response.json() );
}
async function alteraRegistro(event){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const views = document.getElementById("views").value;
    const response = await fetch(`http://localhost:3000/posts/${id}`, { 
        method:"put",
        body:JSON.stringify({title, views})
    });
    console.log(response);
}
async function deletaRegistro(event){
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/posts/${id}`, { 
        method:"delete"
    });
    console.log(response);
}
document.addEventListener("DOMContentLoaded", function(){
    const params = new URLSearchParams(document.location.search);
  
    const param = params.get("id");
    id = param; 
});
// caputrar valores de input ao clicar no botao editar <- nao esquecer