// Tabla de contenido




 //VARIABLES 

jQuery(document).ready(function($){
    "user strict";

    var mainSlider = $('.main_slider');
    var hamburger = $('.hamburger_container');
    var menu = $('.hamburger_menu');
    var menuActive = false;
    var hamburgerClose = $('.hamburger_close');
    var fsOverlay = $('.fs_menu_overlay');

    initFavorite();
    initIsotopeFiltering();
    initSlider();

    //2 MENU
    

    //3 Le damos la funcion para agregar productos a favoritos
      function initFavorite(){
          if($('.favorite').length)
          {
            var favs = $('.favorite');

            favs.each(function()
            {
            var fav = $(this);
            var active = false;
            if(fav.hasClass('active'))
            {
                active = true;
            }
            fav.on('click', function()
            {
                    if(active){
                        fav.removeClass('active')
                        active = false;
                    }else{
                        fav.addClass('active');
                        active = true;
                    }
            });

            });
          }

      }


    //4



    //5 Filtramos la tabla de productos por su tipo hombre mujer accesorios

     function initIsotopeFiltering(){
        if($('.grid_sorting_button').length)
        {
            $('.grid_sorting_button').click(function()
            {
                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.product-grid').isotope({
                    filter: selector,
                    animationOptions:{
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }


     }
        

     function initSlider(){
            if($('.producto_slider').length){
                var slider1 = $('.producto_slider');
                
                slider1.owlCarousel({
                            loop:false,
                            dots:false,
                            nav:false,
                            responsive:{
                                0:{items:1},
                                480:{items:2},
                                768:{items:3},
                                991:{items:4},
                                1280:{items:5},
                                1440:{items:5},
                            }
                });

                if($('.producto_slider_nav_der').length){

                    $('.producto_slider_nav_der').on('click',function(){
                         slider1.trigger('prev.owl.carousel');
                    });

                }

                if($('.producto_slider_nav_izq').length){

                    $('.producto_slider_nav_izq').on('click',function(){
                         slider1.trigger('next.owl.carousel');
                    });

                }
            }
        
        }



});