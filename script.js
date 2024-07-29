const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com qual frequência você separa seu lixo?",
        alternativas: [
            "Frequentemente",
            "ás vezes"
            "Raramente"
        ]
    },
    {
        enunciado: "Qual das seguintes práticas, é considerada sustentável?",
        alternativas: [
            "Desmatamento para expansão agrícola",
            "Uso de sacolas plásticas descartaveis"
            "Reutilização de reciclagem de materias"
            "Consumo excessivo de água potável"
        ]
    },
    {
        enunciado: "Qual o principal benefício ambiental da reciclagem?",
        alternativas: [
            "Redução do consumo de energia",
            "Diminuição da poluição sonora."
            "Aumento da erosão do solo"
            "Aumento do desmatamento"
        ]
    },
]
