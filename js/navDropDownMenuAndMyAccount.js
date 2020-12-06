function start() {

    const menu = document.querySelector(".menu-pointer");

    menu.addEventListener("click", menuDisplay, false);

    const myAccount = document.querySelector(".nav-menu-after-click");
    myAccount.addEventListener("click", dropDown, false);

    const toggleHeader = document.body;


    function menuDisplay() {



        toggleHeader.classList.toggle("toggle-menu");
        toggleHeader.classList.remove("toggle-header");



    }

    function dropDown() {

        toggleHeader.classList.toggle("toggle-header");
        toggleHeader.classList.remove("toggle-menu");

    }


}



















window.addEventListener("load", start, false);