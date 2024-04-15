document.addEventListener('DOMContentLoaded', function() {
    let nomeInput = document.getElementById('nome');
    let emailInput = document.getElementById('email-cadastro');
    let senhaInput = document.getElementById('senha-cadastro');
    let confirmaSenhaInput = document.getElementById('confirme-senha');
    let emailErrorMessage = document.getElementById('email-error-message');
    let senhaErrorMessage = document.getElementById('senha-error-message');

    function validacaoEntrada(input, minLength) {
        input.addEventListener('input', function() {
            let valor = this.value;
            
            if (valor.length < minLength) {
                input.classList.remove('correct');
                input.classList.add('error');
            } else {
                input.classList.remove('error');
                input.classList.add('correct');
            }
        });
    }

    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validarSenhas() {
        let senha = senhaInput.value;
        let confirmaSenha = confirmaSenhaInput.value;

        if (senha === confirmaSenha && senha.length >= 8) {
            senhaInput.classList.remove('error');
            senhaInput.classList.add('correct');
            confirmaSenhaInput.classList.remove('error');
            confirmaSenhaInput.classList.add('correct');
            senhaErrorMessage.style.display = 'none';
        } else {
            senhaInput.classList.remove('correct');
            senhaInput.classList.add('error');
            confirmaSenhaInput.classList.remove('correct');
            confirmaSenhaInput.classList.add('error');
            senhaErrorMessage.style.display = 'block';
        }
    }

    validacaoEntrada(nomeInput, 1);
    validacaoEntrada(senhaInput, 8);
    validacaoEntrada(confirmaSenhaInput, 8);

    emailInput.addEventListener('input', function() {
        let valor = this.value;
        
        if (validarEmail(valor)) {
            emailInput.classList.remove('error');
            emailInput.classList.add('correct');
            emailErrorMessage.style.display = 'none';
        } else {
            emailInput.classList.remove('correct');
            emailInput.classList.add('error');
            emailErrorMessage.style.display = 'block';
        }
    });

    emailInput.addEventListener('focus', function() {
        if (!validarEmail(this.value)) {
            emailErrorMessage.style.display = 'block';
        }
    });

    emailInput.addEventListener('blur', function() {
        emailErrorMessage.style.display = 'none';
    });

    senhaInput.addEventListener('input', validarSenhas);
    confirmaSenhaInput.addEventListener('input', validarSenhas);
});
