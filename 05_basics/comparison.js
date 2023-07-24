// console.log(null > 0);   

// console.log(null == 0);

// console.log(null >= 0);


/*
    comparisons convert null to a number, treating it as 0. That's why 
    3) null >= 0 is true and 1) null > 0 is false
*/

// strict comparison (===)  ---->
console.log("2" === 2);

// === checks not only the value but also the datatype, 
// this is why ("2" == 2) gives true but ("2" === 2) gives false