function start() {


    const covidContainer = document.querySelector(".covid-section");
    covidContainer.addEventListener("click", arrowChange, false);

    function arrowChange(e) {

        covidContainer.classList.toggle("covid-section-dropdown");

    }
}



window.addEventListener("load", start, false);