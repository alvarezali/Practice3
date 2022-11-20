import { EmptyValidator, PasswordValidator, EmailValidator} from "/classes.js";

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
const companyName = document.getElementById('company-name');
const smMessage = document.getElementById('sm-company-name');

//Personal account radio button border styling and functionality
paRadio.addEventListener('click', () => {
    paRadioParent.classList.add('account-border');
    baRadioParent.classList.remove('account-border');
    companyDiv.classList.remove('company-container-toggle');
    companyName.value = '';
    smMessage.innerHTML = '';
});

//Business account radion button border styling and functionality
baRadio.addEventListener('click', () => {
    baRadioParent.classList.add('account-border');
    paRadioParent.classList.remove('account-border');
    companyDiv.classList.add('company-container-toggle');
});

//-----------------Email fields-----------------
const e1 = document.getElementById('email');
const e2 = document.getElementById('confirm-email');
const eIcon = document.getElementById('email-icon');

e1.addEventListener('input', () => {
    let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(e1.value === '') {
        eIcon.classList.replace("fa-circle-check", "fa-envelope");
        return
    }

    if(e1.value.match(regex)) {
        eIcon.classList.replace("fa-envelope", "fa-circle-check");

    } else {
        eIcon.classList.replace("fa-circle-check", "fa-envelope");
    }
});

console.log(e1, eIcon);

//-----------------Password fields-----------------

const p1 = document.getElementById('password');
const p2 = document.getElementById('confirm-password');

//-----------------Question box-----------------

//_Question wrapper element
const question = document.getElementById('question-wrapper');
const answer = document.getElementById('answer-wrapper');

//Question box functionality
question.addEventListener('click', () => {
    answer.classList.toggle('answer-wrapper-toggle');
});


//These variables are used for testing purposes
let number = 3;
let greeting = 'hello';
let fakeArr = [];
let fakeRadioBtn = '';

//_Continue button and Input fields
const continueBtn = document.getElementById('continue-btn');
const inputNodeList = document.querySelectorAll('.form-field');
const inputArr = [...inputNodeList];

//-----------------Classes-----------------
const eVal = new EmptyValidator(inputArr, baRadio);
const pVal = new PasswordValidator(p1, p2);
const emVal = new EmailValidator(e1, e2);

continueBtn.addEventListener('click', (e) => {

    e.preventDefault();

    let eVResult = eVal.eValidation();
    let emVResult1 = emVal.compareEmails();
    let pVResult1 = pVal.checkPasswordStrength();
    let pVResult2 = pVal.comparePasswords();
    
    console.log('emptyCheck', eVResult);
    console.log('emailComparison', emVResult1);
    console.log('passwordStrength', pVResult1);
    console.log('passwordComparison', pVResult2);

});






