const startButton = document.getElementById('start-button');
const questionContainerElement = document.getElementById('question');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide')
}

function setQuestions(){

}

function setAnswer(){

}

const questions = [
    {
        question: "what is 156+10?",
        answer: [
            {text: "166", correct: true},
            {text: "176", correct: false}
        ]
    }
]