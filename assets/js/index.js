const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    document.querySelectorAll('.menu-list a').forEach(link => {
        link.addEventListener("click", closeMenu);
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.faq-item-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});




handleScroll();

function handleScroll() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);




document.addEventListener("DOMContentLoaded", function () {
    const leftItems = document.querySelectorAll(".reviews-left-item");
    const reviewItems = document.querySelectorAll(".reviews-item");

    leftItems.forEach((item, index) => {
        if (index !== 0) {
            item.style.display = "none";
        }
    });

    reviewItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetId = this.getAttribute("data-id");

            leftItems.forEach(leftItem => {
                if (leftItem.getAttribute("data-id") === targetId) {
                    leftItem.style.display = "block";
                } else {
                    leftItem.style.display = "none";
                }
            });
        });
    });
});




document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.querySelectorAll('.footer-menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".decor-animation");

    elements.forEach((el) => {
        function toggleVisibility() {
            el.classList.toggle("hidden");
            const randomDelay = Math.random() * 3000 + 1000;
            setTimeout(toggleVisibility, randomDelay);
        }
        toggleVisibility();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero-main-title");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroTitle.classList.add("show");
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(heroTitle);
});


document.addEventListener("DOMContentLoaded", () => {
    const decorTree = document.querySelector(".possibilities-picture");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                decorTree.classList.add("show");
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(decorTree);
});