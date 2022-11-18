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




export {EmptyValidator};