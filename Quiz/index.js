document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Leo Tolstoy",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "What is the smallest prime number?",
      choices: ["1", "2", "3", "5"],
      answer: "2",
    },
    {
      question: "In which year did the Titanic sink?",
      choices: ["1910", "1912", "1914", "1916"],
      answer: "1912",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["HO", "H2O", "O2", "CO2"],
      answer: "H2O",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "South Korea", "Japan", "Thailand"],
      answer: "Japan",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      choices: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond",
    },
    {
      question: "What is the main language spoken in Brazil?",
      choices: ["Spanish", "Portuguese", "English", "French"],
      answer: "Portuguese",
    },
  ];

  const startBtn = document.getElementById("start-btn");
  const questionEle = document.getElementById("question");
  const questionContainer = document.getElementById("question-container");
  const choicesEle = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const resetBtn = document.getElementById("restart-btn");
  const scoreEle = document.getElementById("score");

  let currentQuestionIndex = 0;
  let score = 0;
  const totalQuestions = questions.length;

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      displayQuestion();
    } else {
      showResult();
    }
  });
  resetBtn.addEventListener("click", () => {
    location.reload();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    displayQuestion();
  }

  function displayQuestion() {
    choicesEle.innerHTML = "";
    nextBtn.classList.add("hidden");
    questionEle.innerText = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.innerText = choice;
      li.addEventListener("click", handleChoiceSelection);
      choicesEle.appendChild(li);
    });
  }

  function handleChoiceSelection(e) {
    const allChoices = choicesEle.querySelectorAll("li");
    allChoices.forEach((choice) => {
      choice.removeEventListener("click", handleChoiceSelection);
      choice.classList.add("disabled");
    });

    e.target.classList.add("active");

    const selectedAnswer = e.target.innerText;
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      score++;
    }

    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    const resultContainer = document.getElementById("result-container");
    resultContainer.classList.remove("hidden");
    scoreEle.innerText = `Your score is ${score}/${totalQuestions}`;
  }
});
