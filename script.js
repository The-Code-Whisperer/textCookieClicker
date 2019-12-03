
// Set starting value of counter to 0
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0), 10;
}
else {
    document.addEventListener('DOMContentLoaded', () => {
        document.title = "Cookies: " + localStorage.getItem('counter');
        document.querySelector('#counter').innerHTML = localStorage.getItem('counter');
    });
}
if (!localStorage.getItem('button')) {
    localStorage.setItem('button', 1), 10;
}
else {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#button').innerHTML = "Upgrade for " + localStorage.getItem('button') * 100 + "!";
    });
}
if (!localStorage.getItem('autoClicker')) {
    localStorage.setItem('autoClicker', 0), 10;
}
else {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#autoClicker').innerHTML = "Add autoclicker for " + (parseInt(localStorage.getItem('autoClicker'), 10) + 1) * 50 + "!";
        let autoInterval = null;
        autoInterval && clearInterval(autoInterval);
        autoInterval = setInterval(count, 1000 / parseInt(localStorage.getItem('autoClicker'), 10));
        document.querySelector('#autoClickerText').innerHTML = "You have " + localStorage.getItem('autoClicker') + " auto clickers.";
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function count() {
    localStorage.setItem('counter', parseInt(localStorage.getItem('counter'), 10) + parseInt(localStorage.getItem('button'), 10));
    document.querySelector('#counter').innerHTML = numberWithCommas(localStorage.getItem('counter'));
    document.title = "Cookies: " + numberWithCommas(localStorage.getItem('counter'));
}
function upgradeButton() {
    if (parseInt(localStorage.getItem('counter')) >= parseInt(localStorage.getItem('button')) * 100) {
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter'), 10) - parseInt(localStorage.getItem('button'), 10) * 100);
        localStorage.setItem('button', parseInt(localStorage.getItem('button'), 10) + 1);
        document.querySelector('#button').innerHTML = "Upgrade for " + localStorage.getItem('button') * 100 + "!";
    }
    document.querySelector('#counter').innerHTML = numberWithCommas(localStorage.getItem('counter'));
}
let autoInterval = null;
function upgradeAutoClicker() {
    if (parseInt(localStorage.getItem('counter'), 10) >= (parseInt(localStorage.getItem('autoClicker'), 10) + 1) * 50) {
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter'), 10) - (parseInt(localStorage.getItem('autoClicker'), 10) + 1) * 50);
        localStorage.setItem('autoClicker', parseInt(localStorage.getItem('autoClicker'), 10) + 1);
        document.querySelector('#autoClicker').innerHTML = "Add autoclicker for " + (parseInt(localStorage.getItem('autoClicker'), 10) + 1) * 50 + "!";
        autoInterval && clearInterval(autoInterval);
        autoInterval = setInterval(count, 1000 / parseInt(localStorage.getItem('autoClicker'), 10));
    }
    document.querySelector('#counter').innerHTML = numberWithCommas(localStorage.getItem('counter'));
    document.querySelector('#autoClickerText').innerHTML = "You have " + localStorage.getItem('autoClicker') + " auto clickers.";
}