document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       HOME HERO SLIDER
    ====================================================== */

    const heroSlides = document.querySelectorAll(".hero-slide");
    const heroDots = document.querySelectorAll(".hero-dot");
    const prevButton = document.querySelector(".hero-prev");
    const nextButton = document.querySelector(".hero-next");

    if (heroSlides.length > 0) {

        let currentSlide = 0;
        let sliderInterval;


        /* ---------------------------------------------
           SHOW SLIDE
        --------------------------------------------- */

        function showSlide(index) {

            // Keep index within slider range
            if (index >= heroSlides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = heroSlides.length - 1;
            } else {
                currentSlide = index;
            }


            // Remove active class from all slides
            heroSlides.forEach(function (slide) {
                slide.classList.remove("active");
            });


            // Remove active class from all dots
            heroDots.forEach(function (dot) {
                dot.classList.remove("active");
            });


            // Activate current slide
            heroSlides[currentSlide].classList.add("active");


            // Activate current dot
            if (heroDots[currentSlide]) {
                heroDots[currentSlide].classList.add("active");
            }

        }


        /* ---------------------------------------------
           NEXT SLIDE
        --------------------------------------------- */

        function nextSlide() {
            showSlide(currentSlide + 1);
        }


        /* ---------------------------------------------
           PREVIOUS SLIDE
        --------------------------------------------- */

        function previousSlide() {
            showSlide(currentSlide - 1);
        }


        /* ---------------------------------------------
           AUTOMATIC SLIDER
        --------------------------------------------- */

        function startSlider() {

            sliderInterval = setInterval(function () {
                nextSlide();
            }, 5000);

        }


        /* ---------------------------------------------
           STOP SLIDER
        --------------------------------------------- */

        function stopSlider() {

            clearInterval(sliderInterval);

        }


        /* ---------------------------------------------
           RESTART SLIDER
        --------------------------------------------- */

        function restartSlider() {

            stopSlider();
            startSlider();

        }


        /* ---------------------------------------------
           NEXT BUTTON
        --------------------------------------------- */

        if (nextButton) {

            nextButton.addEventListener("click", function () {

                nextSlide();
                restartSlider();

            });

        }


        /* ---------------------------------------------
           PREVIOUS BUTTON
        --------------------------------------------- */

        if (prevButton) {

            prevButton.addEventListener("click", function () {

                previousSlide();
                restartSlider();

            });

        }


        /* ---------------------------------------------
           DOT NAVIGATION
        --------------------------------------------- */

        heroDots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                showSlide(index);
                restartSlider();

            });

        });


        /* ---------------------------------------------
           PAUSE WHEN MOUSE IS OVER SLIDER
        --------------------------------------------- */

        const heroSlider = document.querySelector(".hero-slider");

        if (heroSlider) {

            heroSlider.addEventListener("mouseenter", function () {
                stopSlider();
            });


            heroSlider.addEventListener("mouseleave", function () {
                startSlider();
            });

        }


        /* ---------------------------------------------
           START SLIDER
        --------------------------------------------- */

        showSlide(0);
        startSlider();

    }

});
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       HERO SLIDER
    ====================================================== */

    const heroSlides = document.querySelectorAll(".hero-slide");
    const heroDots = document.querySelectorAll(".hero-dot");
    const prevButton = document.querySelector(".hero-prev");
    const nextButton = document.querySelector(".hero-next");

    if (heroSlides.length > 0) {

        let currentSlide = 0;
        let sliderInterval;

        function showSlide(index) {

            if (index >= heroSlides.length) {
                currentSlide = 0;
            } 
            else if (index < 0) {
                currentSlide = heroSlides.length - 1;
            } 
            else {
                currentSlide = index;
            }

            heroSlides.forEach(function (slide) {
                slide.classList.remove("active");
            });

            heroDots.forEach(function (dot) {
                dot.classList.remove("active");
            });

            heroSlides[currentSlide].classList.add("active");

            if (heroDots[currentSlide]) {
                heroDots[currentSlide].classList.add("active");
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function previousSlide() {
            showSlide(currentSlide - 1);
        }

        function startSlider() {

            sliderInterval = setInterval(function () {
                nextSlide();
            }, 5000);

        }

        function stopSlider() {

            clearInterval(sliderInterval);

        }

        function restartSlider() {

            stopSlider();
            startSlider();

        }


        /* NEXT BUTTON */

        if (nextButton) {

            nextButton.addEventListener("click", function () {

                nextSlide();
                restartSlider();

            });

        }


        /* PREVIOUS BUTTON */

        if (prevButton) {

            prevButton.addEventListener("click", function () {

                previousSlide();
                restartSlider();

            });

        }


        /* DOT BUTTONS */

        heroDots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                showSlide(index);
                restartSlider();

            });

        });


        /* PAUSE SLIDER ON MOUSE */

        const heroSlider = document.querySelector(".hero-slider");

        if (heroSlider) {

            heroSlider.addEventListener("mouseenter", function () {

                stopSlider();

            });

            heroSlider.addEventListener("mouseleave", function () {

                startSlider();

            });

        }


        /* START SLIDER */

        showSlide(0);
        startSlider();

    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mainNavigation = document.querySelector(".main-navigation");


    if (mobileMenuButton && mainNavigation) {

        mobileMenuButton.addEventListener("click", function () {

            mainNavigation.classList.toggle("mobile-menu-open");

            const isOpen =
                mainNavigation.classList.contains("mobile-menu-open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            /* CHANGE HAMBURGER ICON */

            const menuIcon =
                mobileMenuButton.querySelector("i");

            if (menuIcon) {

                if (isOpen) {

                    menuIcon.classList.remove("bi-list");
                    menuIcon.classList.add("bi-x");

                } else {

                    menuIcon.classList.remove("bi-x");
                    menuIcon.classList.add("bi-list");

                }

            }

        });


        /* CLOSE MENU AFTER CLICKING A LINK */

        const navigationLinks =
            mainNavigation.querySelectorAll(".nav-link");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove(
                    "mobile-menu-open"
                );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const menuIcon =
                    mobileMenuButton.querySelector("i");

                if (menuIcon) {

                    menuIcon.classList.remove("bi-x");
                    menuIcon.classList.add("bi-list");

                }

            });

        });

    }

});
