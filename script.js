const counter = document.getElementById('count-el')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const save = document.getElementById('save')
const saveDisplay = document.getElementById('save-display')
const reset = document.getElementById('reset')
let count = 0
let countHistory = []

increment.addEventListener('click', function () {
  count += 1
  counter.textContent = count
})

decrement.addEventListener('click', function () {
    if (count > 0) {
        count -= 1
    }
  
  counter.textContent = count
})

reset.addEventListener('click', function () {
    count = 0
    counter.textContent = 0
})

save.addEventListener('click', function () {
    //push the current count into the countHistory array
    countHistory.push(count)
    //create a const to store a number that's 5 less than the length of your array.
    const startingPoint = Math.max(countHistory.length - 5, 0)
    saveDisplay.innerText = countHistory.slice(startingPoint).join(", ")

})


