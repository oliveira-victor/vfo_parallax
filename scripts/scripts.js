const welcome = document.querySelector('.welcome');
const footer = document.querySelector('.footer');

window.addEventListener('load', function () {
    setTimeout(() => {
        welcome.style.display = "block";

        setTimeout(() => {
            welcome.classList.add('fadeOut');

            setTimeout(() => {
                welcome.style.display = "none";
                footer.style.display = "block"
            }, 2000)
        }, 5000);
    }, 1000);
})