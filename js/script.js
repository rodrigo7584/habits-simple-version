const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const recordDay = document.querySelector('button.record-day')

recordDay.addEventListener('click', addDay)

function addDay() {
  let today = new Date()
  let day = String(today.getDate()).padStart(2, '0')
  let month = String(today.getMonth() + 1).padStart(2, '0')
  let dayAndMonth = day + '/' + month
  nlwSetup.addDay(dayAndMonth)
}

const data = {
  run: ['01-01', '01-02', '01-03'],
  food: ['01-03'],
  work: ['01-01'],
  pet: ['01-03']
}
nlwSetup.setData(data)
nlwSetup.load()
