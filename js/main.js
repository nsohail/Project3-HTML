$(function() {

	$("#slider1").responsiveSlides({
	    auto: false,
	    pager: true,
	    nav: true,
	    speed: 500,
	    maxwidth: 600,
	    namespace: "centered-btns"
    });
});

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	});



        $(document).ready(function(){

        	$('body').removeAttr("style");

   			// if ($(window).width() <= 770) {
			//    $('body').removeAttr("style");
			// }

        	/*thumbnail student work flip view*/

        	var removeFlip = function(){
        		$(".hover").removeClass("flip");
        	}

        	var addFlip = function(){
        		$(".hover").addClass("flip");
        	}


	        $('.view-option').click(function(e){
	        	e.preventDefault();

	        	if($(".hover").hasClass("flip")){
	        		removeFlip();
	        		$('.view-option-pic').attr("src", "images/view-btn.png");
	        		
	        		if(visibleStudentThumbs >= 8){
	        			$(".load").hide();
	        		}else{
	        			$(".load").fadeIn();
	        		}
	        		setTimeout (function(){
		        		$(".back").css("position","absolute");
		        		$(".front").css("position","relative");
		        	}, 200);

	        	}else{
	        		addFlip();
	        		$('.view-option-pic').attr("src", "images/view-btn-block.png");

	        		setTimeout (function(){
	        			$(".load").hide();
	        			$(".back").css("position","relative");
	        			$(".front").css("position","absolute");
	        		}, 200);	
	        	}
	        });


	        /*load more thumbnails*/

	        size_li = $(".front-student-list li").size();
		    visibleStudentThumbs=5;
		    $('.front-student-list li:lt('+visibleStudentThumbs+')').show(); //show first 5 list items


		    $('.load').click(function (e) {
		    	e.preventDefault();
		        visibleStudentThumbs = (visibleStudentThumbs + 5 <= size_li) ? visibleStudentThumbs + 5 : size_li; //if 5+5 <= the # of li items, add 5 to 5. Otherwise x=the # of li items
		        $('.front-student-list li:lt('+visibleStudentThumbs+')').fadeIn();

		        if(visibleStudentThumbs == size_li){
		        	$('.load').hide();
		        }
		    });




		    /*top navigation transition on scroll*/

			$(window).scroll(function() {
				
			    var scrollYpos = $(document).scrollTop(); //scroll position
			    //console.log(scrollYpos);
			    var ScrollTop = parseInt($(window).scrollTop());
			    
			    if (scrollYpos >= 20) {
			    	//alert(ScrollTop);
			        $("nav").css({
			            'background': 'rgba(255, 255, 255, 0.85)',
			            'height': '30px',
			            'line-height': '40px'
			        })

			        $("nav > a").css({
			        	'color': '#306591'
			        })

			        $(".progress-bar-container").css({
			        	'background': '#ADC9DB',
			        	'top': '16px'
			        })

			        $(".title-site").removeClass('hidden')
			        .animate({
			        	left: "16px"
			        },500);
			        
			        

			    }else {
				    $("nav").css({
				        'background': 'none',
				        'height': '20px',
				        'line-height': '70px'
				    })
				    $("nav > a").css({
				       	'color': 'white'
				    })

				    $(".progress-bar-container").css({
			        	'background': 'white',
			        	'top': '26px'
			        })

			        $(".title-site").addClass('hidden').stop().removeAttr('style');
			        
			    }


			    /*progress bar scrolling*/

			    $(window).scroll(function () {
				    var s = $(window).scrollTop(), //scroll position
				        d = $(document).height(), //bigger than window
				        c = $(window).height();
				    scrollPercent = (s / (d - c)) * 100;
				    var position = scrollPercent * 2.5;

				    $(".progress-bar").css('width', position);
				});


			    

			}); //window scroll function ends



    	}); //end document ready
