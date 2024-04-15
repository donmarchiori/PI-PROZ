
const menu = document.querySelectorAll(".menu_nav>li");


const currentPageURL = window.location.href;

menu.forEach(estiloMenu)

function estiloMenu(menuItem, i) {

    let url = window.location.href;
    const removerHashEParametros = a => url.replace(/#/g, '').split('?')[0]; //arow function para treinar
    const a = removerHashEParametros(url)
    const b = menuItem.querySelector('a');


    // criar nova url como nome ralativo
    const urlB = new URL(b, a);

    if (saoIguais = a === urlB.href) {

        menu[i].id = 'selecionado';;
    }

}



