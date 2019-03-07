const total=8;
const botao = document.getElementById("botao");
const botaoPlacar = document.getElementById("botaoPlacar");
let posicoes = [0,1,2,3,4,5,6,7,8,9];
let posicoesfora = [];
let count=0;
let escolhaComputador = 0;
let comecaPartida = Math.random() >= 0.5;
let vence = 0;
const placarPC_span = document.getElementById("placar1");
const placarUSER_span = document.getElementById("placar2");
var placarPC=1;
var placarUSER=1;

function checaVitoria(){
    let posicoesVitoria = [];
    for(i=0;i<=total;i++){
        posicoesVitoria[i] = document.getElementById(i);

    }
    if(posicoesVitoria[0].innerHTML == "x" && posicoesVitoria[1].innerHTML == "x" && posicoesVitoria[2].innerHTML == "x" ){
        vence=1;
    }
    if(posicoesVitoria[2].innerHTML == "x" && posicoesVitoria[5].innerHTML == "x" && posicoesVitoria[8].innerHTML == "x" ){
        vence=1;
    }
    if(posicoesVitoria[6].innerHTML == "x" && posicoesVitoria[7].innerHTML == "x" && posicoesVitoria[8].innerHTML == "x" ){
        vence=1;
    }
    if(posicoesVitoria[0].innerHTML == "x" && posicoesVitoria[3].innerHTML == "x"  && posicoesVitoria[6].innerHTML == "x" ){
        vence=1;
    }
    if(posicoesVitoria[0].innerHTML == "x" && posicoesVitoria[4].innerHTML == "x"  && posicoesVitoria[8].innerHTML == "x" ){
        vence=1;
    }
    if(posicoesVitoria[2].innerHTML == "x" && posicoesVitoria[4].innerHTML == "x"  && posicoesVitoria[6].innerHTML == "x" ){
        vence=1;
    }
    if(posicoesVitoria[3].innerHTML == "x" && posicoesVitoria[4].innerHTML == "x"  && posicoesVitoria[5].innerHTML == "x" ){
        vence=1;
    }
    if(posicoesVitoria[1].innerHTML == "x" && posicoesVitoria[4].innerHTML == "x"  && posicoesVitoria[7].innerHTML == "x" ){
        vence=1;
    }
    
    
    if(posicoesVitoria[0].innerHTML == "o" && posicoesVitoria[1].innerHTML == "o" && posicoesVitoria[2].innerHTML == "o" ){
        vence=-1;
    }
    if(posicoesVitoria[2].innerHTML == "o" && posicoesVitoria[5].innerHTML == "o" && posicoesVitoria[8].innerHTML == "o" ){
        vence=-1;
    }
    if(posicoesVitoria[6].innerHTML == "o" && posicoesVitoria[7].innerHTML == "o" && posicoesVitoria[8].innerHTML == "o" ){
        vence=-1;
    }
    if(posicoesVitoria[0].innerHTML == "o" && posicoesVitoria[3].innerHTML == "o"  && posicoesVitoria[6].innerHTML == "o" ){
        vence=-1;
    }
    if(posicoesVitoria[0].innerHTML == "o" && posicoesVitoria[4].innerHTML == "o"  && posicoesVitoria[8].innerHTML == "o" ){
        vence=-1;
    }
    if(posicoesVitoria[2].innerHTML == "o" && posicoesVitoria[4].innerHTML == "o"  && posicoesVitoria[6].innerHTML == "o" ){
        vence=-1;
    }
    if(posicoesVitoria[3].innerHTML == "o" && posicoesVitoria[4].innerHTML == "o"  && posicoesVitoria[5].innerHTML == "o" ){
        vence=-1;
    }
    if(posicoesVitoria[0].innerHTML == "o" && posicoesVitoria[4].innerHTML == "o"  && posicoesVitoria[7].innerHTML == "o" ){
        vence=-1;
    }
    
        if(vence==-1){
            alert("computador ganhou");
            vence=0;
            placarPC_span.innerHTML = placarPC;
            placarPC++;
            main();  
        }
        if(vence==1){
            alert("Usuario ganhou");
            vence=0;
            placarUSER_span.innerHTML = placarUSER;
            placarUSER++;
            main();
        }

}

function resetPlacar(){
    placarUSER=0;
    placarPC=0;
    placarUSER_span.innerHTML = placarUSER;
    placarPC_span.innerHTML = placarPC;
}

function computadorSeleciona(i){
    if(posicoes[i]==undefined){
        computergame();
    }else{
        posicoes[i].innerHTML = "o";
        delete posicoes[i];
        posicoesfora[count]=i;
        count++;
        console.log("Computador selecionou posicao "+i+" jogadas: "+count);  
        checaVitoria();
    }
}

function computergame(){
    escolhaComputador = Math.floor(Math.random()*total); 
    console.log("Computador tentou jogar "+escolhaComputador+" e viu que não estava vazio");
    if(escolhaComputador!=posicoes){
    computadorSeleciona(escolhaComputador); 
    }else {
        computergame();
    }  
}

function usuarioSeleciona(i){
        if(count!=8){
            posicoes[i].innerHTML = "x";
            delete posicoes[i];
            posicoesfora[count]=i;
            count++;
            console.log("Usuario selecionou posição "+i+" jogadas: "+count);
            computergame();
            checaVitoria();
        }else{
            posicoes[i].innerHTML = "x";
            checaVitoria();
        }   
}

function game(i){
    
    switch(i){
        case i:
            usuarioSeleciona(i);
    }
}

function comecaPartidaAleatoria(comecaPartida){
    if(comecaPartida==true){
        console.log("Usuário começa jogando");
    }else {
        console.log("Computador começa jogando");
        computergame();
    }
}

function populatePosicoes(){
    posicoes=[0,1,2,3,4,5,6,7,8];
    count=0;
    for(i=0;i<=total;i++){
        posicoes[i] = document.getElementById(i);
        posicoes[i].innerHTML="-"
    }
    
}
function main(){
populatePosicoes(); 
comecaPartidaAleatoria(comecaPartida);  
        posicoes[0].addEventListener('click', function(){
            game(0);
        }, {once:true})
        posicoes[1].addEventListener('click', function(){
            game(1);
        }, {once:true})
        posicoes[2].addEventListener('click', function(){
            game(2);
        }, {once:true})
        posicoes[3].addEventListener('click', function(){
            game(3);
        }, {once:true})
        posicoes[4].addEventListener('click', function(){
            game(4);
        }, {once:true})
        posicoes[5].addEventListener('click', function(){
            game(5);
        }, {once:true})
        posicoes[6].addEventListener('click', function(){
            game(6);
        }, {once:true})
        posicoes[7].addEventListener('click', function(){
            game(7);
        }, {once:true})
        posicoes[8].addEventListener('click', function(){
            game(8);
        }, {once:true})
        botao.addEventListener('click', function(){
            main();
        })
        console.log("Jogo carregado");   
}

main();