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
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;

        if(this.p1.type !== 'password') {
            throw new Error ('First input element is not of type password');
        }

        if(this.p2.type !== 'password') {
            throw new Error ('Second input element  is not of type password');
        }

    }

    checkPasswordStrength() {

        if(this.p1.value !== '') {

            const smP1 = document.getElementById(`sm-${this.p1.id}`);

            /*password must have between 8 to 15 characters and contain at least one lowercase letter, 
            one uppercase letter, one numeric digit, and one special character*/
            let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

            let strength = this.p1.value.match(regex);
            
            if(strength === null) {
                smP1.innerHTML = 'Your password is not valid. Please, check!'; 
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }

    }

    comparePasswords() {
        
        if(this.p1.value !== '' && this.p2.value !== '') {
            const smP1 = document.getElementById(`sm-${this.p1.id}`);
            const smP2 = document.getElementById(`sm-${this.p2.id}`);

            if(this.p1.value === this.p2.value) {
                return true;
            } else {
                smP1.innerHTML = 'Your passwords are not identical';
                smP2.innerHTML = 'Your passwords are not identical';
                return false;
            }
        } else {
            return false;
        }
    }
}


class EmailValidator {
    constructor(e1, e2) {
        this.e1 = e1;
        this.e2 = e2;
    }

    compareEmails() {
        if(this.e1.value !== '' && this.e2.value !== '') {
            const smE1 = document.getElementById(`sm-${this.e1.id}`);
            const smE2 = document.getElementById(`sm-${this.e2.id}`);
            
            if(this.e1.value === this.e2.value) {
                return true;
            } else {
                smE1.innerHTML = 'Your emails are not identical'; 
                smE2.innerHTML = 'Your emails are not identical'; 
                return false;
            }

        } else {
            return false;
        }
    }
}



export {EmptyValidator, PasswordValidator, EmailValidator};