document.getElementById('button').addEventListener('click', age)

let userInput = 0

function age () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)
}
  if (userInput >= 17) {
  document.getElementById('answer').innerHTML = 'You can see a rated R movies alone.'
} else if (userInput >= 13) {
  document.getElementById('answer').innerHTML = 'You can see PG movies alone.'
} else {
  document.getElementById('answer').innerHTML = 'You can see a G rated movie.'
}
