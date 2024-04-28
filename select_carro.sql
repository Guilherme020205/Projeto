-- Active: 1712276094863@@127.0.0.1@3306@loja_veiculos
select carros.id as "id cadastro", 
marcas.nome as "marca", 
modelos.nome as "modelo", 
carros.preco as "valor", 
carros.ano as "ano", 
carros.km as "km", 
marchas.nome as "marcha",
cores.nome as "cor",
carrocerias.nome as "carroceria",
combustiveis.nome as "combustivel",
carros.sobre as "sobre"
from carros 
inner join marcas on marcas.id = carros.marca
inner join modelos on modelos.marca = carros.marca
inner join marchas on marchas.id = carros.marcha
inner join cores on cores.id = carros.cor
inner join carrocerias on carrocerias.id = carros.carroceria 
inner join combustiveis on combustiveis.id = carros.combustivel 
order by carros.id;