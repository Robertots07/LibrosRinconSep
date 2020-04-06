$(document).ready(function() {
    /*aqui rebe mete lo javascript*/
    new WOW().init();

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

    /* Logo Slider */
    $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
    //side bar 
    $(document).on("click", "#sidebarCollapse", function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.mdb-select').materialSelect({
    });
    
    /*aqui rebe termina lo javascript*/
});