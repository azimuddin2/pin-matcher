// first part generate pin..!
function getPin() {
    const pinNumber = Math.round(Math.random() * 10000);
    const pinString = pinNumber + '';
    if(pinString.length == 4){
        return pinNumber;
    }
    else{
        console.log('got 3 digit and calling again', pinNumber)
        return getPin();
    }
}

function generatePin() {
    const pinNumber = getPin();
    document.getElementById('pin-input').value = pinNumber;
}

// second part typed number pin..!
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberInput = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            typedNumberInput.value = '';
        }
    }
    else{
        const previousNumber = typedNumberInput.value;
        const newNumber = previousNumber + number;
        typedNumberInput.value = newNumber;
    }
})

// third part submit..!
document.getElementById('submit-button').addEventListener('click',function (){
    const generatePinNumbers = document.getElementById('pin-input').value;
    const typedPinNumbers = document.getElementById('typed-number').value;
    // notifications message..!
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');

    if(generatePinNumbers == typedPinNumbers){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else{
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
})