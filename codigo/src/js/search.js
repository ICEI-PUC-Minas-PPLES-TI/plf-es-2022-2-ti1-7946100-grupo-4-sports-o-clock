const apiKey = "live_b04e910d5a24e78400ca728b6ea174";
Search()

async function Search() {
    let time;
    let found;
    const urlParams = new URLSearchParams(location.search)
    let Id = urlParams.get('search');

    let ids = JSON.parse(localStorage.getItem('teams'));

    ids.forEach(element => {
        if (element.name.toLowerCase() == Id.toLowerCase()) {
            time = element.id;
        }
    })

    const myHeaders = new Headers({
        'Authorization': `Bearer ${apiKey}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeaders
    };

    const myRequest = new Request(`https://api.api-futebol.com.br/v1/times/${time}/partidas/anteriores`, myInit);

    const results = await fetch(myRequest);
    const data = await results.json();

    let newArray = [];

    Object.keys(data).forEach((item) => {
        newArray.push(data[item])
    });

    let content = `
    <div class="title-soccer">
        <h1>Resultados para futebol</h1>
    </div>`
        ;

    for (let i = 0; i < 10; i++) {
        var escudoMandante = newArray[0][i].time_mandante.escudo;
        var escudoVisitante = newArray[0][i].time_visitante.escudo;

        content += `
    <div class="result">
            <h3><img src="${escudoMandante}"
                    alt="My Happy SVG" width="20px" /> ${newArray[0][i].time_mandante.nome_popular} x
                <img src="${escudoVisitante}"
                    alt="My Happy SVG" width="20px" /> ${newArray[0][i].time_visitante.nome_popular}
            </h3>
        <p>${newArray[0][i].data_realizacao} - ${newArray[0][i].hora_realizacao} - ${newArray[0][i].placar} - ${newArray[0][i].status}</p>
    </div>
        `

        document.querySelector(".results-soccer").innerHTML = content;
    }
}

async function Back() {
    window.location.href = "index.html"
}