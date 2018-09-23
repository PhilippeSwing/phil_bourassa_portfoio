$(function() {
    $(this).scrollTop(0);

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 85,
        backSpeed: 20,
        // loop: true,
        showCursor: false,
    });

    // SMOOTH SCROLL STARTS
    // $('.header-nav__item__link').smoothScroll();
    $('.header-nav__item__link, .arrow-link, .hero-text__portfolio-button').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
    });
    // SMOOTH SCROLL ENDS

    // FLICKITY STARTS
    $('.blog-post-container').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
    });
    // FLICKITY ENDS

    // MENU DISPLAY STARTS
    $('.menu-icon').on('click', function() {
        $('.header-top-container').toggleClass('menu-display');
    });
    // MENU DISPLAY ENDS

    // Projects Fade In STARTS
    new WOW().init();
    // Projects Fade In ENDS

    // ========================
    // ========================
    // BEN'S BAGELS!!!
    const pressed = [];
    const code = "bensbagels";
    // let frameCount = 0;

    const finishbagels = () => {
        let bagel = document.getElementById("bagel-container");
        bagel.className = "hide";
    }

    const trigger = () => {
        setTimeout(
            function() {
                finishbagels();
            }, 10000);
    }

    const startbagels = () => {
        let bagel = document.getElementById("bagel-container");
        bagel.className = "show";
        trigger();

    }

    window.addEventListener("keyup", function(e) {
        pressed.push(e.key);
        pressed.splice(-code.length - 1, pressed.length - code.length);

        if (pressed.join("").includes(code)) {
            startbagels();
        }
    });
    // BEN'S BAGELS!!!

});