function login() {
    var usuario = document.getElementById("username");
    var senha = document.getElementById("password");

    if (usuario.value == "admin" && senha.value == "admin") {
        window.location.href = "cadastro.html"
    }
}

async function register() {
    var usuario = document.getElementById("username");
    var senha = document.getElementById("password");
    var rep_pass = document.getElementById("rep_password");

    if (!usuario.value || !senha.value || !rep_pass.value) {
        return alert("Preencha todos os campos!");
    }

    if (senha.value != rep_pass.value) {
        return alert("As senhas não coincidem")
    }

    var data = JSON.parse(localStorage.getItem("data"));

    if (data == null) {
        localStorage.setItem("data", "[]");
        data = [];
    }

    var registro = {
        username: usuario.value,
        password: senha.value
    }

    data.push(registro);

    localStorage.setItem("data", JSON.stringify(data));

    console.log(localStorage.data)

}