		 /*-----------------------------------------------------------------------------------*/
         /* 	LIST EXPANDER
         /*-----------------------------------------------------------------------------------*/
		(function(global, $){
			$('.gallery-items').imagelistexpander({
				prefix: "gallery-"
			});
		})(this, jQuery)
         /*-----------------------------------------------------------------------------------*/
         /* 	ANIMATION
         /*-----------------------------------------------------------------------------------*/
         var wow = new WOW({
             boxClass:     'animate',      // animated element css class (default is wow)
             animateClass: 'animated', // animation css class (default is animated)
             offset:       100,          // distance to the element when triggering the animation (default is 0)
             mobile:       false        // trigger animations on mobile devices (true is default)
         });
         wow.init();
          /*-----------------------------------------------------------------------------------*/
         /* 	360 VIEW
         /*-----------------------------------------------------------------------------------*/	
         <!--
            rotate([
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/1.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/2.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/3.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/4.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/5.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/6.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/7.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/8.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/9.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/10.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/11.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/12.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/13.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/14.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/15.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/16.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/17.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/18.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/19.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/20.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/21.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/22.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/23.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/24.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/25.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/26.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/27.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/28.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/29.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/30.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/31.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/32.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/33.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/34.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/35.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/36.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/37.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/38.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/39.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/40.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/41.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/42.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/43.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/44.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/45.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/46.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/47.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/48.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/49.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/50.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/51.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/52.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/53.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/54.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/55.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/56.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/57.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/58.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/59.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/60.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/61.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/62.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/63.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/64.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/65.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/66.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/67.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/68.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/69.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/70.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/71.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/72.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/73.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/74.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/75.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/76.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/77.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/78.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/79.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/80.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/81.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/82.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/83.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/84.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/85.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/86.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/87.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/88.jpg",
              "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/89.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/90.jpg",
			  "https://res.cloudinary.com/primefusion/image/fetch/http://premium-templates.org/ecommerce/html5/faraday/demo/v2/assets/view/91.jpg"
            ]);
            -->
          /*-----------------------------------------------------------------------------------*/
         /* 	TABS 
         /*-----------------------------------------------------------------------------------*/
         $(document).ready(function(){
             $(".nav-tabs a").click(function(){
                 $(this).tab('show');
             });
         });
         $(document).ready(function(){
             $(".gallery-item a").click(function(e){
                 $(this).tab('show');
             });
         });
		  /*-----------------------------------------------------------------------------------*/
         /* 	MOBILE MENU
         /*-----------------------------------------------------------------------------------*/
         $(document).ready(function(){
             $(".mobmenu").click(function(){
                 $('.colMenu').toggleClass('open')
             });
         });
		  /*-----------------------------------------------------------------------------------*/
         /* 	SMOOTHMENU
         /*-----------------------------------------------------------------------------------*/
         $(function() {
           $('a[href*="#"]:not([href="#"])').click(function() {
             if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html, body').animate({
                   scrollTop: target.offset().top
                 }, 1000);
                 return false;
               }
             }
           });
         });
		  /*-----------------------------------------------------------------------------------*/
         /* 	RESPONSIVE BLOCKS
         /*-----------------------------------------------------------------------------------*/
		 if ($(window).width() < 960) {
		   $(".mopen").css("height",1700);	
		   $(".bumbleBee-A-Block").css("max-height",1200);
		}
		else {
		  // alert('More than 960');
		}
		 
		 $(function () {
			$('.plus').on('click',function(){
				var $qty=$(this).closest('div').find('.qty');
				var currentVal = parseInt($qty.val());
				if (!isNaN(currentVal)) {
					$qty.val(currentVal + 1);
				}
			});
			$('.minus').on('click',function(){
				var $qty=$(this).closest('div').find('.qty');
				var currentVal = parseInt($qty.val());
				if (!isNaN(currentVal) && currentVal > 0) {
					$qty.val(currentVal - 1);
				}
			});
		});