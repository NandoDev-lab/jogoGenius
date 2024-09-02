
// Seleciona os botões de cor
const buttons = {
    red: document.getElementById('red'),
    green: document.getElementById('green'),
    blue: document.getElementById('blue'),
    yellow: document.getElementById('yellow')
};
// Sons para cada cor
const sounds = {
    red: new Audio('sounds/red.mp3'),
    green: new Audio('sounds/green.mp3'),
    blue: new Audio('sounds/blue.mp3'),
    yellow: new Audio('sounds/yellow.mp3')
};

// Placar
let score = {
    player1: 0,
    player2: 0
};


let sequence = []; // Sequência de cores do jogo
let playerSequence = []; // Sequência do jogador
let turn = 0; // Índice do turno atual
let currentPlayer = 1; // Jogador atual
let round = 1; // Rodada atual


// Atualiza o placar na tela
function updateScore() {
    document.getElementById('score1').textContent = score.player1;
    document.getElementById('score2').textContent = score.player2;
}

// Função para acender e tocar o som da cor
function activateButton(color) {
    buttons[color].classList.add('active');
    sounds[color].play();
    setTimeout(() => {
        buttons[color].classList.remove('active');
    }, 500);
}

// Função para acender e apagar a cor
function activateButton(color) {
    buttons[color].classList.add('active');
    setTimeout(() => {
        buttons[color].classList.remove('active');
    }, 500);
}

// Função para gerar uma nova cor aleatória
function generateNewColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomColor);
}

// Função para começar um novo turno
function startTurn() {
    playerSequence = [];
    turn = 0;
    console.log(`Round ${round}, Player ${currentPlayer}'s turn.`);
    showSequence();
}

// Função para mostrar a sequência ao jogador
function showSequence() {
    sequence.forEach((color, index) => {
        setTimeout(() => {
            activateButton(color);
        }, index * 800);
    });
}

// Função para capturar a jogada do jogador
function playerMove(color) {
    playerSequence.push(color);
    activateButton(color);
    if (playerSequence[turn] !== sequence[turn]) {
        alert(`Player ${currentPlayer} errou! Fim de jogo.`);
        return;
    }
    turn++;
    if (turn === sequence.length) {
        alert(`Player ${currentPlayer} acertou a sequência!`);
        
        updateScore()
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
            generateNewColor();
            round++;
        }
        setTimeout(startTurn, 1000);
    }
}

// Inicializa o jogo
function startGame() {
    console.log("Iniciando o jogo Genius para 2 jogadores!");
    generateNewColor();
    startTurn();
}

// Adiciona escutadores de eventos para os botões
Object.keys(buttons).forEach(color => {
    buttons[color].addEventListener('click', () => {
        playerMove(color);
    });
});

// Inicia o jogo
startGame();