var primeFactors = new Array;

function getPrimeFactors (num){
    
    if(num == 1 ) {
        return primeFactors;
    }
    else {
        
        let result = num % 2;
        
        if(result==0) {
            primeFactors.push(2);
            return getPrimeFactors (num / 2);
        }
        else {
            for (let factor=3; factor<=num; factor+=2) {
                result = num % factor;
                if(result==0) {
                    primeFactors.push(factor);
                    return getPrimeFactors (num / factor);
                }
            }
        }
    }
    return primeFactors;
}

function getHighestPrimeFactor (num) {
    if(num > 1) {
        const generatedFactors = getPrimeFactors (num);
        const highestFactor = Math.max(...generatedFactors);

        return `The highest prime factor of ${num} is ${highestFactor}\n\n Prime Factors: [${generatedFactors}]`;
    }
    else {
        return "Number doesn't have prime factor"
    }

}