document.addEventListener('DOMContentLoaded', function () {
    const limite_cards = 4; // Alterado para exibir apenas 4 carros aleatoriamente

    // Função para atualizar a lista de veículos exibida
    function atualizarListaVeiculos() {
        // Obtenção das listas de dados dos veículos
        const lista_inscricao_veiculos = inscricao_veiculos;
        const lista_foto_capa = fotos_dos_veiculos;
        const lista_marca = marcas_veiculos;
        const lista_preco = precos_veiculos;
        const lista_ano = anos_veiculos;
        const lista_km = km_veiculos;

        // Obtenção do template e do container onde os veículos serão exibidos
        const template = document.querySelector('.box_veiculoslista_car_descricao');
        const container = document.querySelector('.box_anucioslista_car_descricao');

        container.innerHTML = ''; // Limpa o conteúdo do container antes de adicionar novos itens

        // Embaralha os índices dos veículos aleatoriamente
        const veiculosAleatoriosIndices = embaralharArray(lista_inscricao_veiculos.map((_, index) => index)).slice(0, limite_cards);

        // Loop para exibir os veículos aleatórios na página
        veiculosAleatoriosIndices.forEach((indice) => {
            const clone = template.cloneNode(true);
            // Preenchimento dos dados do veículo no template clonado
            clone.querySelector('.foto_veiculolista_car_descricao').src = lista_foto_capa[0][indice];
            clone.querySelector('.marca_veiculolista_car_descricao').textContent = lista_marca[indice];
            clone.querySelector('.preco_veiculolista_car_descricao').textContent = 'R$ ' + lista_preco[indice];
            clone.querySelector('.ano_veiculolista_car_descricao').textContent = lista_ano[indice];
            clone.querySelector('.km_veiculolista_car_descricao').textContent = lista_km[indice] + " km";

            clone.style.display = "block";

            // Adiciona um evento de clique ao botão "Ver Mais"
            clone.querySelector('.ver_mais_btn').addEventListener('click', function () {
                const carro_visto = lista_inscricao_veiculos[indice];
                localStorage.setItem('carro_visto', carro_visto);
                location.href = "Screen_descricao_veiculo.html";
            });
 
            container.appendChild(clone); // Adiciona o veículo clonado ao container
        });

        atualizarVisibilidadeBotoes(); // Certifique-se de que os botões de paginação também sejam atualizados
    }

    // Função para embaralhar um array
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Chamando a função para exibir os primeiros veículos ao carregar a página
    atualizarListaVeiculos();
});
