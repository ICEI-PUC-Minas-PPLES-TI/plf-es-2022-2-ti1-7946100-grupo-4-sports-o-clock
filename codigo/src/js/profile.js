function ChangePassword() {
    const pass = document.getElementById("newpass");
    const rep_pass = document.getElementById("rnewpass");

    if (pass.value == rep_pass.value) {
        return alert("Senha alterada com sucesso.");
    } else {
        return alert("As senhas não coincidem.");
    }
}