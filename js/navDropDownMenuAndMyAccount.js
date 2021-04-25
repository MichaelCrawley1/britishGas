function start() {

    const menu = document.querySelector(".c-js-header__mobile-nav-menu");

    menu.addEventListener("click", menuDisplay, false);

    const myAccount = document.querySelector(".c-js-header__mobile-nav-my-account");
    myAccount.addEventListener("click", dropDown, false);

    const toggleHeader = document.body;

    const mediaQuery = window.matchMedia("(min-width: 47rem)");

    const headerHeight = document.querySelector('.c-header');

    const menuHeight = document.querySelector('.c-js-header__mobile-nav-drop-down-menu');



    function menuDisplay() {

        mediaQuery.addListener(menuScreenChange);

        toggleHeader.classList.toggle("toggle-menu");
        menuHeight.style.transition = "height linear 300ms";
        toggleHeader.classList.remove("toggle-header");
        headerHeight.style.transition = "none";


        function menuScreenChange() {

            if (mediaQuery.matches) {

                toggleHeader.classList.remove("toggle-menu");
                menuHeight.style.transition = "none";


            }
        }


    }

    function dropDown() {


        mediaQuery.addListener(myAccountScreenChange);
        toggleHeader.classList.toggle("toggle-header");

        headerHeight.style.transition = "height linear 300ms";
        toggleHeader.classList.remove("toggle-menu");
        menuHeight.style.transition = "none";

        function myAccountScreenChange() {
            if (mediaQuery.matches) {

                toggleHeader.classList.remove("toggle-header");
                headerHeight.style.transition = "none";

            }


        }


    }


}
















window.addEventListener("load", start, false);