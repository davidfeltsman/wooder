window.addEventListener('load', function() {
 
    if ( document.body.classList.contains('fullscreen') && window.innerWidth > 1024 ){

     const sections = document.querySelectorAll('section');
     const content = document.querySelector('.main-content')

     let spinValue = 0;
     let canScroll = true;
     let isLight = false;

    
     const scrolling = function(count) {
         content.setAttribute('style', `
            -webkit-transform: translateY(-${count * 100}vh);
                -ms-transform: translateY(-${count * 100}vh);
                    transform: translateY(-${count * 100}vh);
         `);
     }

     const activeScreen = function (count) {
        buttons.forEach(button => {
            button.classList.remove('active');
        })
        buttons[count].classList.add('active');
    }
     
     const wheeling = function(scroll) {
        if (canScroll) {
            if (scroll.deltaY > 0) {
                if (spinValue < sections.length - 1) {
                    spinValue += 1;
                    activeScreen(spinValue);
                    changeColor(spinValue);
                }
            } else {
                if (spinValue != 0) {
                    spinValue -= 1;
                    activeScreen(spinValue);
                    changeColor(spinValue);
                }
            }
            scrolling(spinValue);
            canScroll = false;
            setTimeout(function() {
                canScroll = true;
            }, 500);
        }
     }
     
    
     document.addEventListener('wheel', wheeling, {passive: true});

     const navbar = document.createElement('nav');
        document.body.appendChild(navbar);
        navbar.classList.add('nav');
        for (let i = sections.length - 1; i >= 0; i--) {
            navbar.insertAdjacentHTML('afterbegin', `
            <div class="nav__item" data-count="${i}">
            <span class="nav__text">${sections[i].getAttribute('data-content')}<span>
            </div>`);
        }
        
        const buttons = document.querySelectorAll('.nav__item');
        buttons[spinValue].classList.add('active');

        const navigation = function(evt) {
            
            if (evt.target.classList.contains('nav__item')) {
                setTimeout(function(){
                    canScroll = false;
                    spinValue = +evt.target.getAttribute('data-count');
                    scrolling(spinValue);
                    activeScreen(spinValue);
                    changeColor(spinValue);
                    setTimeout(function() {
                        canScroll = true;
                    }, 500);
                }, 0);
            }
        }

        navbar.addEventListener('click', navigation);
        
        const changeColor = function(count) {
            let screen = sections[count];
            if (screen.classList.contains('light')) {
            isLight = true;
            } else {
                isLight = false;
            }
            if (isLight) {
                navbar.classList.add('dark');
            } else {
                navbar.classList.remove('dark');
            }
        }
    }
});



