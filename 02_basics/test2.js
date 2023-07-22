const accountId = 2003;     //const means constant, it can not be changed.
var accountName = "Mousona Acharjee";    // var is a variable used in old js, it has block scope and function scope issues.
let accountEmail = "mou@example.com";   // instead of var we now use let.
accountCity = "Siliguri";    // variable can be declared in this way, but do not prefer this way.

console.log(accountEmail);
let accountState;

/*
prefer not to use var because of issue in block scope and functional scope.

*/
console.table([accountEmail, accountId, accountName, accountCity, accountState]);   // can write all the variables in one line.
