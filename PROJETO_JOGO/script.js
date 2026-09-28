// ==============================
// ELEMENTOS DO HTML
// ==============================

const inputPalpite = document.getElementById("palpite");
const btnPalpite = document.getElementById("btnPalpite");
const btnNovoJogo = document.getElementById("btnNovoJogo");

const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");

const listaHistorico = document.getElementById("listaHistorico");
const melhorResultadoTexto = document.getElementById("melhorResultado");


// ==============================
// VARIÁVEIS DO JOGO
// ==============================

let numeroSecreto;
let tentativas = 0;
let jogoFinalizado = false;


// ==============================
// LOCALSTORAGE
// ==============================

// Recupera o melhor resultado salvo
let melhorResultado = localStorage.getItem("melhorResultado");


// ==============================
// FUNÇÃO PARA INICIAR O JOGO
// ==============================

function iniciarJogo() {

    // Math.random() cria um número aleatório
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    tentativas = 0;
    jogoFinalizado = false;

    tentativasTexto.textContent = tentativas;
    mensagem.textContent = "Faça seu primeiro palpite!";

    inputPalpite.value = "";
    inputPalpite.disabled = false;
    btnPalpite.disabled = false;

    inputPalpite.focus();
}


// ==============================
// FUNÇÃO PARA VERIFICAR PALPITE
// ==============================

function verificarPalpite() {

    const palpite = Number(inputPalpite.value);

    // Verifica se o usuário digitou um número válido
    if (palpite < 1 || palpite > 100 || inputPalpite.value === "") {

        mensagem.textContent = "Digite um número entre 1 e 100!";
        return;
    }

    tentativas++;

    tentativasTexto.textContent = tentativas;


    // ==============================
    // CONDICIONAIS
    // ==============================

    if (palpite === numeroSecreto) {

        mensagem.textContent =
            `🎉 Acertou! O número era ${numeroSecreto}!`;

        jogoFinalizado = true;

        salvarResultado();

        inputPalpite.disabled = true;
        btnPalpite.disabled = true;

    } else if (palpite < numeroSecreto) {

        mensagem.textContent = "⬆️ O número secreto é maior!";

    } else {

        mensagem.textContent = "⬇️ O número secreto é menor!";
    }


    inputPalpite.value = "";
    inputPalpite.focus();
}


// ==============================
// SALVAR RESULTADO
// ==============================

function salvarResultado() {

    // Se não existe recorde ou a nova tentativa foi menor
    if (
        melhorResultado === null ||
        tentativas < Number(melhorResultado)
    ) {

        melhorResultado = tentativas;

        localStorage.setItem(
            "melhorResultado",
            melhorResultado
        );

        atualizarMelhorResultado();
    }
}


// ==============================
// MOSTRAR MELHOR RESULTADO
// ==============================

function atualizarMelhorResultado() {

    if (melhorResultado !== null) {

        melhorResultadoTexto.textContent =
            `${melhorResultado} tentativa(s)`;

    } else {

        melhorResultadoTexto.textContent = "--";
    }
}


// ==============================
// EVENTO DO BOTÃO
// ==============================

btnPalpite.addEventListener("click", verificarPalpite);


// ==============================
// PERMITIR USAR ENTER
// ==============================

inputPalpite.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        verificarPalpite();
    }
});


// ==============================
// NOVO JOGO
// ==============================

btnNovoJogo.addEventListener("click", iniciarJogo);


// ==============================
// HISTÓRICO
// ==============================

// Array para guardar as partidas
let historico = JSON.parse(
    localStorage.getItem("historico")
) || [];


// Função para salvar uma partida
function salvarHistorico(resultado) {

    historico.push(resultado);

    localStorage.setItem(
        "historico",
        JSON.stringify(historico)
    );

    mostrarHistorico();
}


// Função para mostrar o histórico na tela
function mostrarHistorico() {

    listaHistorico.innerHTML = "";

    // Estrutura de repetição forEach
    historico.forEach(function(partida) {

        const item = document.createElement("li");

        item.textContent =
            `Acertou em ${partida} tentativa(s)`;

        listaHistorico.appendChild(item);
    });
}


// ==============================
// ATUALIZA HISTÓRICO AO GANHAR
// ==============================

// Guarda a função original
const salvarResultadoOriginal = salvarResultado;


// Substitui pela versão que também salva o histórico
salvarResultado = function() {

    if (
        melhorResultado === null ||
        tentativas < Number(melhorResultado)
    ) {

        melhorResultado = tentativas;

        localStorage.setItem(
            "melhorResultado",
            melhorResultado
        );

        atualizarMelhorResultado();
    }

    salvarHistorico(tentativas);
};


atualizarMelhorResultado();

mostrarHistorico();

iniciarJogo();