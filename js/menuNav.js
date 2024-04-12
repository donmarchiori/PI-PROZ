console.log("nav menu");
const menu = document.querySelectorAll(".menu_nav>li");




const currentPageURL = window.location.href;

console.log(currentPageURL)

menu.forEach(imprimir)

function imprimir(menuItem,i){

    const a = window.location.href;
    const b = menuItem.querySelector('a');

// Criar um novo URL com o caminho relativo b e o mesmo domínio e protocolo que o URL a
const urlB = new URL(b, a);

// Verificar se os URLs são iguais
if (saoIguais = a === urlB.href){
    console.log(i);
    menu[i].id = 'selecionado';;  
}

}




