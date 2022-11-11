//More button related elements
const moreBtn = document.getElementById('more-li');
const moreLink = document.getElementById('more-a');
const moreContainer = document.getElementById('more-container');
const moreUp = document.getElementById('more-up');
const moreDown = document.getElementById('more-down');
const box = document.getElementById('check-toggle');

//Create account radio buttons
const pAccount = document.getElementById('personal-account');
const pAccountParent = pAccount.parentElement;
const bAccount = document.getElementById('business-account');
const bAccountParent = bAccount.parentElement;
const companyDiv = document.getElementById('company-container');

//Question wrapper element
const question = document.getElementById('question-wrapper');
const answer = document.getElementById('answer-wrapper');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('more-toggle');
    moreBtn.classList.toggle('more-li-hover');
    moreLink.classList.toggle('more-a-toggle');
    moreContainer.classList.toggle('more-container-toggle');
    moreUp.classList.toggle('more-up-toggle');
    moreDown.classList.toggle('more-down-toggle');
    box.checked = !box.checked;
});


pAccount.addEventListener('click', () => {
    if(pAccount.checked) {
        pAccountParent.classList.add('account-border');
        bAccountParent.classList.remove('account-border');
        companyDiv.classList.remove('company-container-toggle');
    }
});

bAccount.addEventListener('click', () => {
    if(bAccount.checked) {
        bAccountParent.classList.add('account-border');
        pAccountParent.classList.remove('account-border');
        companyDiv.classList.add('company-container-toggle');
    }
});

question.addEventListener('click', () => {
    answer.classList.toggle('answer-wrapper-toggle');
});

