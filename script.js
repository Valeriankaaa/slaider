window.addEventListener('DOMContentLoaded', ()=> {
        const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

        let i = 2;
        
        if(slides.length < 10) { // отображение тотал кол-ва слайдов
            total.textContent = `0${slides.length}`;
        } else {
            total.textContent = slides.length;
        };

        next.addEventListener('click', function(){ 
            ++i;
            if (i>=slides.length) { // получение класса show
                slides[i-1].classList.remove('show');
                slides[i-1].classList.add('hide');
                i=0;
                slides[i].classList.remove('hide');
                slides[i].classList.add('show');
                
            } else {
                slides[i-1].classList.remove('show');
                slides[i-1].classList.add('hide');
                slides[i].classList.remove('hide');
                slides[i].classList.add('show');
            }
            showSlides(i);
        })
        prev.addEventListener('click', function() { 
            --i;
            console.log(i)
            if (i+1==0) { // получение класса show
            slides[i+1].classList.remove('show');
            slides[i+1].classList.add('hide');
            i=slides.length-1;
            slides[i].classList.remove('hide');
            slides[i].classList.add('show');       
            } else {
                slides[i+1].classList.remove('show');
                slides[i+1].classList.add('hide');
                slides[i].classList.remove('hide');
                slides[i].classList.add('show');
            }
            showSlides(i);

    });

        function showSlides(n) {
            slideIndex = n + 1;
            if(slideIndex < 10) { // отображение тотал кол-ва слайдов
                current.textContent = `0${slideIndex}`;
            } else {wha
                current.textContent = slideIndex;
            };
        }
});     