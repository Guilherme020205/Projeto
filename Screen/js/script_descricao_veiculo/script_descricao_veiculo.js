document.addEventListener('DOMContentLoaded', function () {
    const lista = lista_veiculos;

    // Recupera o nome do carro selecionado do localStorage
    const carroSelecionado = localStorage.getItem('carro_visto');

    // Verifica se há um carro selecionado
    if (carroSelecionado) {

        document.getElementById('carro_selecionado').textContent;

        const template = document.querySelector('.box_veiculo');

        for (let i = 0; i < lista[1].length; i++) {

            if (carroSelecionado == lista[1][i]) {

                const clone = template.cloneNode(true);
                clone.querySelector('.foto_veiculo').src = lista[0][i];
                clone.querySelector('.nome_veiculo').textContent = lista[1][i];
                clone.querySelector('.preco_veiculo').textContent = lista[2][i];
                clone.querySelector('.ano_veiculo').textContent = lista[3][i];
                clone.style.display = "block";
                document.body.appendChild(clone); // Adiciona o clone ao corpo do documento
            }
        }

    } else {
        // Se não houver carro selecionado, exibe uma mensagem de erro
        document.getElementById('carro_selecionado').textContent = "Nenhum carro selecionado.";
    }

})