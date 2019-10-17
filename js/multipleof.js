function getMultiples(multiof, num) {
    var multiples = new Object;
    
    multiof.forEach(val => {
        let arr = new Array;

        for (let ctr = 1; ctr < num; ctr++) {
            if ( ctr % val == 0) {
                arr.push(ctr);
            }
         }
         multiples[val] = arr;
    });
    
    return removeDuplicates(multiples);
}

function removeDuplicates (obj) {
    var combine = new Array;
    var cleanList; 

    for (let multiples in obj) {
        obj[multiples].forEach(val => {
            combine.push( val );
        });
    }
    
    cleanList = [...new Set(combine)];
    return sumMultiples(cleanList);
}

function sumMultiples(arr) {
    var sumOf = 0;
    arr.forEach(val => {
        sumOf = val + sumOf;
    });

   return sumOf;
}