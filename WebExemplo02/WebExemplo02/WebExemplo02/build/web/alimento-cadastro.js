function validarFormulario() {
    if (validarCampoNome() == false || validarCampoQuantidade() == false) {
        event.preventDefault();
    }
}

function validarCampoNome() {
    var nome = document.getElementById("campo-nome").value;
    var quantidadeCaracteres = nome.length;


    apagarElementoSeExiste("span-campo-nome-menor-7");
    apagarElementoSeExiste("span-campo-nome-maior-100");

    if (quantidadeCaracteres < 7) {
        gerarSpan("span-campo-nome-menor-7",
                "Nome deve conter no mínimo 7 caracteres",
                "div-campo-nome");

        apagarClasse("campo-nome", "border-success");
        adicionarClasse("campo-nome", "border-danger");
        return false;
    } else if (quantidadeCaracteres > 100) {
        gerarSpan(
                "span-campo-nome-maior-100", "Nome deve conter no máximo 100 caracteres", "div-campo-nome");
        apagarClasse("campo-nome", "border-success");
        adicionarClasse("campo-nome", "border-danger");
        return false;
    } else {
        apagarClasse("campo-nome", "border-danger");
        adicionarClasse("campo-nome", "border-success");
        return true;
    }
}

function validarCampoQuantidade() {
    var quantidade = parseInt(document.getElementById("campo-quantidade").value);
    
    apagarElementoSeExiste("span-campo-quantidade-menor-zero");
    
    if (quantidade <= 0) {
        gerarSpan("span-campo-quantidade-menor-zero",
                "Quantidade deve ser positiva",
                "div-campo-quantidade");

        adicionarClasse("campo-quantidade", "border-danger");
        apagarClasse("campo-quantidade", "border-success");
        return false;
    } else {
        adicionarClasse("campo-quantidade", "border-sucess");
        apagarClasse("campo-quantidade", "border-danger");
        return true;
    }

}

function apagarClasse(id, classeCor) {
    document.getElementById(id).classList.remove(classeCor);

}

function adicionarClasse(id, classeCor) {
    document.getElementById(id).classList.add(classeCor);

}

function gerarSpan(id, texto, idPai) {
    var span = document.createElement("span");
    span.id = id;
    span.textContent = texto;
    span.classList.add("text-danger");
    span.classList.add("font-weight-light");
    document.getElementById(idPai).appendChild(span);
}

function apagarElementoSeExiste(id) {
    if (document.contains(document.getElementById(id))) {
        document.getElementById(id).remove();
    }
}