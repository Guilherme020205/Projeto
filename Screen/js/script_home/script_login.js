const form = document.querySelector('form');

form.onsubmit = (e) => {

    e.preventDefault();
    //agrupa todos os inputs numa variável
    const inputs = new FormData(e.target);

    // .get( ) capitura pega cada valor do input pelo name
    const usuario = inputs.get('usuario');
    const senha = inputs.get('senha');

    if (usuario == "admin" && senha == "123") {
        location.href = "Screen_cadastro_veiculos.html";
        const usuario_logou = false;
            localStorage.setItem('false', usuario_logou);
    } else {
        alert("Usuario ou Senha INCORRETOS!")
    }
}