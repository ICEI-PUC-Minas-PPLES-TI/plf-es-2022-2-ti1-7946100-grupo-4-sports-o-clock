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

async function LoginUser() {
    window.location.href = "login.html"
}

async function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem("userLogged");
    window.location.href = 'login.html';
}