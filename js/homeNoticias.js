

async function buscaNoticiasHome() {
    try {
        const res = await fetch("/json/bd.json");
        const dados = await res.json();
        const noticiasHome = document.querySelector(".grid_respostas")
        const mapped = dados.newsHome.map(item =>
            `<div class="card_resposta">
            <div class="img_resposta">
                <img src="${item.image}" alt="Esgoto em SP"/>
                <div class="intro_resposta"> Resoluções: <p>${item.dataResolucao}</p></div>
                <div class="titulo_resposta"> <p>${item.resposta}</p></div>
            </div>
        </div>
       `

        )
        noticiasHome.innerHTML = mapped.join("")
    }
    catch (error) {
        console.error("Erro ao buscar dados:", error);
    };
}

buscaNoticiasHome();