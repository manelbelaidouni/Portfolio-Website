$(document).ready(function(){

    // Menu burger toggle
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll et chargement de page
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY > 60){
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
    });

    // Scroll Reveal Animation
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    // Révèle les éléments de la timeline d'expérience
    srtop.reveal('.experience .timeline', { delay: 400 });
    srtop.reveal('.experience .timeline .container', { interval: 400 });
    
    // Changement de titre et favicon selon la visibilité de la page
    document.addEventListener('visibilitychange', function() {
        if(document.visibilityState === "visible"){
            document.title = "Experience | Portfolio Belaidouni Manel";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        } else {
            document.title = "Revenez vers mon Portfolio !";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

    // Désactivation des touches développeur
    document.onkeydown = function(e) {
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) || // Ctrl+Shift+I/C/J
            (e.ctrlKey && e.key.toUpperCase() === 'U') // Ctrl+U
        ) {
            return false;
        }
    };
});
