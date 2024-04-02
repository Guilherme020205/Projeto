document.addEventListener('DOMContentLoaded', function () {

    const lista_inscricao_veiculos = inscricao_veiculos;
    // const lista_fotos_dos_veiculos = fotos_capa_veiculos;
    const lista_fotos_dos_veiculos = fotos_dos_veiculos;
    const lista_marca = marcas_veiculos;
    const lista_modelo = modelos_veiculos;
    const lista_preco = precos_veiculos;
    const lista_ano = anos_veiculos;
    const lista_km = km_veiculos
    const lista_cor = cor_veiculos
    const lista_combustivel = combustivel_veiculos
    const lista_marcha = marcha_veiculos
    const lista_carroceria = carroceria_veiculos
    const lista_sobre = sobre_veiculos

    // Recupera o nome do carro selecionado do localStorage
    const carroSelecionado = localStorage.getItem('carro_visto');

    // Verifica se há um carro selecionado
    if (carroSelecionado) {

        const box_foto = document.querySelector('.box_fotos_veiculo');
        const box_descricao_pai = document.querySelector('.box_descricao_pai_veiculo');
        const box_descricao_filho = document.querySelector('.box_descricao_filho_veiculo');

        for (let i = 0; i < lista_inscricao_veiculos.length; i++) {
            if (carroSelecionado == lista_inscricao_veiculos[i]) {


                const fotos_veiculo = box_foto.querySelector('.fotos_veiculo');
                fotos_veiculo.src = lista_fotos_dos_veiculos[i];

                const marca_veiculo = box_descricao_pai.querySelector('.marca_veiculo');
                marca_veiculo.textContent = lista_marca[i];

                const preco_veiculo = box_descricao_pai.querySelector('.preco_veiculo');
                preco_veiculo.textContent = 'R$ ' + lista_preco[i];

                const modelo_veiculo = box_descricao_pai.querySelector('.modelo_veiculo');
                modelo_veiculo.textContent = 'Modelo: ' + lista_modelo[i];

                const ano_veiculo = box_descricao_pai.querySelector('.ano_veiculo');
                ano_veiculo.textContent = 'Ano: ' + lista_ano[i];

                const km_veiculo = box_descricao_pai.querySelector('.km_veiculo');
                km_veiculo.textContent = 'KM: ' + lista_km[i];

                const cor_veiculo = box_descricao_pai.querySelector('.cor_veiculo');
                cor_veiculo.textContent = 'Cor: ' + lista_cor[i];

                const combustivel_veiculo = box_descricao_pai.querySelector('.combustivel_veiculo');
                combustivel_veiculo.textContent = 'Combustível: ' + lista_combustivel[i];

                const marcha_veiculo = box_descricao_pai.querySelector('.marcha_veiculo');
                marcha_veiculo.textContent = 'Marcha: ' + lista_marcha[i];

                const carroceria_veiculo = box_descricao_pai.querySelector('.carroceria_veiculo');
                carroceria_veiculo.textContent = 'Carroceria: ' + lista_carroceria[i];

                const sobre_veiculo = box_descricao_filho.querySelector('.sobre_veiculo');
                sobre_veiculo.textContent = 'Sobre este carro: ' + lista_sobre[i];

                break; // Interrompe o loop após encontrar o carro selecionado
            }
        }
    } else {
        // Se não houver carro selecionado, exibe uma mensagem de erro
        document.getElementById('carro_selecionado').textContent = "Nenhum carro selecionado.";
    }

})