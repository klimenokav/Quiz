const quizData = [
    {
        question: "Сколько будет 2+2?",
        a: '2',
        b: '4',
        c: '5',
        d: '1',
        correct: 'b'
    },{
        question: "Какая кличка у Витали?",
        a: 'Витя',
        b: 'Витязь',
        c: 'Кавеира',
        d: 'Гений',
        correct: 'c'
    }
]
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById("next");
const previosBtn = document.getElementById("previos");
const answerEls = document.querySelectorAll(".answer")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText =  currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    answerEls.forEach((answerEl)=> {
        answerEl.checked = false
    }) 
    let number = document.getElementsByTagName("h1")[0]
    number.innerText = " Номер вопроса "+ (currentQuiz+1) + " из " + quizData.length
    if(currentQuiz == 0){
        previosBtn.disabled = true
    } else{
        previosBtn.disabled = false
    }
    
}
function getSelected(){
    const answerEls = document.querySelectorAll(".answer")

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

nextBtn.addEventListener("click",() => {
    const answer = getSelected();
    
    if(answer){
        if (answer == quizData[currentQuiz].correct){
            score++
        }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else{
                alert("Ты ответил правильно "+score + " из " + quizData.length);
            }
        }
    });

    previosBtn.addEventListener("click",() => {
        currentQuiz--;
        loadQuiz();
        });



        
   

    
    
        
