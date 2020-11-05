// Call history when user submit, and check whether a sorted type is called
resultButton.addEventListener('click', () => {
    historyServer()
        .then(data => {
            const createList = () => {
                if (savingCheckbox.checked) {
                    listHistory.innerText = ''
                    for (let i = 0; i < 3; i++) {
                        let date = data[i].createdDate
                        let newDate = new Date(parseInt(date))

                        let list = document.createElement("li")
                        let hr = document.createElement("hr")
                        hr.setAttribute("align", "left")
                        hr.classList.add("hr")
                        hr.classList.add("separator")
                        list.classList.add("listResult")
                        list.innerHTML = `The Fibonacci Of <span style="font-weight:bold">${data[i].number}</span> is <span style="font-weight:bold">${data[i].result}</span>. Calculated at: ${newDate}`
                        loading2.classList.add("loading")
                        listHistory.appendChild(list)
                        listHistory.appendChild(hr)
                    }
                } else {
                    loading2.classList.add("loading")
                }
            }
            createList()
        })
})

// Sort Number Asc on click
numAsc.addEventListener('click', () => {
    sortButton.innerHTML = numAsc.innerHTML
    listHistory.innerHTML = ''
    historyServer()
        .then(data => {
            data.sort((a, b) => {
                let keyA = a.number
                let keyB = b.number
                return keyA - keyB
            })
            for (let i = 0; i < 3; i++) {
                let date = data[i].createdDate
                let newDate = new Date(parseInt(date))
                let list = document.createElement("li")
                let hr = document.createElement("hr")
                hr.setAttribute("align", "left")
                hr.classList.add("hr")
                hr.classList.add("separator")
                list.classList.add("listResult")
                list.innerHTML = `The Fibonacci Of <span style="font-weight:bold">${data[i].number}</span> is <span style="font-weight:bold">${data[i].result}</span>. Calculated at: ${newDate}`
                listHistory.appendChild(list)
                listHistory.appendChild(hr)
            }
        })
})

// Sort Number Desc on click
numDesc.addEventListener('click', () => {
    sortButton.innerHTML = numDesc.innerHTML
    listHistory.innerHTML = ''
    historyServer()
        .then(data => {
            data.sort((a, b) => {
                let keyA = a.number
                let keyB = b.number
                return keyB - keyA
            })
            for (let i = 0; i < 3; i++) {
                let date = data[i].createdDate
                let newDate = new Date(parseInt(date))
                let list = document.createElement("li")
                let hr = document.createElement("hr")
                hr.setAttribute("align", "left")
                hr.classList.add("hr")
                hr.classList.add("separator")
                list.classList.add("listResult")
                list.innerHTML = `The Fibonacci Of <span style="font-weight:bold">${data[i].number}</span> is <span style="font-weight:bold">${data[i].result}</span>. Calculated at: ${newDate}`
                listHistory.appendChild(list)
                listHistory.appendChild(hr)
            }
        })
})

// Sort Date Asc on click
dateAsc.addEventListener('click', () => {
    sortButton.innerHTML = dateAsc.innerHTML
    listHistory.innerHTML = ''
    historyServer()
        .then(data => {
            data.sort((a, b) => {
                let keyA = a.createdDate
                let keyB = b.createdDate
                return keyA - keyB
            })
            for (let i = 0; i < 3; i++) {
                let date = data[i].createdDate
                let newDate = new Date(parseInt(date))
                let list = document.createElement("li")
                let hr = document.createElement("hr")
                hr.setAttribute("align", "left")
                hr.classList.add("hr")
                hr.classList.add("separator")
                list.classList.add("listResult")
                list.innerHTML = `The Fibonacci Of <span style="font-weight:bold">${data[i].number}</span> is <span style="font-weight:bold">${data[i].result}</span>. Calculated at: ${newDate}`
                listHistory.appendChild(list)
                listHistory.appendChild(hr)
            }
        })
})

// Sort Date Desc on click
dateDesc.addEventListener('click', () => {
    sortButton.innerHTML = dateDesc.innerHTML
    listHistory.innerHTML = ''
    historyServer()
        .then(data => {
            data.sort((a, b) => {
                let keyA = a.createdDate
                let keyB = b.createdDate
                return keyB - keyA
            })
            for (let i = 0; i < 3; i++) {
                let date = data[i].createdDate
                let newDate = new Date(parseInt(date))
                let list = document.createElement("li")
                let hr = document.createElement("hr")
                hr.setAttribute("align", "left")
                hr.classList.add("hr")
                hr.classList.add("separator")
                list.classList.add("listResult")
                list.innerHTML = `The Fibonacci Of <span style="font-weight:bold">${data[i].number}</span> is <span style="font-weight:bold">${data[i].result}</span>. Calculated at: ${newDate}`
                listHistory.appendChild(list)
                listHistory.appendChild(hr)
            }
        })
})