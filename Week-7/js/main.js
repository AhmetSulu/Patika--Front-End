(function() {
    'use strict';

    AOS.init({
        startEvent:'load',
        offset: 20,
        once: true,
    })

    var camera = new Swiper('#camera .swiper', {
        speed: 600,
        spaceBetween: 12,
        navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var glightbox = GLightbox({
        selector: '.glightbox'

    })

    var photos = GLightbox({
        selector: '#photos .photo'
    });

    var comment = new Swiper('#comments .swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        }
    });
    

    var header = document.getElementById('header');

    var headerScrolled = function() {  
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);

    var links = document.getElementsByClassName('scrollto');

    var focusSectionLink = function() {  
        var position = window.scrollY + (window.innerHeight / 2);
        
        for (const link of links) {
            var id = link.hash.slice(1);  
            var section = document.getElementById(id);
            
            if (section && position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                link.setAttribute('aria-current', 'page');  
                link.classList.add('active');
            } else {
                link.removeAttribute('aria-current');
                link.classList.remove('active');
            }
        }
    };

    var focusSection = function(event) {
        event.preventDefault();
        var id = event.target.hash.slice(1);
        var section = document.getElementById(id);

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    window.addEventListener('scroll', focusSectionLink);

    for (const link of links) {
        link.addEventListener('click', focusSection);
    }
})();