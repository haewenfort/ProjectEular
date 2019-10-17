function generateFibonacci( limit ) {
    
    var fibonacci = new Array;
    var num = 0;

    for (let i=0; i<limit; i++) {
        //Check if term is more than limit
        //we break the loop
        if(num > 0) {
            num = num + fibonacci[i-2]; 
            if(num <= limit) {
                fibonacci.push(num);
            }
            else {
                break;
            }
        }
        //Initialize first and second term
        else {
            num = num + i;
            fibonacci.push(num);
        }
        
    }

    return fibonacci;

}

function getTermSum (numLimit, numType) {
    const fibonacciSequence = generateFibonacci( numLimit );
    var termSum = 0;
    var result;

    fibonacciSequence.forEach(num => {
        switch(numType){
            case 'even':
                if( num%2==0 ){   
                    termSum = num + termSum;   
                }
                break;
            case 'odd':
                if( num%2!=0 ){   
                    termSum = num + termSum;  
                }
                break;
            default:
                return "No result";
        }
    });

    result = `The sum of the ${numType}-valued terms not exceeding ${numLimit} is ${termSum} \n\n fibonacci: [${fibonacciSequence}]`;

    return result;
}