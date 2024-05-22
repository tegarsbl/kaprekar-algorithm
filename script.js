function runKaprekar() {
    const inputNumber = document.getElementById('inputNumber').value;
    let number = parseInt(inputNumber);
    
    if (isNaN(number) || number < 100 || number > 9999 || /^(\d)\1*$/.test(number)) {
        alert("Enter a three or four digit number where not all the digits are the same.");
        return;
    }

    let steps = [];
    let target = number < 1000 ? 495 : 6174;

    while (number !== target) {
        let digits = String(number).padStart(number < 1000 ? 3 : 4, '0').split('').map(Number);
        let ascending = parseInt(digits.sort((a, b) => a - b).join(''));
        let descending = parseInt(digits.sort((a, b) => b - a).join(''));
        number = descending - ascending;
        steps.push(`${descending} - ${ascending} = ${number}`);
        if (number === target) break;
    }
    steps.push(`Kaprekar's constant is reached: ${target}`);

    document.getElementById('output').innerHTML = steps.join('<br>');
}