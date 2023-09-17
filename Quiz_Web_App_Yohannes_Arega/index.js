const questions = [
  {
    question:
      "Which Ethiopian city is famous for its rock-hewn churches, including St. George's Church?",
    options: ["Addis Ababa", "Lalibela", "Gondar", "Axum"],
    correctAnswer: "Lalibela",
  },
  {
    question:
      "What is the name of the Ethiopian region known for its beautiful, otherworldly landscapes and rock formations?",
    options: [
      "Danakil Depression",
      "Simien Mountains",
      "Afar Triangle",
      "Omo Valley",
    ],
    correctAnswer: "Danakil Depression",
  },
  {
    question:
      "In which Ethiopian city can you visit the National Museum to see the fossil of 'Lucy,' a hominid dating back over 3 million years?",
    options: ["Bahir Dar", "Harar", "Dire Dawa", "Addis Ababa"],
    correctAnswer: "Addis Ababa",
  },
  {
    question:
      "Which Ethiopian lake is the largest lake in the country and the source of the Blue Nile River?",
    options: ["Lake Abaya", "Lake Tana", "Lake Hawassa", "Lake Langano"],
    correctAnswer: "Lake Tana",
  },
  {
    question:
      "What is the name of the ancient city in northern Ethiopia known for its obelisks and ruins?",
    options: ["Lalibela", "Axum", "Gondar", "Harar"],
    correctAnswer: "Axum",
  },
  {
    question:
      "Which Ethiopian city is famous for its medieval castles, including Fasil Ghebbi, a UNESCO World Heritage site?",
    options: ["Lalibela", "Axum", "Gondar", "Harar"],
    correctAnswer: "Gondar",
  },
  {
    question:
      "In which Ethiopian valley can you find the Rift Valley Lakes, known for their stunning beauty and diverse wildlife?",
    options: [
      "Simien Valley",
      "Omo Valley",
      "Afar Valley",
      "Great Rift Valley",
    ],
    correctAnswer: "Great Rift Valley",
  },
  {
    question:
      "What is the name of the Ethiopian national park known for its unique wildlife, including Ethiopian wolves and gelada baboons?",
    options: [
      "Simien Mountains National Park",
      "Bale Mountains National Park",
      "Abijatta-Shalla Lakes National Park",
      "Mago National Park",
    ],
    correctAnswer: "Simien Mountains National Park",
  },
  {
    question:
      "Which Ethiopian city is famous for its ancient walled city, colorful markets, and hyena feeding tradition?",
    options: ["Bahir Dar", "Lalibela", "Gondar", "Harar"],
    correctAnswer: "Harar",
  },
  {
    question:
      "What is the name of the Ethiopian national park known for its diverse birdlife and the largest concentration of bird species in Africa?",
    options: [
      "Bale Mountains National Park",
      "Simien Mountains National Park",
      "Abijatta-Shalla Lakes National Park",
      "Mago National Park",
    ],
    correctAnswer: "Bale Mountains National Park",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultContainers = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const progress = document.getElementById("progress");
const comp = document.getElementById("comp");
const qn = document.getElementById("qn");

function showQuestion(questionObj) {
  questionContainer.textContent = questionObj.question;
  optionsContainer.innerHTML = "";
  progress.style.width = `${40 * currentQuestionIndex}px`;
  qn.textContent = `${currentQuestionIndex}/10`;
  questionObj.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
            <input type="radio" name="options" value="${option}">
            ${option}
        `;
    optionsContainer.appendChild(label);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector(
    'input[name="options"]:checked'
  );
  if (!selectedOption) {
    return; // No option selected
  }

  if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    console.log("ss");
    resultContainers.style.display = "flex";
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    scoreElement.textContent = `${score}/10`;
    if (score >= 5 && score <= 8) {
      comp.textContent = "GOOD JOB";
    } else if (score > 8) {
      comp.textContent = "GREATE JOB";
    } else {
      comp.textContent = "TRY AGAIN";
    }
  }

  selectedOption.checked = false; // Uncheck the selected option
}

nextButton.addEventListener("click", checkAnswer);
showQuestion(questions[currentQuestionIndex]);
