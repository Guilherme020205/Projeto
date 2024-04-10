const form = document.querySelector('form');

form.onsubmit = (e) => {

    e.preventDefault();
    //agrupa todos os inputs numa variável
    const inputs = new FormData(e.target);

    // .get( ) capitura pega cada valor do input pelo name
    const usuario = inputs.get('usuario');
    const senha = inputs.get('senha');

    if (usuario === "admin" && senha === "123") {
        sessionStorage.setItem('usuarioLogado', '1');
        location.href = "Screen_cadastro_veiculos.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}