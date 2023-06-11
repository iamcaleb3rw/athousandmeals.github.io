const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText:["<img src='./assets/back.png' style='width: 34px; outline:none'>" , "<img src='./assets/next.png' style='width:31px'>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})



$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter' )
IO.observe( el )

  