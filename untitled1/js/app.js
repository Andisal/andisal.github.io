$(document).ready(function() {
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false;
    });
});
window.sr = ScrollReveal();
sr.reveal('.navbar', {delay: 500});
sr.reveal('.main', {delay: 700});
sr.reveal('.main', {viewFactor: 0.01});
sr.reveal('.main', {duration: 1500});
sr.reveal('.row', {duration: 1000})
sr.reveal('.row', {delay: 700})
