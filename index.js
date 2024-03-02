//GALABAN, Ryan Christian S.
//CMSC100 - UV4L
//Date: Maarch 2, 2024  Time: 18:48
//Program:"index.js" focuses on implementing Basic JavaScripts to create functions


//1. Function validatin if 2 passwords match.


//flow  of checking
    // 1. check if password is less than 8 characters
    // 2. check if password is has at least 1 number
    // 3. check if password has at least 1 uppercase letter
    // 4. check if password has at least 1 lowercase letter
    // 5. check if password is matching the confirm password.

    function validatePassword(password, confirmPassword) {
        // check if password is less than 8 characters
        if (password.length < 8) { //checking length
            return false;
        }
    
        // check if password is has at least 1 number
        if (!/[0-9]/.test(password)) {  //only possible numbers are from 0 to 9
            return false;
        }
    
        // check if password has at least 1 uppercase letter
        if (!/[A-Z]/.test(password)) { //checking for upper case
            return false;
        }
    
        // check if password has at least 1 lowercase letter
        if (!/[a-z]/.test(password)) { // checking for lower case
            return false;
        }
    
        // check if password is matching the confirm password.
        if (password !== confirmPassword) { //comparison
            return false;
        }
    
        return true;
    }

    // test  values will be hardcoded


    console.log(validatePassword("helloworld", "hello"))    // returns false
    console.log(validatePassword("hello", "hello")) 	  // returns false
    console.log(validatePassword("hello1234", "hello1234")) // returns false
    console.log(validatePassword("Hello1234", "Hello1234")) // returns true
    console.log(validatePassword("HELLO1234", "HELLO1234")) // returns false

//2. Reverse password function
    function reversePassword(password){

        var newPassword = "";
        for(var i = password.length - 1; i >= 0; i--){ //minus one because ZERO-indexing
            newPassword += password[i];                 //concatenate empty string iterating from the end of the password string
        }

        return newPassword;
    }

    // test  values will be hardcoded

    console.log(reversePassword("helloworld"))    
    console.log(reversePassword("hello")) 	  
    console.log(reversePassword("hello1234")) 
    console.log(reversePassword("Hello1234"))
    console.log(reversePassword("HELLO1234")) 

//3. Use the two functions above and implement it as onae function, create object generating user and newPassword (from function)

    function storePassword(name, password , confirmPassword){

        function validatePassword(password, confirmPassword) {

            if (password.length < 8) {
                return false;
            }
        
            if (!/[0-9]/.test(password)) {
                return false;
            }
        
            if (!/[A-Z]/.test(password)) {
                return false;
            }
        
            if (!/[a-z]/.test(password)) {
                return false;
            }
        
            if (password !== confirmPassword) {
                return false;
            }
        
            return true;
        }

        function reversePassword(password) {
        
            var newPassword = "";
            for(var i = password.length - 1; i >= 0; i--){
                newPassword += password[i];
            }
        
            return newPassword;
        }

        if(validatePassword(password, confirmPassword)==true){
            newPassword = reversePassword(password);
        }else{
            newPassword = password;
        }

        return{
            name: name,
            newpassword: newPassword
        }

    }



    console.log(storePassword("John","helloworld", "helloworld"))
    console.log(storePassword("John","hello", "hello"))
    console.log(storePassword("John","hello1234", "hello1234"))
    console.log(storePassword("John","Hello1234", "Hello1234"))
    console.log(storePassword("John","HELLO1234", "HELLO1234"))

    

