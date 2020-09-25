const changeTheme = document.getElementById('toggle');
const body = document.body;

changeTheme.addEventListener('input', (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

// Countdown
const countDate = new Date('Nov 24, 2020 12:00:00');

const counter = setInterval(function () {
    const countDateTime = countDate.getTime();
    const today = new Date();
    const timer = document.getElementById('timer');
    const diffCountDate = countDateTime - today;

    // Getting the days, hours, mins and secs
    const days = Math.floor(diffCountDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffCountDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diffCountDate % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diffCountDate % (1000 * 60)) / (1000));


    // Add Zero when it is a single word
    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    timer.innerHTML = `
    <div>${days} <span>days</span></div>
    <span>:</span>
    <div> ${addZero(hours)} <span>hours</span></div>
    <span>:</span>
    <div> ${addZero(mins)} <span>mins</span></div>
    <span>:</span>
    <div> ${addZero(secs)} <span>secs</span></div>`

    // When countdown expires
    if (diffCountDate < 0) {
        clearInterval(counter);
        timer.innerHTML = "St. Davis Clothings welcomes you!"
    }
}, 1000)


// Social Media Display
const getInTouch = document.querySelector('.btn-main');
const socials = document.querySelector('.social-container');
const closeSocials = document.querySelector('.close-btn');

getInTouch.addEventListener('click', displaySocial);
closeSocials.addEventListener('click', closeBox);

function displaySocial() {
    socials.classList.toggle('visible');
}

function closeBox() {
    socials.classList.remove('visible');
}

// SnowFlakes Droppings

var snow = setInterval(function () {
    const snowFlakes = document.createElement('i');
    snowFlakes.classList.add('fas');
    snowFlakes.classList.add('fa-fan');

    snowFlakes.style.left = Math.random() * window.innerWidth + 'px';
    snowFlakes.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowFlakes.style.opacity = Math.random();
    snowFlakes.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowFlakes);

    setTimeout(() => {
        snowFlakes.remove();
    }, 5000)
}, 50)