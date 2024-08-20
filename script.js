
function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;

    console.log(nome);
    console.log(validaCPF(cpf));
    console.log(email);
}

function validaCPF(cpf) {

    if (cpf == "") {
        alert("Campo CPF nao pode ser vazio");
        return false;
    }

    cpf = cpf.trim();

    if (/[a-zA-Z]/.test(cpf)) {
        alert("CPF nao pode ter letras");
        return false;
    }

    if (!/^[\d.-]+$/.test(cpf)) {
        alert("CPF so pode contem numeros, '.' ou '-' ");
        return false;
    }

    if (cpf.length != 11 && cpf.length != 14) {
        alert("Formato invalido");
        return false;
    } 
    
    return cpfVerification(cpf);
}

function cpfVerification(cpf) {

    cpf = cpf.replace(/\D+/g, '');

    let soma = 0;
    let resto;
    let digitoV1;
    let digitoV2;

    //  primeiro digito verificador

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.substring(i, i + 1)) * (10 - i);
    }

    if (soma % 11 < 2) {
        resto = 0;
    }
    else {
        resto = 11 - (soma % 11);
    }
    digitoV1 = resto;

    //  segundo digito verificador

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.substring(i, i + 1)) * (11 - i);
    }

    if (soma % 11 < 2) {
        resto = 0;
    }
    else {
        resto = 11 - (soma % 11);
    }
    digitoV2 = resto;

    if (cpf.substring(9, 10) != digitoV1.toString() || cpf.substring(10, 11) != digitoV2.toString()) {
        alert("CPF é invalido")
        return false
    }
    return true;
}