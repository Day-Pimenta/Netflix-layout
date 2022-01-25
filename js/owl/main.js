$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,    
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:10
        }
    }
})

function bigImg(x) {
    x.style.height = "110%";
    x.style.width = "110%";
    
  }
  
function normalImg(x) {
    x.style.height = "100%";
    x.style.width = "100%";
  }


  

