const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const recordDay = document.querySelector('button.record-day')

recordDay.addEventListener('click', addDay)
form.addEventListener('change', saveHabits)

function addDay() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('This day already exists')
    return
  }

  nlwSetup.addDay(today)
}

function saveHabits() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()
