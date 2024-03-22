let equation = "";

function appendToEquation(value) {
    equation += value;
    document.getElementById("equation").value = equation;
}

function calculate() {
    try {
        let result = eval(equation);
        document.getElementById("equation").value = result;
        equation = "";
    } catch (error) {
        document.getElementById("equation").value = 'Error';
        equation = "";
    }
}

function allClear() {
    equation = "";
    document.getElementById("equation").value = "";
}