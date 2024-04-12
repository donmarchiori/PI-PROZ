
const menu = document.querySelectorAll(".menu_nav>li");


const currentPageURL = window.location.href;

menu.forEach(estiloMenu)

function estiloMenu(menuItem, i) {

    let a = window.location.href;
    const b = menuItem.querySelector('a');
    a = a.replace(/#/g, '');


    // Criar um novo URL com o caminho relativo b e o mesmo domínio e protocolo que o URL a
    const urlB = new URL(b, a);

    // Verificar se os URLs são iguais
    if (saoIguais = a === urlB.href) {

        menu[i].id = 'selecionado';;
    }

}




