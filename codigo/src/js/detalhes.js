const apiKey = "live_b04e910d5a24e78400ca728b6ea174";

GetDetails();

async function GetDetails() {
    const urlParams = new URLSearchParams(location.search)
    let Id = urlParams.get('id');

    console.log(Id)

    const myHeaders = new Headers({
        'Authorization': `Bearer ${apiKey}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeaders
    };

    const myRequest = new Request(`https://api.api-futebol.com.br/v1/partidas/${Id}`, myInit);

    const results = await fetch(myRequest);
    const data = await results.json();

    let content = '';

    var escudoMandante = data.time_mandante.escudo;
    var escudoVisitante = data.time_visitante.escudo;

    content += `
        <div class="container-main">
            <div class="detalhes">
                <h1><img src="${escudoMandante}" alt="time1"
                        width="60px"> ${data.time_mandante.nome_popular} x ${data.time_visitante.nome_popular} <img src="${escudoVisitante}"
                        alt="time2" width="60px"></h1>
            </div>
            <div class="detalhes-partida">
                <h4>Placar: </h4>
                <p>${data.placar}</p>
                <h4>Status: </h4>
                <p>${data.status}</p>
                <h4>Estádio: </h4>
                <p>${data.estadio.nome_popular}</p>
                <h4>Data e hora: </h4>
                <p>${data.data_realizacao} - ${data.hora_realizacao}</p>
            </div>
        </div>
        `

    document.querySelector(".container-main").innerHTML = content;
}

async function Back() {
    window.location.href = "index.html"
}