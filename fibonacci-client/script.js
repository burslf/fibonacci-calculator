const resultButton = document.getElementById("result-button")

const inputError = document.querySelector('.input-error')
inputError.classList.add("error-display")

const savingCheckbox = document.querySelector("#checkbox")
const sortButtonInitial = document.querySelector("#default-button").innerHTML
const resultArea = document.querySelector(".result-area")
const listHistory = document.querySelector(".line-history")

// Hide loading spinner
const loading = document.querySelector('#loading1')
loading.classList.add("loading")
const loading2 = document.querySelector('#loading2')
loading2.classList.add("loading")

// Local function
const memory = {};

const fibonacci = (number) => {

    if (number < 1) return 0
    if (number <= 2) return 1
    if (number in memory) return memory[number]

    let value = fibonacci(number - 1) + fibonacci(number - 2);

    memory[number] = value;
    return value
}

//Fibonacci from server function
const getFibonacciServer = async () => {
    let input = Number(document.getElementById("input").value)
    const FIB_SERVER = 'http://localhost:5050/fibonacci/' + input
    let response = await fetch(FIB_SERVER)
    let data = null;
    if (response.status !== 200) {
        data = await response.text()
        loading1.classList.add("loading")
        resultArea.classList.add("error42")
        resultArea.innerText = `Server Error: ${data}`
    } else {
        data = await response.json()
        loading.classList.add("loading")
        resultArea.innerText = data.result
    }

}

const numAsc = document.querySelector(".num-asc")
const numDesc = document.querySelector(".num-desc")
const dateAsc = document.querySelector(".date-asc")
const dateDesc = document.querySelector(".date-desc")
const sortButton = document.querySelector("#default-button")

// History from the server function
const historyServer = async () => {
    const LINK = 'http://localhost:5050/getFibonacciResults'

    try {
        const response = await fetch(LINK)

        const data = await response.json()

        if (sortButton.innerHTML == numAsc.innerHTML) {
            data.results.sort((a, b) => {
                let keyA = a.number
                let keyB = b.number
                return keyA - keyB
            })

        } else if (sortButton.innerHTML == numDesc.innerHTML) {
            data.results.sort((a, b) => {
                let keyA = a.number
                let keyB = b.number
                return keyB - keyA
            })
        } else if (sortButton.innerHTML == dateAsc.innerHTML) {
            data.results.sort((a, b) => {
                let keyA = a.createdDate
                let keyB = b.createdDate
                return keyA - keyB
            })
        } else if (sortButton.innerHTML == dateDesc.innerHTML) {
            data.results.sort((a, b) => {
                let keyA = a.createdDate
                let keyB = b.createdDate
                return keyB - keyA
            })
        } else {
            data.results.sort((a, b) => {
                let keyA = a.createdDate
                let keyB = b.createdDate
                return keyB - keyA
            })
        }

        return data.results
    } catch (error) {
        console.error(error);
    }
}




// Make the event listenter on click and return server/error response
resultButton.addEventListener("click", () => {
    const input = Number(document.getElementById("input").value)
    loading.classList.remove("loading")
    loading2.classList.remove("loading")
    inputError.classList.add("error-display")
    resultArea.innerText = ''

    // If Save Calculation is checked, call the server, else, use local function
    if (!isNaN(input) && input <= 50 && input >= 0 && savingCheckbox.checked) {
        getFibonacciServer()
    } else if (!isNaN(input) && input <= 50 && input >= 0 && !savingCheckbox.checked) {
        loading.classList.add("loading")
        resultArea.innerHTML = fibonacci(input)
    } else if (input > 50) {
        loading1.classList.add("loading")
        inputError.classList.remove("error-display")
        inputError.innerText = 'Can\'t be larger than 50'
    } else if (!isNaN(input) && input < 0) {
        loading1.classList.add("loading")
        inputError.classList.remove("error-display")
        inputError.innerText = 'Should be a positive number'
    } else {
        loading1.classList.add("loading")
        inputError.classList.remove("error-display")
        inputError.innerText = 'Should be a number'
    }
})