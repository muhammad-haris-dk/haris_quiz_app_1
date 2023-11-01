var questions = [
    {
      question: " 01. Who is the father of English grammar?",
      option1: "Eoin Morgan",
      option2: "Sam Curran",
      option3: "Lindley Murray",
      ans: "Lindley Murray",
    },
    {
      question: "02. Which country do people buy the most books in?",
      option1: "China",
      option2: "Norway",
      option3: "Germany",
      ans: "Norway",
    },
    {
      question: "03. What is the study of (‘grammatical’) meaning in language?",
      option1: "Semantics",
      option2: "Markups",
      option3: "Data Types",
      ans: "Semantics",
    },
    {
      question: "04. What is the name of the oldest lake in the world?",
      option1: "Lake Superior",
      option2: "Lake Baikal",
      option3: "Lake Nyasa",
      ans: "Lake Baikal",
    },
    {
      question: "05. The pitaya fruit is more commonly known by what English name?",
      option1: "Lime",
      option2: "Dragon fruit",
      option3: "Aocate",
      ans: "Dragon fruit",
    },
    {
      question: " 06. Who was the sixth president of the United States?",
      option1: "John Quincy Adams",
      option2: "Abigail Adams",
      option3: "Joe Biden",
      ans: "John Quincy Adams",
    },
    {
      question: "07. Which Australian cricket ground is commonly known as the Gabba?",
      option1: "Melbourne Cricket Ground",
      option2: "Sydney Cricket Ground",
      option3: "Brisbane Cricket Ground ",
      ans: "Brisbane Cricket Ground ",
    },
    {
      question: "08. Pakistan borders which four countries?",
      option1: "China, Afghanistan, India, and Iran",
      option2: "Japan, SoutnKorea, India and afghanistan",
      option3: "Germany, Iran, North Korea and China",
      ans: "China, Afghanistan, India, and Iran",
    },
    {
      question: "09. What is the national animal of Germany?",
      option1: "Owl",
      option2: "Markhor",
      option3: "Eagle",
      ans: "Eagle",
    },
    {
      question: "10. How many stars are on the flag of New Zealand?",
      option1: "four five-pointed red stars",
      option2: "six five-pointed white stars",
      option3: "seven four-pointed blue stars",
      ans: "four five-pointed red stars",
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