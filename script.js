const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')

    }

    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
      question: 'What does CSS Stand for?',
      answers: [
        { text: 'Cascading Style Sheets', correct: true },
        { text: 'Cobra Snake Soup', correct: false },
        { text: 'Cake Soda Sip', correct: false },
        { text: 'Chair Surf Style', correct: false },
    ]
    },
    {
        question: 'Is web development fun?',
        answers: [
          { text: 'IDK', correct: false },
          { text: 'Maybe', correct: false },
          { text: 'Yes!', correct: true },
          { text: 'SO-SO', correct: false },
      ]
      },
      {
        question: 'What does HTML stand for?',
        answers: [
          { text: 'Hype Train Mail List', correct: false },
          { text: 'Hippo Time Milk Lime', correct: false },
          { text: 'Happy Tea Milk Latte', correct: false },
          { text: 'HyperText Markup Language', correct: true },
      ]
      },
      {
        question: 'What is the largest heading tag?',
        answers: [
          { text: 'h1', correct: true },
          { text: 'h5', correct: false },
          { text: 'h10', correct: false },
          { text: 'h0', correct: false },
      ]
      },
      {
        question: 'What is the purpose of Javascript?',
        answers: [
          { text: 'To build complex interactive websites', correct: true },
          { text: 'To make coffee', correct: false },
          { text: 'To watch and stream videos', correct: false },
          { text: 'To find homes', correct: false },
      ]
      },
]

timeLeft = 59;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);