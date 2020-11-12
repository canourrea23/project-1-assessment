let addButton = document.querySelector('.add');
let minusButton = document.querySelector('.minus')
let input = document.getElementById('input')
let output = document.getElementById('output')

let result = 0


addButton.addEventListener('click', addfunction)
    function addfunction(){
        result += parseInt(input.value)
        output.textContent = result
        if (input.value < 0) {
            output.style.color = 'black';
        }
    }
    
minusButton.addEventListener('click', minusfunction)
    function minusfunction(){
        result -= parseInt(input.value)
        output.textContent = result
        if (input.value > 0) {
            output.style.color = 'blue';
        }
    }







 