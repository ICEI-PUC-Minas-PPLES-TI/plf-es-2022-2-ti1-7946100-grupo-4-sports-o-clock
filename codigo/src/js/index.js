window.onload = () => {
    let busca = document.getElementById('busca');
    busca.onfocus = () => console.log('o campo recebeu o foco');
    busca.onblur = () => {
        if (busca.value.length == 0) {
            instrucoes.innerHTML = '*Digite algo';
            instrucoes.style.color = '#F00';
            busca.style.border = 'thin red solid';
        } else instrucoes.innerHTML = '';
    };
};

function initTeams() {
    const teams = [
        { name: "Palmeiras", id: "56" },
        { name: "Internacional", id: "44" },
        { name: "Fluminense", id: "26" },
        { name: "Corinthians", id: "65" },
        { name: "Flamengo", id: "18" },
        { name: "Athletico-PR", id: "185" },
        { name: "Atlético-MG", id: "30" },
        { name: "Fortaleza", id: "131" },
        { name: "São Paulo", id: "57" },
        { name: "América-MG", id: "33" },
        { name: "Botafogo", id: "22" },
        { name: "Santos", id: "63" },
        { name: "Goiás", id: "115" },
        { name: "Bragantino", id: "64" },
        { name: "Coritiba", id: "84" },
        { name: "Cuiabá", id: "204" },
        { name: "Ceará", id: "105" },
        { name: "Atlético-GO", id: "98" },
        { name: "Avaí", id: "6" },
        { name: "Juventude", id: "43" }
    ]


    localStorage.setItem('teams', JSON.stringify(teams));
}

function login() {
    let loggd;
    if (localStorage.getItem('token') == null) {
        loggd = `
        <button type="button" class="btn btn-light login_btn" onclick="LoginUser()">Login</button>
        `
        document.getElementById('teste').innerHTML = loggd;
    } else {
        const userLogged = JSON.parse(localStorage.getItem("userLogged"));
        loggd = `
        <div class="loggedUser">
            <a href="profile.html"><p id="hello">Olá, </p><p id="nameLogged">${userLogged.user}</p></a>
            <button type="button" onclick="sair()">Sair</button>
        </div>
        `
        document.getElementById('teste').innerHTML = loggd;
    }
}

login();
initTeams();

async function LoginUser() {
    window.location.href = "login.html"
}

async function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem("userLogged");
    window.location.href = 'login.html';
}

function goToSearch() {
    const query = document.getElementById("busca")

    window.location.href = `busca.html?search=${query.value}`
}