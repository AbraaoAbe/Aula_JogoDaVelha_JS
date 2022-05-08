var jogador, vencedor = null;
var jogador_selecionado = document.getElementById('jogador-selecionado');
var vecendor_selecionado = document.getElementById('vencedor-selecionado');

var quadrados = document.getElementsByClassName('quadrado');
mudarJogador('x');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';



    if (jogador === 'x') {
        mudarJogador('o');
    } else {
        mudarJogador('x');
    }
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogador_selecionado.innerHTML = valor;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);



    //Horizontais//
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudaVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudaVencedor(quadrado4);
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudaVencedor(quadrado7);
        return;
    }

    //Verticais//
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudaVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudaVencedor(quadrado3);
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudaVencedor(quadrado3);
        return;
    }

    //Diagonais//
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudaVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudaVencedor(quadrado3);
        return;
    }


}

function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vecendor_selecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.backgroundColor = '#0f0';
    quadrado2.style.backgroundColor = '#0f0';
    quadrado3.style.backgroundColor = '#0f0';


}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var ehigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        ehigual = true;
    }
    return ehigual;
}

function reiniciar() {
    vencedor = null;
    vecendor_selecionado.innerHTML = '';

    for (let index = 1; index <= 9; index++) {
        var quadrado = document.getElementById(index);

        quadrado.style.backgroundColor = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('x');
}