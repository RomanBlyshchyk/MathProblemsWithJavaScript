function calculateFactorial(input) {

    let factorial = 1;
    if(isNaN(input)){
        console.log("input is not a NUMBER. Factorial function can only be used on a numeric type!")
        // TODO: Handle it via UI somehow (eihter another "error field" or a MessageBox)
    }else if(input === 0){
        console.log(1)
    }
    else{
        while (input !== 0) {
            factorial *= input
            input--
        }
        console.log(factorial);
        let factorialResult = document.getElementById('factorialResult');
        factorialResult = factorial
    }
    return factorial
}