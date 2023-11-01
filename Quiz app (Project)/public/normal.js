var questions = [
    {
      question: " 01. Who is the father of our nation?",
      option1: "Allama Iqbal",
      option2: "Quaid-e-Azam Muhammad Ali Jinnah",
      option3: "Liaquat Ali Khan",
      ans: "Quaid-e-Azam Muhammad Ali Jinnah",
    },
    {
      question: "02. What is the name of the planet we live on?",
      option1: "Jupiter",
      option2: "Mars",
      option3: "Earth",
      ans: "Earth",
    },
    {
      question: "03. What is the largest mammal on Earth?",
      option1: "Blue whales",
      option2: "Dolphin",
      option3: "Crocodiles",
      ans: "Blue whales",
    },
    {
      question: "04. What is the tallest animal on Earth?",
      option1: "Giraffe",
      option2: "Elephant",
      option3: "Tiger",
      ans: "Giraffe",
    },
    {
      question: "05. Which planet is known as the Red Planet?",
      option1: "Mars",
      option2: "Mercury",
      option3: "Earth",
      ans: "Mars",
    },
    {
      question: " 06. Which animal lives in water and has scales?",
      option1: "Fish",
      option2: "Crocodiles",
      option3: "Frog",
      ans: "Fish",
    },
    {
      question: "07. What is the name of the fast, big cat that can roar?",
      option1: "Lion",
      option2: "Deer",
      option3: "Tiger",
      ans: "Tiger",
    },
    {
      question: "08. What is the smallest planet in our solar system?",
      option1: "Mercury",
      option2: "Jupiter",
      option3: "Earth",
      ans: "Mercury",
    },
    {
      question: "09. What do you use to blow up balloons?",
      option1: "Air Pump",
      option2: "Cng Pump",
      option3: "Water Pump",
      ans: "Air Pump",
    },
    {
      question: "10. What do we use to measure temperature?",
      option1: "Compass",
      option2: "Wood",
      option3: "Thermometer",
      ans: "Thermometer",
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
  }, 100);
  
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
       var alert = Swal.fire({
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