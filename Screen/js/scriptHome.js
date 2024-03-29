document.addEventListener('DOMContentLoaded', function () {

    const lista = lista_veiculos;

    const template = document.querySelector('.box_veiculos');

    for (let i = 0; i < lista[0].length; i++) {
        const clone = template.cloneNode(true);
        clone.querySelector('#foto_veiculo').src = lista[0][i];
        clone.querySelector('#nome_veiculo').textContent = lista[1][i];
        clone.querySelector('#preco_veiculo').textContent = lista[2][i];
        clone.querySelector('#ano_veiculo').textContent = lista[3][i];

        // Adiciona um índice ao final dos IDs clonados para torná-los únicos
        clone.id = `box_veiculos_${i}`;
        document.body.appendChild(clone);
    }
});
