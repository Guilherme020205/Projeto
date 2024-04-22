document.addEventListener('DOMContentLoaded', function () {

    // Função para atualizar a lista de veículos exibida
    function atualizarListaVeiculos() {
        // Obtenção das listas de dados dos veículos
        const lista_inscricao_veiculos = inscricao_veiculos;
        const lista_foto_capa = fotos_dos_veiculos;
        const lista_marca = marcas_veiculos;
        const lista_preco = precos_veiculos;
        const lista_ano = anos_veiculos;

        // Obtenção do template e do container onde os veículos serão exibidos
        const template = document.querySelector('.box_veiculos');
        const container = document.querySelector('.box_anucios');

        container.innerHTML = ''; // Limpa o conteúdo do container antes de adicionar novos itens

        // Limita o valor de lista_termina ao tamanho da lista
        let lista_termina_limite = Math.min(lista_termina, lista_inscricao_veiculos.length - 1);

        // Loop para exibir os veículos na página
        for (let i = lista_comeca; i <= lista_termina_limite; i++) {
            const clone = template.cloneNode(true);
            // Preenchimento dos dados do veículo no template clonado
            clone.querySelector('.foto_veiculo').src = lista_foto_capa[0][i];
            clone.querySelector('.marca_veiculo').textContent = lista_marca[i];
            clone.querySelector('.preco_veiculo').textContent = 'R$ ' + lista_preco[i];
            clone.querySelector('.ano_veiculo').textContent = lista_ano[i];
            clone.style.display = "block";

            // Adiciona um evento de clique ao botão "Ver Mais"
            clone.querySelector('.ver_mais_btn').addEventListener('click', function () {
                const carro_visto = lista_inscricao_veiculos[i];
                localStorage.setItem('carro_visto', carro_visto);
                location.href = "Screen_descricao_veiculo.html";
            });

            container.appendChild(clone); // Adiciona o veículo clonado ao container
        }

        atualizarVisibilidadeBotoes(); // Certifique-se de que os botões de paginação também sejam atualizados
    }

    let lista_comeca = 0;
    let lista_termina = 20;

    // Obtém os botões de navegação
    var botao_volta = document.getElementById("botao_volta");
    var botao_adiante = document.getElementById("botao_adiante");

    // Define a página atual
    var pagina_atual = 1;

    // Obtém o elemento que mostra a página atual
    var info_pagina_atual = document.getElementById("pagina_atual");
    info_pagina_atual.textContent = pagina_atual;

    // Função para atualizar a visibilidade dos botões de navegação
    function atualizarVisibilidadeBotoes() {
        if (pagina_atual > 1) {
            botao_volta.style.display = "inline-block";
        } else {
            botao_volta.style.display = "none";
        }

        // Verifica se chegou ao final da lista
        if (lista_termina >= inscricao_veiculos.length - 1) {
            botao_adiante.style.display = "none";
        } else {
            botao_adiante.style.display = "inline-block";
        }
    }

    atualizarVisibilidadeBotoes(); // Chama a função para garantir que os botões de navegação sejam inicializados corretamente

    // Adiciona um evento de clique ao botão "Voltar"
    botao_volta.addEventListener("click", function () {
        pagina_atual--; // Diminui o número da página atual
        lista_comeca = Math.max(0, lista_comeca - 20); // Atualiza o índice de início da lista de veículos
        lista_termina = Math.max(20, lista_termina - 20); // Atualiza o índice de término da lista de veículos
        info_pagina_atual.textContent = pagina_atual; // Atualiza o número da página exibido
        atualizarListaVeiculos(); // Atualiza a lista de veículos ao retroceder uma página
    });

    // Adiciona um evento de clique ao botão "Avançar"
    botao_adiante.addEventListener("click", function () {
        pagina_atual++; // Aumenta o número da página atual
        lista_comeca += 20; // Atualiza o índice de início da lista de veículos
        lista_termina += 20; // Atualiza o índice de término da lista de veículos
        info_pagina_atual.textContent = pagina_atual; // Atualiza o número da página exibido
        atualizarListaVeiculos(); // Atualiza a lista de veículos ao avançar uma página
    });

    // Chamando a função para exibir os primeiros veículos ao carregar a página
    atualizarListaVeiculos();

});
