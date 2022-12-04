function pageData() {
    let content;
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    console.log(userLogged.user)

    content = `
    <div class="item-favorite">
        <h4>${userLogged.user}</h4>
    </div>
    `
    document.querySelector(".usuario").innerHTML = content;
}

function pageChangePassword() {
    let content;
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    content = `
    <div class="item-favorite">
        <h4>${userLogged.favorite}</h4>
    </div>
    `
    document.querySelector(".getFavorites").innerHTML = content;
}

function pageFavorites() {
    let content;
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    content = `
    <div class="item-favorite">
        <h4>${userLogged.favorite}</h4>
    </div>
    `
    document.querySelector(".getFavorites").innerHTML = content;
}

function ChangePassword() {
    const pass = document.getElementById("newpass");
    const rep_pass = document.getElementById("rnewpass");

    if (pass.value == rep_pass.value) {
        return alert("Senha alterada com sucesso.");
    } else {
        return alert("As senhas não coincidem.");
    }
}