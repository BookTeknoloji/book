// tablet menu
document.querySelector(".burger-menu-tablet").onclick = function () {
    document.querySelector(".tablet-menu-back").style.display = 'flex';

    document.querySelector(".burger-menu-tablet").style.display = 'none';
    document.querySelector(".tablet-menu-icon-x").style.display = 'block';
}

document.querySelector(".tablet-menu-icon-x").onclick = function () {
    document.querySelector(".tablet-menu-back").style.display = 'none';

    document.querySelector(".burger-menu-tablet").style.display = 'block';
    document.querySelector(".tablet-menu-icon-x").style.display = 'none';
}

// mobile menu

document.querySelector(".burger-menu-mobile").onclick = function () {
    document.querySelector(".mobile-menu-back").style.display = 'flex';

    document.querySelector(".burger-menu-mobile").style.display = 'none';
    document.querySelector(".mobile-menu-icon-x").style.display = 'block';
}

document.querySelector(".mobile-menu-icon-x").onclick = function () {
    document.querySelector(".mobile-menu-back").style.display = 'none';

    document.querySelector(".burger-menu-mobile").style.display = 'block';
    document.querySelector(".mobile-menu-icon-x").style.display = 'none';
}