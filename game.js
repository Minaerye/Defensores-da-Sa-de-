// Perguntas e respostas sobre antibióticos e vacinas
const questions = [
    // Perguntas sobre antibióticos
    // Fáceis
    {
        question: "Os antibióticos são eficazes contra bactérias?",
        answers: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
        ]
    },
    {
        question: "Os antibióticos podem tratar uma gripe?",
        answers: [
            { text: "Sim", correct: false },
            { text: "Não", correct: true }
        ]
    },
    {
        question: "Qual destes é um antibiótico comum?",
        answers: [
            { text: "Ibuprofeno", correct: false },
            { text: "Amoxicilina", correct: true }
        ]
    },
    {
        question: "Os antibióticos são seguros para todos?",
        answers: [
            { text: "Sim", correct: false },
            { text: "Não", correct: true }
        ]
    },
    {
        question: "É seguro usar antibióticos sem receita médica?",
        answers: [
            { text: "Sim", correct: false },
            { text: "Não", correct: true }
        ]
    },
    // Difíceis
    {
        question: "Qual é a principal causa da resistência aos antibióticos?",
        answers: [
            { text: "Uso excessivo", correct: true },
            { text: "Uso moderado", correct: false }
        ]
    },
    {
        question: "Qual destes antibióticos é um macrolídeo?",
        answers: [
            { text: "Ciprofloxacino", correct: false },
            { text: "Eritromicina", correct: true }
        ]
    },
    {
        question: "Os antibióticos podem causar efeitos colaterais como diarreia?",
        answers: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
        ]
    },
    {
        question: "Os antibióticos devem ser tomados até acabar a receita?",
        answers: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
        ]
    },
    {
        question: "Qual antibiótico é mais frequentemente usado em infecções do trato urinário?",
        answers: [
            { text: "Amoxicilina", correct: false },
            { text: "Nitrofurantoína", correct: true }
        ]
    },

    // Perguntas sobre vacinas
    // Fáceis
    {
        question: "Vacinas ajudam a prevenir doenças?",
        answers: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
        ]
    },
    {
        question: "As vacinas são seguras?",
        answers: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
        ]
    },
    {
        question: "A vacina contra a gripe é necessária todos os anos?",
        answers: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
        ]
    },
    {
        question: "Vacinas podem causar doenças?",
        answers: [
            { text: "Sim", correct: false },
            { text: "Não", correct: true }
        ]
    },
    {
        question: "Qual é a finalidade de vacinas?",
        answers: [
            { text: "Curar doenças", correct: false },
            { text: "Prevenir doenças", correct: true }
        ]
    },
    // Difíceis
    {
        question: "Qual destas vacinas é administrada em crianças para prevenir a varicela?",
        answers: [
            { text: "Vacina BCG", correct: false },
            { text: "Vacina Varicela", correct: true }
        ]
    },
    {
        question: "Quais vacinas são conhecidas como vacinas combinadas?",
        answers: [
            { text: "Vacina DTPa", correct: true },
            { text: "Vacina da gripe", correct: false }
        ]
    },
    {
        question: "Qual é a vacina que previne o HPV?",
        answers: [
            { text: "Vacina Gardasil", correct: true },
            { text: "Vacina da hepatite B", correct: false }
        ]
    },
    {
        question: "A vacina contra sarampo deve ser aplicada em quantas doses?",
        answers: [
            { text: "Uma dose", correct: false },
            { text: "Duas doses", correct: true }
        ]
    },
    {
        question: "Qual é o efeito colateral mais comum de vacinas?",
        answers: [
            { text: "Dor no local da injeção", correct: true },
            { text: "Febre alta", correct: false }
        ]
    }
];

let score = 0;
let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const startButton = document.getElementById('start-btn');
const scoreElement = document.getElementById('score');

// Função para iniciar o jogo
startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden');
    answerButtons.forEach(button => button.classList.remove('hidden'));
    score = 0;
    currentQuestionIndex = 0;
    showNextQuestion();
}

// Mostra a próxima pergunta
function showNextQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons[0].textContent = currentQuestion.answers[0].text;
    answerButtons[1].textContent = currentQuestion.answers[1].text;

    answerButtons[0].addEventListener('click', () => selectAnswer(currentQuestion.answers[0]));
    answerButtons[1].addEventListener('click', () => selectAnswer(currentQuestion.answers[1]));
}

// Função para quando uma resposta for selecionada
function selectAnswer(answer) {
    if (answer.correct) {
        score += 10;
    } else {
        score -= 5;
    }
    scoreElement.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        endGame();
    }
}

// Reseta os botões entre perguntas
function resetState() {
    answerButtons.forEach(button => {
        button.removeEventListener('click', selectAnswer);
    });
}

// Finaliza o jogo
function endGame() {
    questionElement.textContent = `Fim de jogo! Sua pontuação final é ${score}.`;
    startButton.textContent = 'Jogar Novamente';
    startButton.classList.remove('hidden');
    answerButtons.forEach(button => button.classList.add('hidden'));
              }
