const quizDB = [
    {
        question: 'Q1. What is the full form of HTML?',
        a: 'Hello to my lords',
        b: 'Hey text markup language',
        c: 'Hypertext Markup Language',
        d: 'Hypertext Makeup Language',
        ans: 'ans3'
    },
    {
        question: 'Q2. What is the full form of CSS?',
        a: 'Cascading Style System',
        b: 'Cascading Style Sheet',
        c: 'Cascading Style Sound',
        d: 'Cascading Style Solution',
        ans: 'ans2'
    },
    {
        question: 'Q3. What is Python?',
        a: 'Programming Language',
        b: 'Snake',
        c: 'Scripting Language',
        d: 'None',
        ans: 'ans1'
    },
    {
        question: 'Q4. What is the full form of HTTP?',
        a: 'Hypertext Transfer Protocol',
        b: 'Hypertext Transfer Profile',
        c: 'Hytext Transfer Protocol',
        d: 'Hypertext Test Protocol',
        ans: 'ans1'
    }
    
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')

let questionCount = 0
let score = 0
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion()

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>  {
        if (curAnsElem.checked){
            answer = curAnsElem.id
        }
    })
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score++
    }

    questionCount++;
    deselectAll()
    if(questionCount<quizDB.length){
        loadQuestion()
    } else {
        showScore.innerHTML = `
            <h3> You score ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `
        showScore.classList.remove('scoreArea')
    }
})