// script.js
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

const quizQuestions = [
    {
        question: "What is the capital of India?",
        options: ["Paris", "London", "Delhi", "Bangalore"],
        correctAnswer: "Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: "H2O"
    }
];

function buildQuiz() {
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <div class="options">
                ${question.options.map(option => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const selectedOption = answerContainers[index].querySelector(`input[name=question${index}]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.correctAnswer) {
                score++;
            }
        }
    });
    resultContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length}.`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
