

async function buscaNoticias() {
    try {
        const res = await fetch("/json/bd.json");
        const dados = await res.json();
        const ultimasNoticias = document.querySelector(".ultimas_denuncias")
        const mapped = dados.lastNews.map(item =>
            `<div class="ud_titulo">
            <a href="#">
            ${item.titulo}
            </a>
        </div>
        <div class="ud_local_data"> ${item.local} 
            <span class="pipe"> | </span>
            ${item.data}
        </div>
       `

        )
        ultimasNoticias.innerHTML = mapped.join("")
    }
    catch (error){
        console.error("Erro ao buscar dados:", error);
    };
}

buscaNoticias();