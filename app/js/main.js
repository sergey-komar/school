$(function () {
    $('.slider-block__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.slider-block__arrows',
        prevArrow: '<img src="./images/arrows-left.png" alt="img">',
        nextArrow: '<img src="./images/arrows-rigth.png" alt="img">',
        responsive: [
            {
              breakpoint: 998,
              settings: {
                arrows: false,
                dots: true
              }
            },
          ]
    });





    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });


     // Рейтинг
    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#A0A0A0",
        ratedFill: "#ffc35b",
        readOnly: true
      });
});


$(".catalog-price__form-input").ionRangeSlider({
    type: "double",
    prefix: "",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
  
  },
  
  });


window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById('input-mask');
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    if(element){
        var mask = IMask(element, maskOptions);
    }


    const accardion = document.querySelectorAll('.questions-accardion__img');

    accardion.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('sery')
        });
    });


    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function() {
    this.classList.toggle('nav-icon--active')
    menu.classList.toggle('nav--active');
});

 
 const navLinks = document.querySelectorAll('.menu__list a');

 
 navLinks.forEach(function (item) {
 
   item.addEventListener('click', function () {
    mobile.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
    menu.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации

        })
    })


//SIDEBAR
const filter = document.querySelector('.search__title');
const sidebar = document.querySelector('.sidebar--mobile');

filter.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-show')
})    

    
const catalogHidden = document.querySelector('.catalog-box--hidden');
const btnCatalog = document.querySelector('.catalog-block__link');

  btnCatalog.addEventListener('click', (e) => {
    e.preventDefault();
    catalogHidden.classList.toggle('hidden')
})

});

