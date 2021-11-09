$(document).ready(function() {
    $('.slider').slick();
})


/* menu  nav toggle */
$("#nav--toggle").on("click" , function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $('#body').toggleClass('active');
});

let modalBtn = document.querySelectorAll('.modal__btn-open');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');
let body = document.querySelector('.body');
let main = document.querySelector('.main');

modalBtn.forEach(b=>b.addEventListener("click", () => {
    modal.classList.add('active');
    body.classList.add('active');
    main.classList.add('active');

}));
modalClose.addEventListener("click", () => {
    modal.classList.remove('active');
    body.classList.remove('active');
    main.classList.remove('active');
})

//questionsplus1
//questions__about1

$("#questionsplus1").on("click" , function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#questions__about1").toggleClass("active");
});

$("#questionsplus2").on("click" , function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#questions__about2").toggleClass("active");
});

$("#questionsplus3").on("click" , function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#questions__about3").toggleClass("active");
});

$("#questionsplus4").on("click" , function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#questions__about4").toggleClass("active");
});

    var introH = $("#intro").innerHeight();
    var header = $("#header");
    var scrollOffset = $(window).scrollTop();

    /* header  fixed */
    checkScroll(scrollOffset);

    $(window).on("scroll" , function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll ( scrollOffset ){


        if( scrollOffset >= 330 ){

            header.addClass("fixed");

        } else{

            header.removeClass("fixed");

        }

    }

let headerMediaImg = document.querySelector('.header__media-logo');
let callMobile = document.querySelector('.callMobile');

headerMediaImg.addEventListener('click', (event) => {
    event.preventDefault();
    $('.callMobile').toggleClass('active');
})