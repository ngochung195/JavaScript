document.getElementById('caculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result = 0;
    let action = event.submitter.id;

    switch (action) {
        case "add":
            result = n1 + n2;
            document.getElementById('result').innerText = `Result Division: ${result}`;
            break;
        case "sub":
            result = n1 - n2;
            document.getElementById('result').innerText = `Result Division: ${result}`;
            break;
        case "mul":
            result = n1 * n2;
            document.getElementById('result').innerText = `Result Division: ${result}`;
            break;
        case "div":
            result = n1 / n2;
            document.getElementById('result').innerText = `Result Division: ${result}`;
            break;
    }

});