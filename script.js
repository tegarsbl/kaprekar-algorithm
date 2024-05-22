function runKaprekar() {
    const inputNumber = document.getElementById('inputNumber').value;
    let number = parseInt(inputNumber);

    if (isNaN(number) || number < 100 || number > 9999 || /^(\d)\1*$/.test(number)) {
        alert("Enter a three or four digit number where not all the digits are the same.");
        return;
    }

    let steps = [];
    let target = number < 1000 ? 495 : 6174;
    let iterations = 0;

    while (number !== target) {
        iterations++;
        let digits = String(number).padStart(number < 1000 ? 3 : 4, '0').split('').map(Number);
        let ascending = parseInt(digits.sort((a, b) => a - b).join(''));
        let descending = parseInt(digits.sort((a, b) => b - a).join(''));
        number = descending - ascending;
        steps.push(`${iterations}. ${descending.toString().padStart(4, '0')} - ${ascending.toString().padStart(4, '0')} = ${number.toString().padStart(4, '0')}`);
        if (number === target) break;
    }
    steps.push(`${iterations + 1}. ${target.toString().padStart(4, '0')} - ${target.toString().padStart(4, '0').split('').reverse().join('')} = ${target.toString().padStart(4, '0')}`);
    steps.push(`Total iterations: ${iterations}`);

    document.getElementById('output').innerHTML = steps.join('<br>');
}