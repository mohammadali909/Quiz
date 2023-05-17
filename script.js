const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Mark Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },

    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },

    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },

    {
        question: "Q4: What is the full form of JS?",
        a: "JavaSuper",
        b: "JavaScript",
        c: "Java",
        d: "Jason Super",
        ans: "ans2"
    },

    {
        question: "Q5: How do you create a function in JavaScript?",
        a: "fuction-myfucntion()",
        b: "function myfunction()",
        c: "function-=myfunction()",
        d: "function=myfunction()",
        ans: "ans2"
    },

    {
        question: "Q6: Inside which HTML element do we put the JavaScript?",
        a: "js tag",
        b: "javascript tag",
        c: "script tag",
        d: "screen tag",
        ans: "ans3"
    },

    {
        question: "Q7: How can you created rounded corners using CSS3?",
        a: "border-radius: 30px;",
        b: "corner-effect: round;",
        c: "alpha-effect: round-corner;",
        d: "border[round]: 30px;",
        ans: "ans1"
    },

    {
        question: "Q8: How to you modify a border image using CSS3?",
        a: "border: url(image.png);",
        b: "border-variable: image url(image.png);",
        c: "border-image: url(border.png) 30 30 round;",
        d: "None",
        ans: "ans3"
    },

    {
        question: "Q9: Does the box-shadow support all browsers ??",
        a: "true",
        b: "false",
        c: "both",
        d: "none",
        ans: "ans1"
    },

    {
        question: "Q10: What does RGBa mean?",
        a: "Review Get assistance Back-up your information acquire proof",
        b: "Red Green Blue alpha",
        c: " Red Gold Black alpha",
        d: "Red Gray Brown alpha ",
        ans: "ans4"
    },

    {
        question: "Q11: What do you understand by HTML?",
        a: "HTML describes the structure of a webpage",
        b: "HTML is the standard markup language mainly used to create web pages",
        c: " HTML consists of a set of elements that helps the browser how to view the content",
        d: " All of the above",
        ans: "ans4"
    },

    {
        question: "Q12: Who is the father of HTML?",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        ans: "ans2"
    },

    {
        question: "Q13: ___ attribute is used to specify where to open the linked document?",
        a: "head",
        b: "none of above",
        c: "coords",
        d: "target",
        ans: "ans4"
    },

    {
        question: "Q14: What is the correct syntax of doctype in HTML5?",
        a: "!doctype html",
        b: "doctype html!",
        c: "doctype html",
        d: "/doctype html",
        ans: "ans1"
    },

    {
        question: "Q15: Which element is used for or styling HTML5 layout?",
        a: "PHP",
        b: "JavaScript",
        c: "jQuery",
        d: "CSS",
        ans: "ans4"
    },

    {
        question: "Q16:  Which is the superior styles of html ?",
        a: "frame",
        b: "CSS",
        c: "iframe",
        d: "Java",
        ans: "ans2"
    },

    {
        question: "Q17:  JavaScript is a _____ Side Scripting Language?",
        a: "Server",
        b: "ISP",
        c: "Browser",
        d: "none",
        ans: "ans3"
    },

    {
        question: "Q18:  JavaScript is also called as?",
        a: " Client Side Scripting Language",
        b: "All of the above",
        c: "Server Side Scripting Language",
        d: "none",
        ans: "ans1"
    },

    {
        question: "Q19: Which of the following is not javascript data types?",
        a: "Null type",
        b: "Undefined type",
        c: "All of the above",
        d: "Number type",
        ans: "ans1"
    },

    {
        question: " Q20: Which of the following is not an error in JavaScript?",
        a: "Division by zero",
        b: "Missing of Bracket",
        c: "Missing of semicolons",
        d: "error",
        ans: "ans1"
    },
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

    const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();  

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});

// count down

var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
  if (timeleft==-1) {
    showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
}
}, 1000);

