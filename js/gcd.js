//Recursive Function to Get GCD of 2 integers
function generateGCD (num1, num2) {

    //Base case
    if(num1 == 0){ 
        return num2; 
    }
    //Execute until reach the base case
    else {
        //Make sure to get the result in integer only (no decimal/fraction)
        return generateGCD(num2%num1, num1);
    }
}

function getGCD(num, arr)
{
    //Check if array length is match with the required length(num)
    if ( arr.length == num ) {

        //Get the first integer as base digit
        var result = arr[0];

        //Loop throughout the array length
        for (let ctr=1; ctr<num; ctr++) {
            result = generateGCD(result, arr[ctr]);   
        }

        //Return the Greatest Common Divisor
        return "Greatest Common Divisor is " + result;
    }
    else {
        return "Invalid argument";
    }
}


