let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-nav');
let searchInputIcon = document.querySelector('.header-search-icon');
let searchInput = document.querySelector('.header-search-input')

menuBtn.addEventListener('click', function() {
    document.body.classList.toggle('_lock')
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

searchInputIcon.addEventListener('click', function() {
    searchInput.focus();
});

const menuLink = document.querySelectorAll('.header-nav-link[data-goto]');
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target

        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}

menuLink.forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        document.body.classList.remove('_lock')
    });
});