const q1 = document.querySelector('#question1')
const q2 = document.querySelector('#question2')
const q3 = document.querySelector('#question3')
const q4 = document.querySelector('#question4')
const q5 = document.querySelector('#question5')
const q6 = document.querySelector('#question6')
const q7 = document.querySelector('#question7')
const q8 = document.querySelector('#question8')
const q9 = document.querySelector('#question9')
const q10 = document.querySelector('#question10')
const q11 = document.querySelector('#question11')
const q12 = document.querySelector('#question12')
const q13 = document.querySelector('#question13')
const q14 = document.querySelector('#question14')
const q15 = document.querySelector('#question15')

const answerToast = document.querySelector('.answer-field')

const answers = [
  document.querySelector('#question1'),
  document.querySelector('#question2'),
  document.querySelector('#question3'),
  document.querySelector('#question4'),
  document.querySelector('#question5'),
  document.querySelector('#question6'),
  document.querySelector('#question7'),
  document.querySelector('#question8'),
  document.querySelector('#question9'),
  document.querySelector('#question10'),
  document.querySelector('#question11'),
  document.querySelector('#question12'),
  document.querySelector('#question13'),
  document.querySelector('#question14'),
  document.querySelector('#question15'),
]

const answerField = {
  'A': document.querySelector('#sum-A'),
  'B': document.querySelector('#sum-B'),
  'C': document.querySelector('#sum-C'),
  'D': document.querySelector('#sum-D'),
  'E': document.querySelector('#sum-E'),
}


const sum = {
  'A': 0,
  'B': 0,
  'C': 0,
  'D': 0,
  'E': 0
}

const questionToAnswer = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E']

const answerBtn = document.querySelector('#show-answer')
const resetBtn = document.querySelector('#reset')


//calculate answer
answerBtn.addEventListener('click', () => {
  answers.forEach((val, index) => {
    sum[questionToAnswer[index]] = val.answer.value
    answerField[questionToAnswer[index]].innerText = val.answer.value
  })

  if(!answerToast.classList.contains('show')) {
    answerToast.classList.add('show')
  }
})

resetBtn.addEventListener('click', () => {
  sum.A = 0;
  sum.B = 0;
  sum.C = 0;
  sum.D = 0;
  sum.E = 0;

  answerField.A.innerText = 0;
  answerField.B.innerText = 0;
  answerField.C.innerText = 0;
  answerField.D.innerText = 0;
  answerField.E.innerText = 0;

  answers.forEach(formElm => {
    formElm.answer.forEach(elm => {
      if(elm !== undefined && elm.checked == true) {
        elm.checked = false
      }
    })
  })

  if(answerToast.classList.contains('show')) {
    answerToast.classList.remove('show')
  }
})


