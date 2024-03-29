
        document.addEventListener('DOMContentLoaded', function () {

            const lista = lista_veiculos;
            
            const template = document.querySelector('.box_veiculos');
            const container = document.querySelector('.box_anucios');

            for (let i = 0; i < lista[0].length; i++) {
                const clone = template.cloneNode(true);
                clone.querySelector('.foto_veiculo').src = lista[0][i];
                clone.querySelector('.nome_veiculo').textContent = lista[1][i];
                clone.querySelector('.preco_veiculo').textContent = lista[2][i];
                clone.querySelector('.ano_veiculo').textContent = lista[3][i];
                clone.style.display = "block"; 


                clone.querySelector('.ver_mais_btn').addEventListener('click', function() {
                    const carro_visto = lista[1][i];
                    localStorage.setItem('carro_visto', carro_visto);
                    location.href = "Screen_descricao_veiculo.html";
                });

                container.appendChild(clone);
            }
        });