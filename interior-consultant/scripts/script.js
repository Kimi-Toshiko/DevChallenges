const hamburgerLines = $('.hamburger-line');
const menuContainer = $('.menu');
const menuItems = $('.menu a .item');

$(document).ready(
    function () {
        $('.hamburger').on('click', toggleMenu);
    }
);

function toggleMenu() {
    if (menuContainer.css('display') === 'none') {
        console.log('open menu');
        menuContainer.css('display', 'flex');
        
        hamburgerLines[0].addAnimation('rotate-left', '.5s');
        hamburgerLines[1].addAnimation('fade-out', '.25s');
        hamburgerLines[2].addAnimation('rotate-right', '.5s');
        menuContainer[0].addAnimation('fade-in', '.5s');
        for (i = 0; i < menuItems.length; i++) {
            menuItems[i].addAnimation('fade-in', '.7s');
        }
        $('main')[0].addAnimation('fade-out', '.5s');
        $('footer')[0].addAnimation('fade-out', '.5s');

        menuContainer.one ('animationend webkitAnimationEnd onAnimationEnd', function() {
            $(this).css('display', 'flex');
        });
    }
    else {
        console.log('close menu');
        hamburgerLines[0].addAnimation('rotate-left-back', '.5s');
        hamburgerLines[1].addAnimation('fade-in', '.25s');
        hamburgerLines[2].addAnimation('rotate-right-back', '.5s');
        for (i = 0; i < menuItems.length; i++) {
            menuItems[i].addAnimation('fade-out', '.7s');
        }
        menuContainer[0].addAnimation('fade-out', '.5s');
        $('main')[0].addAnimation('fade-in', '.5s');
        $('footer')[0].addAnimation('fade-in', '.5s');

        menuContainer.one ('animationend webkitAnimationEnd onAnimationEnd', function() {
            $(this).css('display', 'none');
        });
    }
}