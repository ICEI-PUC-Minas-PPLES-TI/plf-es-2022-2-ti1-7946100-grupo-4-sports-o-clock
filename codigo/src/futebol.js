function table(response){
    var table = document.querySelector("#table tbody");

    for (let i = 0; i < response.length; i++){
      var row = table.insertRow(i);

      var tdPosition = row.insertCell(0);
      var tdTeam = row.insertCell(1);
      var tdPoints = row.insertCell(2);
      var tdGamesPlayed = row.insertCell(3);
      var tdWins = row.insertCell(4);
      var tdDraws = row.insertCell(5);
      var tdDefeats = row.insertCell(6);
      var tdGolsPro = row.insertCell(7);
      var tdGolsContra = row.insertCell(8);
      var tdSaldoGols = row.insertCell(9);
      var tdAproveitamento = row.insertCell(10);

      tdPosition.innerHTML = response[i].posicao;
      tdTeam.innerHTML = response[i].time.nome_popular;
      tdPoints.innerHTML = response[i].pontos;
      tdGamesPlayed.innerHTML = response[i].jogos;
      tdWins.innerHTML = response[i].vitorias;
      tdDraws.innerHTML = response[i].empates;
      tdDefeats.innerHTML = response[i].derrotas;
      tdGolsPro.innerHTML = response[i].gols_pro;
      tdGolsContra.innerHTML = response[i].gols_contra;
      tdSaldoGols.innerHTML = response[i].saldo_gols;
      tdAproveitamento.innerHTML = response[i].aproveitamento;

      if (response[i].posicao == 17 || response[i].posicao == 18 || response[i].posicao == 19 || response[i].posicao == 20) {
          tdPosition.style.color = "#FF0000";
      }

  }
}
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer live_75124caa4537f1e020d0bcd221d199"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    table(response);
  });

  