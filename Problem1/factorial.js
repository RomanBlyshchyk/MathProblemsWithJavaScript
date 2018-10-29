
function calculateFactorial() {

    let factorialInput = document.getElementById('factorialInput').value;
    if(isNaN(factorialInput)){
        console.log("input is not a NUMBER. Factorial function can only be used on a numeric type!")
        // TODO: Handle it via UI somehow (eihter another "error field" or a MessageBox)
    }else if(factorialInput === 0){
        console.log(1)
    }
    else{
        let factorial = 1;
        while (factorialInput !== 0) {
            factorial *= factorialInput
            factorialInput--
        }
        console.log(factorialInput);
    }
    
}