
        document.addEventListener('DOMContentLoaded', function () {
            const lista_foto_capa = lista_fotos_capa_veiculos;
            const lista_marca = lista_marcas_veiculos;
            const lista_preco = lista_precos_veiculos;
            const lista_ano = lista_anos_veiculos;
            
            const template = document.querySelector('.box_veiculos');
            const container = document.querySelector('.box_anucios');

            for (let i = 0; i < lista_marca[0].length; i++) {
                const clone = template.cloneNode(true);
                clone.querySelector('.foto_veiculo').src = lista_foto_capa[i];
                clone.querySelector('.marca_veiculo').textContent = lista_marca[i];
                clone.querySelector('.preco_veiculo').textContent = lista_preco[i];
                clone.querySelector('.ano_veiculo').textContent = lista_ano[i];
                clone.style.display = "block"; 

                clone.querySelector('.ver_mais_btn').addEventListener('click', function() {
                    const carro_visto = lista_marca[i];
                    localStorage.setItem('carro_visto', carro_visto);
                    location.href = "Screen_descricao_veiculo.html";
                });

                container.appendChild(clone);
            }
        });
