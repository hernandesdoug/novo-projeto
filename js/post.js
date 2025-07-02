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