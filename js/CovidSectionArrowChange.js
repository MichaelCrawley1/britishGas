function start() {


    const covidContainer = document.querySelector(".c-js-covid__warning-section");
    covidContainer.addEventListener("click", arrowChange, false);

    function arrowChange(e) {

        covidContainer.classList.toggle("c-js-covid__section-dropdown");

    }
}



window.addEventListener("load", start, false);