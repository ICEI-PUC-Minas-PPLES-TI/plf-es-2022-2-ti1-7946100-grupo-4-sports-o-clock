let userValid = false;
let passValid = false;
let rpassValid = false;
let favoriteValid = false;
let validLogin = false;

function UserValidate() {
    const usuario = document.getElementById("username");
    let span = document.querySelectorAll('span');

    if (usuario.value.length <= 2) {
        usuario.style.border = '1px solid #FF0000'
        span[0].style.display = 'block'
        userValid = false;
    } else {
        usuario.style.border = ''
        span[0].style.display = 'none'
        userValid = true;
    }
}
function PasswordValidate() {
    const senha = document.getElementById("password");
    let span = document.querySelectorAll('span');

    if (senha.value.length <= 8) {
        senha.style.border = '1px solid #FF0000'
        span[1].style.display = 'block'
        passValid = false;
    } else {
        senha.style.border = ''
        span[1].style.display = 'none'
        passValid = true;
    }
}

function RPasswordValidate() {
    const senha = document.getElementById("password");
    const rpsenha = document.getElementById("rep_password");
    let span = document.querySelectorAll('span');

    if (senha.value != rpsenha.value) {
        rpsenha.style.border = '1px solid #FF0000'
        span[2].style.display = 'block'
        rpassValid = false;
    } else {
        rpsenha.style.border = ''
        span[2].style.display = 'none'
        rpassValid = true;
    }
}

function FavoriteValidate() {
    const favorite = document.getElementById("favorite");
    let span = document.querySelectorAll('span');

    if (favorite.value.length == 0) {
        favorite.style.border = '1px solid #FF0000'
        span[3].style.display = 'block'
        favoriteValid = false;
    } else {
        favorite.style.border = ''
        span[3].style.display = 'none'
        favoriteValid = true;
    }
}

function login() {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = document.getElementById('username');
    const pass = document.getElementById('password');

    let userLogged = {
        user: '',
        password: '',
        favorite: ''
    }

    users.forEach(u => {
        if (u.user == user.value && u.password == pass.value) {
            userLogged = {
                user: u.user,
                password: u.password,
                favorite: u.favorite
            }
            document.querySelector('.errorlogin').style.display = 'none'
            let mathRandom = Math.random().toString(16).substr(2)
            let token = mathRandom + mathRandom;
            window.location.href = `index.html?${token}`
            localStorage.setItem('token', token);
            localStorage.setItem('userLogged', JSON.stringify(userLogged))
        } else {
            document.querySelector('.errorlogin').style.display = 'block'
        }
    })

    if (!validLogin) return;

    users.forEach(u => {
    })
}

async function register() {
    const usuario = document.getElementById("username");
    const senha = document.getElementById("password");
    const favorite = document.getElementById("favorite");

    if (!userValid || !passValid || !rpassValid || !favoriteValid || favorite.length == 0) return;

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    users.push({
        user: usuario.value,
        password: senha.value,
        favorite: favorite.value,
        loggedIn: true
    })

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'login.html';
    alert("Agora, realize o login em sua conta")
}