let id = '';
let tipo = '';

function montaFormulario(tipo) {
    const formulario = document.createElement("form");
    if (tipo == 'usuarios') {
        const labelNome = document.createElement("label");
        labelNome.setAttribute("for", "nome");
        labelNome.textContent = "Nome: ";

        const nomeInput = document.createElement("input");
        nomeInput.setAttribute("type", "text");
        nomeInput.setAttribute("id", "nome");
        nomeInput.setAttribute("name", "nome");

        const labelEmail = document.createElement("label");
        labelEmail.setAttribute("for", "email");
        labelEmail.textContent = "Email: ";

        const emailInput = document.createElement("input");
        emailInput.setAttribute("type", "text");
        emailInput.setAttribute("id", "email");
        emailInput.setAttribute("name", "email");

        const labelSenha = document.createElement("label");
        labelSenha.setAttribute("for", "senha");
        labelSenha.textContent = "Senha: ";

        const senhaInput = document.createElement("input");
        senhaInput.setAttribute("type", "text");
        senhaInput.setAttribute("id", "senha");
        senhaInput.setAttribute("name", "senha");
        formulario.appendChild(labelNome);
        formulario.appendChild(nomeInput);
        formulario.appendChild(labelEmail);
        formulario.appendChild(emailInput);
        formulario.appendChild(labelSenha);
        formulario.appendChild(senhaInput);
        document.getElementById("container").appendChild(formulario);
    }

    if (tipo == 'empresas') {
        const labelEmpresa = document.createElement("label");
        labelEmpresa.setAttribute("for", "empresa");
        labelEmpresa.textContent = "Empresa: ";
        const nomeEmpresaInput = document.createElement("input");
        nomeEmpresaInput.setAttribute("type", "text");
        nomeEmpresaInput.setAttribute("id", "empresa");
        nomeEmpresaInput.setAttribute("name", "empresa");

        const labelCnpj = document.createElement("label");
        labelCnpj.setAttribute("for", "cnpj");
        labelCnpj.textContent = "CNPJ: ";
        const cnpjInput = document.createElement("input");
        cnpjInput.setAttribute("type", "text");
        cnpjInput.setAttribute("id", "cnpj");
        cnpjInput.setAttribute("name", "cnpj");

        const labelUsuario = document.createElement("label");
        labelUsuario.setAttribute("for", "usuario");
        labelUsuario.textContent = "UsuarioID: ";
        const usuarioInput = document.createElement("input");
        usuarioInput.setAttribute("type", "text");
        usuarioInput.setAttribute("id", "usuario");
        usuarioInput.setAttribute("name", "usuario");

        formulario.appendChild(labelEmpresa);
        formulario.appendChild(nomeEmpresaInput);
        formulario.appendChild(labelCnpj);
        formulario.appendChild(cnpjInput);
        formulario.appendChild(labelUsuario);
        formulario.appendChild(usuarioInput);
        document.getElementById("container").appendChild(formulario);
    }

}
async function novoRegistro(event) {
    event.preventDefault();

    if (tipo == 'usuarios') {
        nome = document.getElementById("nome").value;
        email = document.getElementById("email").value;
        senha = document.getElementById("senha").value;
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
    if (tipo == 'empresas') {
        nomeEmpresa = document.getElementById("empresa").value;
        cnpj = document.getElementById("cnpj").value;
        usuarioId = document.getElementById("usuario").value;
        const response = await fetch(`http://localhost:3333/${tipo}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ nomeEmpresa, cnpj, usuarioId })
        });
        console.log(response);
        console.log(await response.json());
    }
    alert("Registro cadastrado com sucesso!")
}
async function alteraRegistro(event) {
    event.preventDefault();
    if (tipo == 'usuarios') {
        nome = document.getElementById("nome").value;
        email = document.getElementById("email").value;
        senha = document.getElementById("senha").value;
        const response = await fetch(`http://localhost:3333/${tipo}/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ nome, email, senha })
        });
        console.log(response);
    }
    if (tipo == 'empresas') {
        nomeEmpresa = document.getElementById("empresa").value;
        cnpj = document.getElementById("cnpj").value;
        usuarioId = document.getElementById("usuario").value;
        const response = await fetch(`http://localhost:3333/${tipo}/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ nomeEmpresa, cnpj, usuarioId })
        });
        console.log(response);
    }
    alert("Registro alterado com sucesso!")
}
async function deletaRegistro(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:3333/${tipo}/${id}`, {
        method: "delete"
    });
    console.log(response);
    alert("Registro excluído com sucesso!")
}
async function buscaId() {
    const response = await fetch(`http://localhost:3333/${tipo}/${id}`);
    const dados = await response.json();

    if (tipo == 'usuarios') {
        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const senhaInput = document.getElementById("senha");
        nomeInput.value = dados.nome;
        emailInput.value = dados.email;
        senhaInput.value = dados.senha;
    }
    if (tipo == 'empresas') {
        const nomeEmpresaInput = document.getElementById("empresa");
        const cnpjInput = document.getElementById("cnpj");
        const usuarioInput = document.getElementById("usuario");
        nomeEmpresaInput.value = dados.nomeEmpresa;
        cnpjInput.value = dados.cnpj;
        usuarioInput.value = dados.usuarioId;
    }

    console.log(dados);
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(document.location.search);

    const param = params.get("id");
    id = param;
    const paramTipo = params.get("tipo");
    tipo = paramTipo;
    console.log(tipo);
    montaFormulario(tipo);
    buscaId();

});
