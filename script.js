//-----------------More button-----------------

//_More button related elements
const moreBtn = document.getElementById('more-li');
const moreLink = document.getElementById('more-a');
const moreContainer = document.getElementById('more-container');
const moreUp = document.getElementById('more-up');
const moreDown = document.getElementById('more-down');
const box = document.getElementById('check-toggle');

//More button and More section styling and functionality
moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('more-toggle');
    moreBtn.classList.toggle('more-li-hover');
    moreLink.classList.toggle('more-a-toggle');
    moreContainer.classList.toggle('more-container-toggle');
    moreUp.classList.toggle('more-up-toggle');
    moreDown.classList.toggle('more-down-toggle');
    box.checked = !box.checked;
});


//-----------------Account radio buttons-----------------

//_Account radio buttons and parent elements
const paRadio = document.getElementById('personal-account');
const paRadioParent = paRadio.parentElement;
const baRadio = document.getElementById('business-account');
const baRadioParent = baRadio.parentElement;
const companyDiv = document.getElementById('company-container');

//Personal account radio button border styling and functionality
paRadio.addEventListener('click', () => {
    if(paRadio.checked) {
        paRadioParent.classList.add('account-border');
        baRadioParent.classList.remove('account-border');
        companyDiv.classList.remove('company-container-toggle');
    }
});

//Business account radion button border styling and functionality
baRadio.addEventListener('click', () => {
    if(baRadio.checked) {
        baRadioParent.classList.add('account-border');
        paRadioParent.classList.remove('account-border');
        companyDiv.classList.add('company-container-toggle');
    }
});


//-----------------Question box-----------------

//_Question wrapper element
const question = document.getElementById('question-wrapper');
const answer = document.getElementById('answer-wrapper');

//Question box functionality
question.addEventListener('click', () => {
    answer.classList.toggle('answer-wrapper-toggle');
});


//-----------------Classes-----------------

class EmptyValidator {
    constructor(arr){
        this.arr = arr;
    }

    eValidation(){

        let result =[];

        if( !Array.isArray(this.arr) || this.arr.length === 0) {return result;}

        for(let i=0; i<this.arr.length; i++){

            if(this.arr[i].value === ""){
                result.push(0);
            } else {
                result.push(1);
            }
        }
        return result;
    }
}

//These variables are used for testing purposes
let number = 3;
let greeting = 'hello';
let fakeArr = [];

//_Continue button and Input fields
const continueBtn = document.getElementById('continue-btn');
const inputNodeList = document.querySelectorAll('.form-field');
const inputArr = [...inputNodeList];

const eVal = new EmptyValidator(inputArr);

continueBtn.addEventListener('click', (e) => {

    e.preventDefault();
    console.log(eVal.eValidation());

});






