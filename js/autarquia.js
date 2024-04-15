
function validacaoForm(errorInput) {
    errorInput.addEventListener('focus', () => {
        errorInput.classList.add('error');
    });
    
    errorInput.addEventListener('blur', () => {
        errorInput.classList.remove('error');
    });
}

function validacaoEntrada(input, minLength) {
    input.addEventListener('input', (e) => {
        let valor = e.target.value;
        
        if (valor.length <= minLength) {
            input.classList.remove('correct');
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            input.classList.add('correct');
        }
    });
}

let autarquiaInput = document.getElementById('autarquia');
let cidadeInput = document.getElementById('city');
let bairroInput = document.getElementById('bairro');
let ruaInput = document.getElementById('tipo');

validacaoForm(autarquiaInput);
validacaoForm(cidadeInput);
validacaoForm(bairroInput);
validacaoForm(ruaInput);

validacaoEntrada(autarquiaInput, 3);
validacaoEntrada(cidadeInput, 4);
validacaoEntrada(bairroInput, 3);
validacaoEntrada(ruaInput, 3);



