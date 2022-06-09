document.addEventListener("DOMContentLoaded", () => {
    

    /* Dropdown */
    const button_text = document.querySelector('.i');
    const ul = document.querySelector('header ul');

    button_text.addEventListener('click', () =>{
        ul.classList.toggle('active');
    })
    

    /* Promo */ 
    const price = document.querySelector('.up p');
    const insc = document.querySelector(".inscription");
    const blue_button = document.querySelector('.mois');
    const white_button  = document.querySelector('.sans');

    white_button.addEventListener("click", () =>{
        price.innerHTML = '25';
        insc.innerHTML = " ";
        insc.style.marginBottom = '2.15rem';
    })
    blue_button.addEventListener("click", () =>{
        price.innerHTML = '19'
        insc.innerHTML = "+ frais d'inscription : 1€";
        insc.style.marginBottom = '.7rem';
    })


    /* Countdown */

    const jours = document.querySelector(".info fieldset div:first-child p");
    const heures = document.querySelector(".info fieldset div:nth-child(2) p");
    const minute = document.querySelector(".info fieldset div:nth-child(3) p");
    const secondes = document.querySelector(".info fieldset div:nth-child(4) p");

    console.log(jours, heures, minute, secondes);

    function getChrono(){
        const now = new Date();  // Le nombre de millisconde qu'il y a eu entre le 1er Janvier 1970 et maintenant
        const countdownDate = new Date('June 12, 2022 04:00:00'); // Le nombre de milliseconde qu'il y au entre le 1er Janvier 1970 et la date renseigné en paramètre
        
        // console.log(now, countdownDate) 
        // console.log(now.getTime(), countdownDate.getTime());

        const distanceBase = countdownDate - now;

        const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24)); // distanceBase = combien de jour en milliseconde et on va le diviser par (1000 * 60 * 60 * 24) pour le nombre de jour
        const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) // on va ensuite faire modulo pour avoir le nombre de jour qui reste et on va le div le diviser par (1000 * 60 * 60) pour qur sa nous donne le nombre de jour
        const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);
        
        console.log(days, hours, minutes, seconds);

        jours.textContent = days;
        heures.textContent = hours;
        minute.textContent = minutes;
        secondes.textContent = seconds;

        console.log(days, hours, minutes, secondes)

    }

    const countDownInterval = setInterval(() =>{
        getChrono();
    }, 1000)



});
