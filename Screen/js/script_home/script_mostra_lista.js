document.addEventListener('DOMContentLoaded', function () {

    const lista_inscricao_veiculos = inscricao_veiculos;
    const lista_foto_capa = fotos_dos_veiculos;
    const lista_marca = marcas_veiculos;
    const lista_preco = precos_veiculos;
    const lista_ano = anos_veiculos;

    const template = document.querySelector('.box_veiculos');
    const container = document.querySelector('.box_anucios');

    let lista_comeca = 0
    let lista_termina = 5


    for (let i = lista_comeca; i <= lista_termina; i++) {
        const clone = template.cloneNode(true);
        clone.querySelector('.foto_veiculo').src = lista_foto_capa[0][i];
        clone.querySelector('.marca_veiculo').textContent = lista_marca[i];
        clone.querySelector('.preco_veiculo').textContent = 'R$ ' + lista_preco[i];
        clone.querySelector('.ano_veiculo').textContent = lista_ano[i];
        clone.style.display = "block";

        clone.querySelector('.ver_mais_btn').addEventListener('click', function () {
            const carro_visto = lista_inscricao_veiculos[i];
            localStorage.setItem('carro_visto', carro_visto);
            location.href = "Screen_descricao_veiculo.html";
        });

        container.appendChild(clone);
    }

    // Obtém o botão pelo ID
    var botao_volta = document.getElementById("botao_volta");
    var botao_adiante = document.getElementById("botao_adiante");

    // Define pag atual
    var pagina_atual = 1;

    // Obtém o info pagina pelo ID
    var info_pagina_atual = document.getElementById("pagina_atual");
    info_pagina_atual.textContent = pagina_atual;

    // Função para atualizar a visibilidade dos botões
    function atualizarVisibilidadeBotoes() {
        if (pagina_atual > 1) {
            botao_volta.style.display = "inline-block";
        } else {
            botao_volta.style.display = "none";
        }
        if (pagina_atual < 30) {
            botao_adiante.style.display = "inline-block";
        } else {
            botao_adiante.style.display = "none";
        }
    }

    atualizarVisibilidadeBotoes();

    botao_volta.addEventListener("click", function () {
        // Converte o texto atual para um número e subtrai 1
        pagina_atual--;
        info_pagina_atual.textContent = pagina_atual;
        atualizarVisibilidadeBotoes();
    });

    botao_adiante.addEventListener("click", function () {
        // Converte o texto atual para um número e adiciona 1
        pagina_atual++;
        info_pagina_atual.textContent = pagina_atual;
        atualizarVisibilidadeBotoes();
    });

});