const regitro = document.querySelector(".registre");
const entre = document.querySelector(".entre");

const cadastro = document.getElementById('cadastro');
const login = document.getElementById('loginForm');

cadastro.style.display = 'none';

regitro.addEventListener('click', function() {
    
    cadastro.style.display = 'flex';
    login.style.display = 'none'
});

entre.addEventListener('click', function() {
    
    login.style.display = 'flex';
    cadastro.style.display = 'none';
});