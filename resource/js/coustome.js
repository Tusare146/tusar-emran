//hamburger menu //

function openMenu() {
    document.getElementById('nav-bar').style.height = "100%";

}
function closeMenu() {
    document.getElementById('nav-bar').style.height = "0%";
}

//smoth scroll //
$(function() {
    $('.menu-item a, .arrow-section a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this,
            'href')).offset().top
        }, 1500);
    });
});

//mixit-up files //

var mixer = mixitup('.grid-portfolio-container');




