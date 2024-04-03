document.addEventListener('DOMContentLoaded', function () {

    const lista_inscricao_veiculos = inscricao_veiculos;
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

    const carroSelecionado = localStorage.getItem('carro_visto');

    if (carroSelecionado) {

        const box_foto = document.querySelector('.box_fotos_veiculo');
        const box_descricao_pai = document.querySelector('.box_descricao_pai_veiculo');
        const box_descricao_filho = document.querySelector('.box_descricao_filho_veiculo');

        for (let i = 0; i < lista_inscricao_veiculos.length; i++) {
            if (carroSelecionado == lista_inscricao_veiculos[i]) {

                for (let p = 0; p < lista_fotos_dos_veiculos.length; p++) {
                    const foto_veiculo = lista_fotos_dos_veiculos[p][i];
                    if (foto_veiculo !== "") {
                        const img = document.createElement('img');
                        img.src = foto_veiculo;
                        img.width = 200; 
                        img.height = 150;
                        img.classList.add('fotos_veiculo');
                        box_foto.appendChild(img);
                    } else {
                        const img = document.createElement('img');
                        img.src = "https://portal.crea-sc.org.br/wp-content/uploads/2017/11/imagem-indisponivel-para-produtos-sem-imagem_15_5.jpg";
                        img.width = 200;
                        img.height = 150;
                        img.classList.add('fotos_veiculo');
                        box_foto.appendChild(img);
                    }
                }
 
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
                

                break;
            }
        }
    } else {
        document.getElementById('carro_selecionado').textContent = "Nenhum carro selecionado.";
    }

})
