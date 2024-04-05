document.addEventListener('DOMContentLoaded', function () {

    const box_rodape = document.querySelector('.rodape'); 

    //info
    const foto_logo = foto_logo_loja;

    const localizacao = `${lista_da_localizacao_loja[0][0]}, ${lista_da_localizacao_loja[1][0]}, ${lista_da_localizacao_loja[2][0]}, ${lista_da_localizacao_loja[3][0]}, ${lista_da_localizacao_loja[4][0]}`;

    const localizacao_link = lista_da_localizacao_loja[5][0];

    const tel = `(${tel_loja[0][0]}) ${tel_loja[1][0]}`;

    const tel_link = tel_loja[2][0];
    
    const email = email_loja[0][0];
    const email_link = email_loja[1][0];


    //info

    const img = document.createElement('img');
    img.src = foto_logo;
    img.width = 200;
    img.height = 200;
    img.classList.add('fotos_veiculo');
    box_rodape.appendChild(img);

    
     //Link localizacao
     var localizacaoElement = document.createElement("p");
    
     localizacaoElement.textContent = localizacao;
     
     // estilo do cursor quando passa por cima do elemento
     localizacaoElement.style.cursor = "pointer";
     
     // Adiciona um evento clique ao elemento
     localizacaoElement.addEventListener("click", function() {
         
         var localizacaoLink = localizacao_link;
         
         window.open(localizacaoLink, "_blank");
     });
     document.body.appendChild(localizacaoElement);
     //Link localizacao

    //Link whatsapp
    var whatsappElement = document.createElement("p");
    
    whatsappElement.textContent = tel;
    
    // estilo do cursor quando passa por cima do elemento
    whatsappElement.style.cursor = "pointer";
    
    // Adiciona um evento clique ao elemento
    whatsappElement.addEventListener("click", function() {
        
        var whatsappLink = tel_link;
        
        window.open(whatsappLink, "_blank");
    });
    document.body.appendChild(whatsappElement);
    //Link whatsapp

    //Link email
    var emailElement = document.createElement("p");
    
    emailElement.textContent = email;
    
    // estilo do cursor quando passa por cima do elemento
    emailElement.style.cursor = "pointer";
    
    // Adiciona um evento clique ao elemento
    emailElement.addEventListener("click", function() {
        
        var emailLink = email_link;
        
        window.open(emailLink, "_blank");
    });
    document.body.appendChild(emailElement);
    //Link email
});
    

