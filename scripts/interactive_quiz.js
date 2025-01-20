const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "Lyon",
            c: "Marseille"
        },
        correct: "a"
    },
    {
        question: "What's the largest planet in the solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter"
        },
        correct: "c"
    },
    {
        question: "What year was the first man on the Moon?",
        answers: {
            a: "1969",
            b: "1972",
            c: "1961"
        },
        correct: "a"
    },
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

function showQuiz() {
    const output = [];

    quizData.forEach((questionData, questionIndex) => {
        const answers = [];
        for (const [key, value] of Object.entries(questionData.answers)) {
            answers.push(`
                <li>
                    <label>
                        <input type="radio" name="question${questionIndex}" value="${key}">
                        ${value}
                    </label>
                </li>
            `);
        }

        output.push(`
            <div class="question">${questionData.question}</div>
            <ul class="answers">${answers.join("")}</ul>
        `);
    });

    quizContainer.innerHTML = output.join("");
}

function calculateResults() {
    let score = 0;

    quizData.forEach((questionData, questionIndex) => {
        const selectedAnswer = document.querySelector(`input[name="question${questionIndex}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === questionData.correct) {
            score++;
        }
    });

    resultsContainer.innerHTML = `You have obtained ${score} out of ${quizData.length}!`;
}

showQuiz();

submitButton.addEventListener("click", calculateResults);