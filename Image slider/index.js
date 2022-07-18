var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    var slides=$(".slides").css("display","none");
    var dots=$(".dot").removeClass("active");
    if(n>slides.length){slideIndex=1};
    if(n<1){slideIndex=slides.length};
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
}
