let titulo = document.getElementById("title").value;
console.log(titulo);

function submeter() {
    let nome = document.getElementById("text").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("number").value

    console.log(cpf)
    console.log(validaCPF(cpf))
}

function validaCPF(cpf) {
    if (cpf == "") {
        alert("Campo CPF não pode ser vazio")
        return false
    }

    if () {
        alert("CPF não pode conter letras")
        return false
    }

    if (!/[d.-]+$/.test(cpf)) {
        alert("CPF só pode conter números, '.' ou '-'")
        return false
    }

    if (!cpf.length != 11 && cpf.length != 14) {
        alert("Formato inválido")
        return false
    }

    // Continuar validação
    // Formatos CPFs válidos:
    // 123.456.789.10
    // 12345678910

    return true
}