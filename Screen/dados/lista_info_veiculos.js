const inscricao_veiculos = ['1', '2', '3', '4', '5', '6','7']
const marcas_veiculos = ['FERRARI', 'BMW', 'NISSAN', 'FERRARI', 'BMW', 'NISSAN', 'fusca']
const modelos_veiculos = ['FERRARI ROMA', 'BMW X4', 'NISSAN KICKS', 'FERRARI ROMA', 'BMW X4', 'NISSAN KICKS', 'fusca']
const precos_veiculos = ['3.150.000', '559.900', '107.900', '3.150.000', '559.900', '107.900', 'fusca']
const anos_veiculos = ['2022/2022', '2019/2020', '2023/2024', '2022/2022', '2019/2020', '2023/2024', 'fusca']
const km_veiculos = ['430', '33.000', '0', '430', '33.000', '0', 'fusca']
const cor_veiculos = ['Vermelho', 'Preto', 'cinza', 'Vermelho', 'Preto', 'cinza', 'fusca']
const combustivel_veiculos = ['Gasolina', 'Gasolina', 'Gasolina e álcool', 'Gasolina', 'Gasolina', 'Gasolina e álcool', 'fusca']
const marcha_veiculos = ['Automatizada DCT', 'Automática', 'Automática', 'Automatizada DCT', 'Automática', 'Automática', 'fusca']
const carroceria_veiculos = ['Cupê', 'Utilitário esportivo', 'Utilitário esportivo', 'Cupê', 'Utilitário esportivo', 'Utilitário esportivo', 'fusca']
const sobre_veiculos = [
    'Full PPF Faróis de LED Spliter em Fibra de Carbono Aerofólio em Fibra de Carbono Pontas de escapamento em Preto Acetinado Retrovisores externos fotocrômicos Escudos "Scuderia Ferrari" Interior em Couro Terra Brucita e Alcântara com costuras Brancas Acabamentos internos em Fibra de Carbono Detalhes internos em Alumínio Painel de instrumentos digital configurável com Navegação Multimídia com Navegação, Bluetooth e conexão com Apple Carplay Tapetes com acabamentos em Couro com grafia "ROMA" Outros Opcionais: Direção Elétrica, Comando de áudio no volante, Controle de estabilidade, Distribuição eletrônica de frenagem, Pára-choques na cor do veículo.',
    'Veiculo em ótimo estado de conservação. 4 pneus semi-novos, teto solar e laudo cautelar totalmente aprovado.',
    'Veiculo 0KM',
    'Full PPF Faróis de LED Spliter em Fibra de Carbono Aerofólio em Fibra de Carbono Pontas de escapamento em Preto Acetinado Retrovisores externos fotocrômicos Escudos "Scuderia Ferrari" Interior em Couro Terra Brucita e Alcântara com costuras Brancas Acabamentos internos em Fibra de Carbono Detalhes internos em Alumínio Painel de instrumentos digital configurável com Navegação Multimídia com Navegação, Bluetooth e conexão com Apple Carplay Tapetes com acabamentos em Couro com grafia "ROMA" Outros Opcionais: Direção Elétrica, Comando de áudio no volante, Controle de estabilidade, Distribuição eletrônica de frenagem, Pára-choques na cor do veículo.',
    'Veiculo em ótimo estado de conservação. 4 pneus semi-novos, teto solar e laudo cautelar totalmente aprovado.',
    'Veiculo 0KM',
    'Fuscaaaaaaaaaaa'
]

const fotos_dos_veiculos = [
    ['https://bocamafrapremium.com.br/wp-content/uploads/2023/10/423c4b292fe74bdf8a5253b154cb2459_1638536008722.jpeg', 'https://img.olx.com.br/images/24/248469726577906.jpg', 'https://www.nissan.com.br/content/dam/Nissan/br/site/veiculos/novo-kicks-24/360/branco-diamond/36.jpg.ximg.c1h.360.jpg', 'https://cdn.motor1.com/images/mgl/mMPmzP/306:0:4885:3666/2024-ford-mustang-gt-exterior-front-quarter.webp', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/2018_Ford_Mustang_GT_5.0_Front.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dbRoLsEXWoUtmZXzjzzVFVUwWijsbtdSm9XfDU372w&s', 'https://lartbr.com.br/wp-content/uploads/2023/05/IMG_0443.jpg'],
    ['https://bocamafrapremium.com.br/wp-content/uploads/2023/10/964b58675f1f4c55b07c2a87caa357a0_1638536008656.jpeg', 'https://img.olx.com.br/images/24/247414124876238.jpg', 'https://cdn.antaranews.com/cache/1200x800/2022/07/19/220719_2-source.jpg', 'https://bocamafrapremium.com.br/wp-content/uploads/2023/10/964b58675f1f4c55b07c2a87caa357a0_1638536008656.jpeg', 'https://img.olx.com.br/images/24/247414124876238.jpg', 'https://cdn.antaranews.com/cache/1200x800/2022/07/19/220719_2-source.jpg', ''],
    ['https://bocamafrapremium.com.br/wp-content/uploads/2023/10/b47f2315f7554d9d92b19d0c316b7cde_1638536008735.jpeg', 'https://img.olx.com.br/images/24/245450005351059.jpg', '', 'https://bocamafrapremium.com.br/wp-content/uploads/2023/10/b47f2315f7554d9d92b19d0c316b7cde_1638536008735.jpeg', 'https://img.olx.com.br/images/24/245450005351059.jpg', '',''],
    ['https://bocamafrapremium.com.br/wp-content/uploads/2023/10/236f716bcc0a4d44af46baef93cccedc_1638536008659.jpeg', 'https://img.olx.com.br/images/24/246447241137206.jpg', '','https://bocamafrapremium.com.br/wp-content/uploads/2023/10/236f716bcc0a4d44af46baef93cccedc_1638536008659.jpeg', 'https://img.olx.com.br/images/24/246447241137206.jpg', '',''],
    ['https://bocamafrapremium.com.br/wp-content/uploads/2023/10/58283d84c48d4bedae47e1d57a19d782_1638536008625.jpeg', '','','https://bocamafrapremium.com.br/wp-content/uploads/2023/10/58283d84c48d4bedae47e1d57a19d782_1638536008625.jpeg', '','','']

] 