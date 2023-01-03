
let player1;
let player2;
let ScoreP1 = document.getElementById("ScoreP1");
let ScoreP2 = document.getElementById("ScoreP2");
let sequencia_certa;
let ordem_fixa = [];
let ordem_temporaria = [];
let clicou = false;
let cor;
let novaCor;
let jog_da_vez;

function corClicada(cor,id){
    clicou = true;
    cor = id;
    inicio_jogo(cor)
}  

function mudaJogador(){    
          
        if(jog_da_vez==player1){
            jog_da_vez = player2;
        }else if(jog_da_vez==player2){                    
                jog_da_vez = player1;                 
        }
    }


function start(){
    player1 = prompt("Digite o nome do primeiro Jogador: ");
    player2 = prompt("Digite o nome do segundo Jogador: ");
    console.log("começou o jogo");
    jog_da_vez = player1;
    console.log(jog_da_vez);
   
       
}


function inicio_jogo(cor){   
    ordem_fixa.push(cor);
    console.log(cor)
    mudaJogador();
    console.log(jog_da_vez);
    criaSequenciaTemporaria();
}

function criaSequenciaTemporaria(){
    while(ordem_temporaria.length===ordem_fixa.length){ 
        corClicada(cor,id);       
        ordem_temporaria.push(cor);
        console.log(" Temporaria "+ ordem_temporaria.length + " ordem Fixa" + ordem_fixa.length)
        console.log(" Temporaria "+ ordem_temporaria + " ordem Fixa" + ordem_fixa)
    }
}

function checarJogada(){
        
}
