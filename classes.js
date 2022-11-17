class EmptyValidator {
    constructor(arr){
        this.arr = arr;
    }

    eValidation(){
        
        let smName = 'sm-';
        let smElement = null;
        let result =  true;
        const baRadio = document.getElementById('business-account');

        if(!Array.isArray(this.arr) || this.arr.length === 0) {
            result = false;
            return result;
        }

        let i = 1;

        if(baRadio.checked) {i = 0;}

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