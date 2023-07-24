// Two types of memory : Stack memory (Primitive) and Heap memory (Non-primitive)

// Stack memory ---->

    let a = 10;
    let b = a; // Here, the value of 'a' (primitive) is copied to 'b'.
    b = 20;    // Changing the value of 'b' does not affect 'a'.

    console.log(a); // Output: 10
    console.log(b); // Output: 20


/*
    SUMMARY OF STACK MEMORY --->
        1. It is a temporary storage memory. 

        2. In stack memory, when you create a new variable and
        assign it a reference to an another variable, the reference itself is 
        typically copied to the new variable.

        3. When the computing task is complete, the memory of 
        the variable will be automatically erased. 

*/


// Heap memory ---->

    // Creating an object and assigning it to 'obj1'
    let obj1 = {
        name: "John",
        age: 30,
    };
    
    // 'obj2' is assigned the same reference as 'obj1'
    let obj2 = obj1;
    
    // Modifying 'obj2' will affect 'obj1' since they both point to the same object
    obj2.age = 35;
    
    console.log(obj1.age); // Output: 35
    console.log(obj2.age); // Output: 35


  /*
    SUMMARY OF HEAP MEMORY --->
        1. dynamic data such as objects, arrays are stored.
        
        2. In heap memory, when you assign an object or another reference variable 
        to a new variable, the reference (memory address) to the original object 
        is copied to the new variable. The original value of the reference variable, 
        which is the memory address of the object in the heap, goes to the new variable.

        3. Changes to the new variable change the original variable.


  */