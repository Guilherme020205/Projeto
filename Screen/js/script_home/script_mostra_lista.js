document.addEventListener('DOMContentLoaded', function () {

    const lista_inscricao_veiculos = inscricao_veiculos;
    const lista_foto_capa = fotos_capa_veiculos;
    const lista_marca = marcas_veiculos;
    const lista_preco = precos_veiculos;
    const lista_ano = anos_veiculos;

    const template = document.querySelector('.box_veiculos');
    const container = document.querySelector('.box_anucios');

    for (let i = 0; i < lista_inscricao_veiculos.length; i++) {
        const clone = template.cloneNode(true);
        clone.querySelector('.foto_veiculo').src = lista_foto_capa[i];
        clone.querySelector('.marca_veiculo').textContent = lista_marca[i];
        clone.querySelector('.preco_veiculo').textContent = lista_preco[i];
        clone.querySelector('.ano_veiculo').textContent = lista_ano[i];
        clone.style.display = "block";

        clone.querySelector('.ver_mais_btn').addEventListener('click', function () {
            const carro_visto = lista_inscricao_veiculos[i];
            localStorage.setItem('carro_visto', carro_visto);
            location.href = "Screen_descricao_veiculo.html";
        });
 
        container.appendChild(clone);
    }
});