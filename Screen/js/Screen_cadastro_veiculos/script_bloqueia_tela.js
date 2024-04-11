document.addEventListener('DOMContentLoaded', function () {

    var usuarioLogado = sessionStorage.getItem('usuarioLogado');

    if (!usuarioLogado) {
        alert("Você não está autorizado a acessar esta página. Por favor, faça login.");
        window.location = "Screen_home.html"
    }
    
});
