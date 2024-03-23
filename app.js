let equation = ""
let id = 0
document.getElementById("equation").setAttribute("placeholder", "0")

function welcome() {
    alert("Welcome to my simple calculator!")
    let calname = prompt("Let's name your calculator")
    if (!calname) {
        document.getElementById("calname").innerHTML = "My "
    } else {
        document.getElementById("calname").innerHTML = calname + "'s "
    }
}

function appendToEquation(value) {
    equation += value;
    document.getElementById("equation").value = equation
}

function calculate() {
    try {
        let result = 0
        if (equation.length > 0) {
            result = eval(equation)
        } else {
            equation = "0"
            result = 0
        }

        showHistory(result)

        document.getElementById("equation").value = result
        equation = ""
    } catch (error) {
        console.log(error)
        document.getElementById("equation").value = 'Error'
        equation = ""
    }
}

function allClear() {
    equation = ""
    document.getElementById("equation").value = ""
    document.getElementById("history-list").innerHTML = ""
    id = 0
}

function backspace() {
    equation = equation.substring(0, equation.length - 1)
    document.getElementById("equation").value = equation
}

function setBGcolor(color) {
    document.getElementById("mycal").setAttribute("style", "background-color:" + color + ";")
}

function showHistory(result) {
    id++
    
    let history = {
        RowId: id,
        Equation: equation,
        Result: result
    }

    let historyDiv = document.getElementById("history-list")
    row = document.createElement("div")
    row.setAttribute("class", "history-row")
    row.innerHTML = 'ครั้งที่ : ' + history.RowId + '<br>' + "equation : " + history.Equation + "<br>" + "result : " + history.Result
    historyDiv.appendChild(row)
}

welcome()