    function showMenu(toggleId, menuId){
        const toggle = document.getElementById(toggleId);
        const menu = document.getElementById(menuId);

        if(toggle && menu){
            toggle.addEventListener('click', function(){
                menu.classList.toggle('active');
            })
        }
    }

    showMenu('burger', 'menu');


    const heroSlider = new Swiper('.hero_container', {
        autoplay: {
            delay: 2000,
            disableOnInteraction:false,
        },
        loop: true,
        grabCursor: true,
        effect: 'cube', 

        keyboard:{
            enable: true,
        },

        navigation:{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left"
        },

        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 10,
            shadowScale: 0.9,
        },
    });

    const scroll = ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 300,
    })

    scroll.reveal('.item-shop', {
        origin: 'bottom',
        interval: 100,
    })