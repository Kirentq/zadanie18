// arrray

const qBase = [
    {
        question: 'Какой сейчас год?',
        a: '1000',
        b: '2000',
        c: '2001',
        d: '2021',
        answer: 'a'
    },
    {
        question: 'Самый распространенный язык программирования?',
        a: 'java script',
        b: 'java',
        c: 'python',
        d: 'c++',
        answer: 'b'
    },
    {
        question: 'Как расшифровывается аббревиатура HTML?',
        a: 'hello to media line',
        b: 'hypertext media language',
        c: 'hypertext markup language',
        d: 'hydro throne mobile loft',
        answer: 'c'
    },
    {
        question: 'Когда приходит Дед Мороз?',
        a: 'никогда',
        b: 'он и не уходил',
        c: 'в ночь перед Рождеством',
        d: 'в Новогоднюю ночь',
        answer: 'd'
    },
];


// select
const question     = document.getElementById('question');
const questionA    = document.getElementById('guess_a');
const questionB    = document.getElementById('guess_b');
const questionC    = document.getElementById('guess_c');
const questionD    = document.getElementById('guess_d');
const submitBtn    = document.getElementById('submit');
const endBtn    = document.getElementById('end');
const result       = document.getElementById('result');
const radioButtons = document.querySelectorAll("input[type='radio']");


// variables
let currentQuestion = 0;
let score = 0;


// initial load
loadQuestion();


// =========== Functions ===============

function loadQuestion() {
    question.innerHTML = qBase[currentQuestion].question;
    questionA.innerHTML = qBase[currentQuestion].a;
    questionB.innerHTML = qBase[currentQuestion].b;
    questionC.innerHTML = qBase[currentQuestion].c;
    questionD.innerHTML =qBase[currentQuestion].d;
}

function getSelectedRadioButtons() { 
    let answer;
    radioButtons.forEach((e) => {
        if(e.checked){
            answer = e.id;
        }
    });
    return answer;
}

function deselectRadioButtons() { 
    radioButtons.forEach((e) => {
        e.checked = false;
    })
}


// events
submitBtn.addEventListener('click', () => {
    const answer = getSelectedRadioButtons();
    if(answer){
        if(answer === qBase[currentQuestion].answer){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < qBase.length){
            loadQuestion();
        }else{
            currentQuestion = 0;
            loadQuestion();
        }
    }
});

endBtn.addEventListener('click', function(){
    result.innerHTML = 'Ваш результат: ' + score + ' ' + '<br>' + 'Новая игра: ' + '<button class="new-game ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Новая Игра</button>';
    let new_game = document.querySelector('.new-game');
    new_game.addEventListener('click', function(){
        new_game = window.location.reload();
    })
})