// Play board é a Tela ou Tabuleiro
/* Conteiner onde a cobra e a comida serão rederizadas.  */
const playBoard = document.querySelector(".play-board");

// Placar atual
const scoreElement = document.querySelector(".score");

// Recorde (maoir pontuação)
const highScoreElement = document.querySelector(".record") /* O "querySelector" é para "puxar" um 
elemento com alguma classe do html.*/

// Controle de movimento
/* Seleciona elementos <i> Icones Botões para Devices Mobiles. */
const controls = document.querySelectorAll(".controls i") /* o "document" vai procurar
por todo o documento html o que você está "puxando". O "querySelectorAll" "puxa"
todos os elementos com a classe ou o elemento.*/

// Cadastro de Variáveis
/* Variável Boleana que indica se o jogo terminou. */
let gameOver = false;

// Variável para armazenar as coodernadas X e Y da comida (aleatórias).
let foodX, foodY;

// Armazena as coordenadas X e Y da cabeça da cobra (posição inicial de 5).
let snakeX = 5, snakeY = 5;

// Variável para armazenar a velocidade nas direções X e Y, inicialmente em 0.
let velocityX = 0, velocityY = 0;

// Uma Array para armazenar as coordenadas de cada segmento do corpo, primeiro elemento é a cabeça.
let snakeBody = [];

// Variável para armazenar o ID do intervalo que será usado para atualizar o jogo em um determinado ritmo.
let setIntervalId;

// Variável para manter o controle da pontuação atual do jogador.
let score = 0;


// Obtenha a pontuação alto do armazenamento local
/* Tenta recuperar o valor associado à chave "high-score" do armazenamento local do navegador. */
let highScore = localStorage.getItem("high-score") || 0;
/* Se o localStorage retornar NULL (caso ele não exista), a variável highscore será definida como 0. */

// Posição aleatória entre 1 e 30 para a comida.
const updateFoodPosition = () => { // Retorna um número de ponto flutuante pseudoaleatório entre 0 e 1.
    foodX = Math.floor(Math.random()* 30) + 1; /* "* 30" Multiplica o número aleatório por 30 para obter um valor entre 0 e quase 30. O "Math.floor()" arrendonda o resultado para o inteiro mais próximo (entre 0 e 29). O "+ 1" adiciona 1 para garantir que as coordenadas da comida estejam entre 1 e 30.*/
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

// Função para lidar com o Fim do Jogo
/* Função handleGameOver = quando a cobra colide consigo mesma ou com as paredes do tabuleiro. */

const handleGameOver = () => {
    clearInterval (setIntervalId);
    alert("Game Over! Aperte Ok para iniciar novamente...");
    location.reload();
}