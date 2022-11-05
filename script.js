const moreBtn = document.getElementById('more-li');
const moreLink = document.getElementById('more-a');
const moreContainer = document.getElementById('more-container');
const moreUp = document.getElementById('more-up');
const moreDown = document.getElementById('more-down');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('more-toggle');
    moreBtn.classList.toggle('more-li-hover');
    moreLink.classList.toggle('more-a-toggle');
    moreContainer.classList.toggle('more-container-toggle');
    moreUp.classList.toggle('more-up-toggle');
    moreDown.classList.toggle('more-down-toggle');
});