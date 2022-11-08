const dropdowns = document.querySelectorAll('.dropdown');
const openMenu = document.querySelector('header>nav>div.open-menu');

const closeMenu = document.querySelector('.menu>.close-menu');

openMenu.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.add('show');
})
closeMenu.addEventListener('click', (e) => {
    console.log(e.target)
    e.target.parentElement.parentElement.parentElement.classList.remove('show');
})
dropdowns.forEach((element) => {
    element.addEventListener('mouseover', enableDropdown);
    element.addEventListener('click', enableDropdown);
    element.addEventListener('mouseleave', disableDropdown);
});

function enableDropdown(e) {
    console.log(e.type);
    if (e.type === 'click') {
        if (this.classList.contains('show')) {
            this.classList.remove('show');
            this.querySelector('a>img').src = 'images/icon-arrow-down.svg';
        }
        else {
            this.classList.add('show');
            this.querySelector('a>img').src = 'images/icon-arrow-up.svg';
        }
    }
    else {
        this.classList.add('show');
        this.querySelector('a>img').src = 'images/icon-arrow-up.svg';
    }
}
function disableDropdown() {
    this.classList.remove('show');
    this.querySelector('a>img').src = 'images/icon-arrow-down.svg';
}


