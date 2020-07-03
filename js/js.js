
		$('.hits').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    navText: ["", ""],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		})
		$('.caruselReviews').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    navText: [],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		})
		$('.Companylist').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    navText: [],
		    responsive:{
		        0:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		})

		$('.glyphicon-cloud').click(function(){
				$('nav').fadeOut(3000);
				$('nav').fadeIn(3000, function(){
					alert('qwerty');
				});
		});