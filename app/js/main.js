$(function () {
    $('.slider-block__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.slider-block__arrows',
        prevArrow: '<img src="./images/arrows-left.png" alt="img">',
        nextArrow: '<img src="./images/arrows-rigth.png" alt="img">',
    });



    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });
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
        })
    })
})



