document.addEventListener('DOMContentLoaded', function () {

    const box_rodape = document.querySelector('.rodape');

    const foto_logo = "../img/carro.png";
    
    const img = document.createElement('img');
    img.src = foto_logo;
    img.width = 200;
    img.height = 200;
    img.classList.add('fotos_veiculo');
    box_rodape.appendChild(img);
    
    // const lista_localizacao = localizacao[1];

    // const p_localizacao = document.createElement('img');
    // p_localizacao.textContent = "dfdffggaga"
    // p_localizacao.classList.add('p_localizacao');
    // box_rodape.appendChild(p_localizacao);


    // const lista_telefone = tel;
    // const lista_email = email;
    

});

// const localizacao = [
//     [' Av. Pedra Branca'],
//     ['231'],
//     ['Palhoça'],
//     ['SC'],
//     ['88137-280'],
//     ['https://maps.app.goo.gl/mWzyMYA2nogEthbb7']
// ]
// const tel = [
//     ['48'],
//     ['99187-2598'],
//     ['https://wa.me/5548991872908']
// ]
// const email = 'mailto:seemannguilherme@gmail.com'