var questions = [
  {
    question: " 01. Which animal is known as the 'Ship of the Desert' ?",
    option1: "Sheep",
    option2: "Elephant",
    option3: "Camel",
    ans: "Camel",
  },
  {
    question: "02. How many days are there in a week?",
    option1: "8 days",
    option2: "7 days",
    option3: "6 days",
    ans: "7 days",
  },
  {
    question: "03. How many letters are there in the English alphabet?",
    option1: "26 letters",
    option2: "24 letters",
    option3: "30 letters",
    ans: "26 letters",
  },
  {
    question: "04. Rainbow consist of how many colours?",
    option1: "8 colours",
    option2: "7 colours",
    option3: "6 colours",
    ans: "7 colours",
  },
  {
    question: "05. How many seconds make one hour?",
    option1: "3600 seconds",
    option2: "3700 seconds",
    option3: "3800 seconds",
    ans: "3600 seconds",
  },
  {
    question: " 06.  Which animal is known as the king of the jungle?",
    option1: "Lion",
    option2: "Elephant",
    option3: "Gitaffe",
    ans: "Lion",
  },
  {
    question: "07. Name the National game of?",
    option1: "Cricket",
    option2: "Football",
    option3: "Hockey",
    ans: "Hockey",
  },
  {
    question: "08. name the national fruit of pakistan",
    option1: "Apple",
    option2: "Mango",
    option3: "Grapes",
    ans: "Mango",
  },
  {
    question: "09. name the national Vegetable of pakistan?",
    option1: "Tomato",
    option2: "Lady Finger",
    option3: "Potato",
    ans: "Lady Finger",
  },
  {
    question: "10. name the national Animal of pakistan?",
    option1: "Markhor",
    option2: "Tiger",
    option3: "Cow",
    ans: "Markhor",
  },
];

var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var btn = document.getElementById("btn");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;
var interval;

interval = setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
    if (min < 0) {
      sec = 59;
      min = 1;
      nextQuestion();
    }
  }
}, 1000);

function nextQuestion() {
  var getOptions = document.getElementsByName("options");
  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedques = questions[index - 1]["question"];
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAns = questions[index - 1]["ans"];
      if (selectedAns == correctAns) {
        score++;
      }
    }
    getOptions[i].checked = false
  }
  min = 1;
  sec = 59;
  btn.disabled = true;

  if (index > questions.length - 1) {
    Swal.fire({
      icon: 'Good Job',
      title: 'Good Job',
      text: `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
      footer: '<a href="next.html">Restart</a>'
    })
    clearInterval(interval)
    // var percantage = `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`
    // this.style.backgroundColor="black
    //    document.write (percantage)
    // var button = document.createElement("button")
    // var buttonText = document.createTextNode("Restart")
    // button.setAttribute(onclick, "pk()")
    // function pk(){
    //   window.location.href = "score.html"
    // }
    // button.appendChild(buttonText)
    // var div = document.getElementById("main")
    // div.appendChild(button)
    }
    else {
      para.innerText = questions[index].question;
      opt1.innerText = questions[index].option1;
      opt2.innerText = questions[index].option2;
      opt3.innerText = questions[index].option3;
      index++;
    }
  }

  
function clicked() {
  btn.disabled = false;
}
// var button = document.createElement("button")
// button.setAttribute
