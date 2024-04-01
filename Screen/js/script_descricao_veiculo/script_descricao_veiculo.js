document.addEventListener('DOMContentLoaded', function () {

    const lista_foto = lista_fotos_capa_veiculos;
    const lista_marca = lista_marcas_veiculos;
    const lista_modelo = lista_modelos_veiculos;
    const lista_preco = lista_precos_veiculos;
    const lista_ano = lista_anos_veiculos;
    const lista_km = lista_km_veiculos
    const lista_cor = lista_cor_veiculos
    const lista_combustivel =lista_combustivel_veiculos
    const lista_marcha =lista_marcha_veiculos
    const lista_carroceria =lista_carroceria_veiculos
    const lista_sobre =lista_sobre_veiculos

    // Recupera o nome do carro selecionado do localStorage
    const carroSelecionado = localStorage.getItem('carro_visto');

    // Verifica se há um carro selecionado
    if (carroSelecionado) {

        document.getElementById('carro_selecionado').textContent;

        const template = document.querySelector('.box_veiculo');

        for (let i = 0; i < lista_marca[1].length; i++) {

            if (carroSelecionado == lista_marca[i]) {

                const clone = template.cloneNode(true);
                clone.querySelector('.foto_veiculo').src = lista_foto[i];
                clone.querySelector('.marca_veiculo').textContent = lista_marca[i];
                clone.querySelector('.preco_veiculo').textContent = 'R$ ' + lista_preco[i];
                clone.querySelector('.modelo_veiculo').textContent = 'Modelo: ' + lista_modelo[i];
                clone.querySelector('.ano_veiculo').textContent = 'Ano: ' + lista_ano[i];
                clone.querySelector('.km_veiculo').textContent = 'KM: ' + lista_km[i];
                clone.querySelector('.cor_veiculo').textContent = 'Cor: ' + lista_cor[i];
                clone.querySelector('.combustivel_veiculo').textContent = 'Combustível: ' + lista_combustivel[i];
                clone.querySelector('.marcha_veiculo').textContent = 'Marcha: ' + lista_marcha[i];
                clone.querySelector('.carroceria_veiculo').textContent = 'Carroceria: ' + lista_carroceria[i];
                clone.querySelector('.sobre_veiculo').textContent = 'Sobre este carro: ' + lista_sobre[i];
                clone.style.display = "block";
                document.body.appendChild(clone); // Adiciona o clone ao corpo do documento
            }
        }

    } else {
        // Se não houver carro selecionado, exibe uma mensagem de erro
        document.getElementById('carro_selecionado').textContent = "Nenhum carro selecionado.";
    }

})