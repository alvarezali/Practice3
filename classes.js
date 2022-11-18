class EmptyValidator {
    constructor(arr, radioBtn){
        this.arr = arr;
        this.radioBtn = radioBtn;

        if(!Array.isArray(this.arr) || this.arr.length === 0) {
            throw new Error('This array is not valid');
        }

        if(this.radioBtn.type !== 'radio') {
            throw new Error('This radio button is not valid');
        }
    }

    eValidation(){
        
        let result =  true;

        let i = 1;

        if(this.radioBtn.checked) {i = 0;}

        let smName = 'sm-';
        let smElement = null;

        for(i; i<this.arr.length; i++){

            if(this.arr[i].value === ""){
                smName = `${smName}${this.arr[i].id}`
                smElement = document.getElementById(smName)
                smElement.innerHTML = 'This field cannot be empty';
                smName = 'sm-';
                result = false;

            } else {
                smName = `${smName}${this.arr[i].id}`
                smElement = document.getElementById(smName)
                smElement.innerHTML = "";
                smName = 'sm-';
            }
        }
        return result;
    }
}

class PasswordValidator {
    constructor(input1, input2) {
        this.input1 = input1;
        this.input2 = input2;

        if(this.input1.type !== 'password') {
            throw new Error ('Input1 is not of type password');
        }

        if(this.input2.type !== 'password') {
            throw new Error ('Input2 is not of type password');
        }

    }

    checkPasswordStrength() {

        if(this.input1.value !== '') {

            const smPass1 = document.getElementById(`sm-${this.input1.id}`);

            /*password must have between 8 to 15 characters and contain at least one lowercase letter, 
            one uppercase letter, one numeric digit, and one special character*/
            let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

            let strength = this.input1.value.match(regex);
            
            if(strength === null) {
                smPass1.innerHTML = 'Your password is not valid. Please, check!'; 
                return false;
            } else {
                return true;
            }
        } 

    }

    comparePasswords() {
        
        if(this.input1.value !== '' && this.input2.value !== '') {
            const smPass1 = document.getElementById(`sm-${this.input1.id}`);
            const smPass2 = document.getElementById(`sm-${this.input2.id}`);

            if(this.input1.value === this.input2.value) {
                return true;
            } else {
                smPass1.innerHTML = 'Your passwords are not identical';
                smPass2.innerHTML = 'Your passwords are not identical';
                return false;
            }
        } else {
            return false;
        }
    }
}

export {EmptyValidator, PasswordValidator};