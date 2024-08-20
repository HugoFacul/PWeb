function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;

    console.log("Nome:", nome);
    console.log("CPF Válido:", validaCPF(cpf));
    console.log("Email:", email);
}

function validaCPF(cpf) {
    cpf = cpf.replace(/\D+/g, '');  // Remove qualquer caractere não numérico

    if (cpf === '') {
        alert("Campo CPF não pode ser vazio");
        return false;
    }

    if (cpf.length !== 11) {
        alert("O CPF deve ter exatamente 11 dígitos");
        return false;
    }

    if (/(\d)\1{10}/.test(cpf)) {
        alert("CPF inválido: todos os dígitos são iguais");
        return false;
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito verificador
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = soma % 11;
    let digitoV1 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) !== digitoV1) {
        alert("CPF inválido");
        return false;
    }

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoV2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(10)) !== digitoV2) {
        alert("CPF inválido");
        return false;
    }

    return true;
}
