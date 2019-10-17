function getCellState( houseState, noDays) {

      //Validate input
    var isValid = validateList(houseState);

    if ( isValid && noDays > 0) {
        //Update houseState base on number of days
        for (let i=0; i<noDays; i++) {
            //Update houseState per day
            houseState = updateState(houseState);
        }
    }
    else {
        return "Invalid input"; 
    }
  
    return houseState;
}

function updateState(currStatus){
    var updatedStatus = new Array;

    //Loop through all houses
    for (let j=0; j<currStatus.length; j++) {
        var leftNeighbour = currStatus[j-1];
        var currentHouse = currStatus[j];
        var rightNeighbour = currStatus[j+1];

        // Do if it is the first or last house
        if( leftNeighbour == null || rightNeighbour == null) {

            //if its first house
            if(leftNeighbour == null) {
                switch (rightNeighbour){
                    case 0:
                        currentHouse = 0;
                        break; 
                    default:
                        currentHouse = 1;
                }
                updatedStatus.push(currentHouse);
            }

            //if its last house
            else if (rightNeighbour == null) {
                switch (leftNeighbour){
                    case 0:
                        currentHouse = 0;
                        break; 
                    default:
                        currentHouse = 1;
                }
                updatedStatus.push(currentHouse);
            }
        }
        // Do if its neither the first or last house
        else {
            if( ( leftNeighbour == 0 && rightNeighbour == 0 ) || ( leftNeighbour == 1 && rightNeighbour == 1 )){
                currentHouse = 0;
            }
            else {
                currentHouse = 1;
            }
            updatedStatus.push(currentHouse);
        }
    }
    
    return updatedStatus;
}

//FB to make sure arr contains 0 and 1 only
function validateList(arr) {
    var res = true;
    
    arr.forEach(val => {
       if ( val != 0 && val != 1) {
        res = false;
       }
    });
    
    return res;
}