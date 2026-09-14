
var ordem_jogada = true;

function jogar(num_btn) {

    cons botao = document.getElementById(num_btn);

    if (ordem_jogada === true) {
        botao.innerHTML = "o";
        //ordem_jogada = false;
    } else {
        botao.innerHTML = "x";
        //ordem_jogada = true;
    }
    ordem_jogada = !ordem_jogada;

    if ((btn1_vlr == btn2_vlr) && (btn1_vlr == btn3_vle))
}