(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		setHeaderHeight();
		$(".preloader").fadeOut(600);
	});
	
	/* Sticky Header */
	$window.on('resize', function(){
		setHeaderHeight();
	});

	function setHeaderHeight(){
		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
	}	
	
	$(window).on("scroll", function() {
		var fromTop = $(window).scrollTop();
		setHeaderHeight();
		var headerHeight = $('header .header-sticky').outerHeight()
		$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
		$("header .header-sticky").toggleClass("active", (fromTop > 600));
	});

	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});
	
	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Hero Slider Layout 1 JS */
	const hero_slider_layout1 = new Swiper('.hero-slider-layout1 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 6000,
		},
		navigation: {
			nextEl: '.hero-button-next',
			prevEl: '.hero-button-prev',
		},
	});


	/* Price Carousel Left JS */
	const price_carousel_left = new Swiper('.price-carousel.price-carousel-left .swiper', {
		slidesPerView: 1.5,
		centeredSlides: true,
		spaceBetween: 30,		
		speed: 2500,
		loop: true,
		autoplay: {
			delay: 0,
		},
		allowTouchMove: false,
  		disableOnInteraction: true,
		breakpoints: {
			768: {
			  slidesPerView: 3,
			},
			991: {
			  slidesPerView: 4,
			},
			1024: {
				slidesPerView: 5,
			},
			1440: {
				slidesPerView: 6,
			}
		}
	});

	/* Price Carousel Right JS */
	const price_carousel_right = new Swiper('.price-carousel.price-carousel-right .swiper', {
		slidesPerView: 1.5,
		centeredSlides: true,
		speed: 2500,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 0,
			reverseDirection: true,
		},
		allowTouchMove: false,
  		disableOnInteraction: true,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 4,
			},
			1024: {
			  	slidesPerView: 5,
			},
			1440: {
			  	slidesPerView: 6,
			}
		}
	});

	/* Testimonial Carousel JS */
	const testimonial_carousel = new Swiper('.testimonial-carousel .swiper', {
		slidesPerView : 1,
		speed: 2500,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 0,
		},
		allowTouchMove: false,
  		disableOnInteraction: true,
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 4,
			}
		}
	});

	/* Popup Video */
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	/* Animated skills Bars */
	$('.our-skills').waypoint(function() {
		$('.skillbar').each(function() {
			$(this).find('.count-bar').animate({
			  width:$(this).attr('data-percent')
			},2000);
		});
	},{
		offset: '50%'
	});

	/* Init Counter */
	$('.counter').counterUp({ delay: 5, time: 2000 });

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime').length) {

		let	 staggerAmount 		= 0.05,
			 translateXValue	= 20,
			 delayValue 		= 0.5,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime');
		
		animatedTextElements.forEach((element) => {
			let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});
	}

	/* Parallaxie js */
	/* var $parallaxie = $('.parallaxie');
	if($parallaxie.length)
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	} */

	/* About Carousel JS */
	const about_carousel = new Swiper('.about-carousel .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.about-button-next',
			prevEl: '.about-button-prev',
		},
	});

	/* Contact form validation */
	$(document).ready(function() {
    var $contactform = $("#contactForm");
    if ($contactform.length) {
        $contactform.validator({ focus: false }).on("submit", function(event) {
            if (!event.isDefaultPrevented()) {
                event.preventDefault();
                submitForm();
            }
        });

        function submitForm() {
            /* Initiate Variables With Form Content */
            var name = $("#name").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var subject = $("#subject").val();
            var message = $("#msg").val();

            // Validate form inputs
            if (name === "" || email === "" || message === "") {
                submitMSG(false, "Please fill in all required fields.");
                return;
            }

            $.ajax({
                type: "POST",
                url: "form-process.php",
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    subject: subject,
                    message: message
                },
                success: function(response) {
                    if (response.trim() === "success") {
                        formSuccess();
                    } else {
                        submitMSG(false, response);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    submitMSG(false, "An error occurred: " + textStatus);
                }
            });
        }

        function formSuccess() {
            $contactform[0].reset();
            submitMSG(true, "Message Sent Successfully!");
        }

        function submitMSG(valid, msg) {
            var msgClasses = valid ? "h3 text-success" : "h3 text-danger";
            $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
        }
    }
});

	/* Contact form validation end */


	/* BitconiAX form validation */
	var $solarform=$("#solarForm");

	if($solarform.length){
		$solarform.validator({focus: false}).on("submit", function (event) {
			if (!event.isDefaultPrevented()) {
				event.preventDefault();
				solarsubmitForm();
			}
		});

		function solarsubmitForm(){
			/* Initiate Variables With Form Content*/
			var name = $("#name").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var bill = $("#bill").val();
			var capacity = $("#capacity").val();

			$.ajax({
				type: "POST",
				url: "solar-form-process.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&bill=" + bill + "&capacity=" + capacity,
				success : function(text){
					if (text == "success"){
						solarformSuccess();
					} else {
						solarsubmitMSG(false,text);
					}
				}
			});
		}

		function solarformSuccess(){
			$solarform[0].reset();
			solarsubmitMSG(true, "Message Sent Successfully!")
		}

		function solarsubmitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-success";
			} else {
				var msgClasses = "h3 text-danger";
			}
			$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
	}
	/* Solar form validation end */

	/* Animated Wow Js */	
	new WOW().init();
})(jQuery);



    async function getUserLocation() {
        try {
            // Fetch user IP location
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user location:', error);
            return null;
        }
    }

    function generateUniqueTransactionId() {
        return 'TID-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    function generateUniqueName() {
        const names = [

          'Aiden Adams', 'Isabella Baker', 'Lucas Bell', 'Mia Bennett', 'Noah Brooks', 'Emma Brown', 'Liam Campbell', 'Olivia Carter', 'Ethan Clark', 'Ava Coleman', 'Mason Collins', 'Sophia Cook', 'James Cooper', 'Amelia Davis', 'Benjamin Diaz', 'Harper Edwards', 'Jacob Evans', 'Charlotte Foster', 'Michael Garcia', 'Evelyn Green', 'Alexander Harris', 'Abigail Hill', 'William Hughes', 'Ella Jackson', 'Owen Johnson', 'Scarlett Jones', 'Daniel Kelly', 'Grace King', 'Matthew Lewis', 'Chloe Martin', 'Zachary Wright', 'Ella Kim', 'Mia Lee', 'Jacob Young', 'Lily Lewis', 'Jackson Moore', 'Avery Nelson', 'Logan Parker', 'Harper Ramirez', 'Ethan Reed', 'Madison Rivera', 'Ryan Roberts', 'Zoe Robinson', 'Elijah Ross', 'Aria Sanchez', 'Dylan Scott', 'Nora Smith', 'Jameson Taylor', 'Lila Thomas', 'Benjamin Thompson', 'Sophie Turner', 'Mason Walker', 'Ella White', 'Jaxon Williams', 'Stella Wilson', 'Hudson Wood', 'Mia Wright', 'Tyler Adams', 'Addison Anderson', 'Leo Baker', 'Penelope Bell', 'Henry Bennett', 'Samantha Brown', 'Eli Campbell', 'Lila Carter', 'Aiden Clark', 'Lucy Coleman', 'Jack Collins', 'Isla Cook', 'Samuel Davis', 'Hazel Diaz', 'James Edwards', 'Aurora Evans', 'Liam Foster', 'Nina Garcia', 'Isaac Green', 'Ruby Harris', 'Mateo Hill', 'Caroline Hughes', 'Davis Jackson', 'Ivy Johnson', 'Levi Jones', 'Cora Kelly', 'Sebastian King', 'Eleanor Lewis', 'Julian Martin', 'Vivian Mitchell', 'Owen Moore', 'Luna Nelson', 'Ezra Parker', 'Maya Ramirez', 'Lucas Reed', 'Layla Rivera', 'Nolan Roberts', 'Lily Robinson', 'Gage Ross', 'Hannah Sanchez', 'Derek Scott', 'Zara Smith', 'Mason Taylor',

            // Add more names here up to 500+
        ];
        return names[Math.floor(Math.random() * names.length)];
    }

    function getRandomTimeAgo() {
        const now = new Date();
        const hours = Math.floor(Math.random() * 24); // Random hours
        const days = Math.floor(Math.random() * 3); // Random days
        const pastDate = new Date(now.getTime() - ((hours * 60 * 60 * 1000) + (days * 24 * 60 * 60 * 1000)));
        const timeDiff = now - pastDate;
        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursAgo = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (daysAgo > 0) {
            return `${daysAgo} days ago`;
        } else {
            return `${hoursAgo} hours ago`;
        }
    }

    async function updateSocialProof() {
        const location = await getUserLocation();

        if (location) {
            const transactionId = generateUniqueTransactionId();
            const amount = (Math.random() * 1000).toFixed(2); // Random amount between 0 and 1000
            const country = location.country_name;
            const name = generateUniqueName();
            const timeAgo = getRandomTimeAgo();

            // Update the social proof box
            const message = `${name}  just ${Math.random() > 0.5 ? 'invested' : 'withdrew'} $${amount} (Transaction ID: ${transactionId}) ${timeAgo}`;
            
            // Show the social proof box
            const socialProofBox = document.getElementById('social-proof');
            const socialProofMessage = document.getElementById('social-proof-message');
            socialProofMessage.textContent = message;
            socialProofBox.style.display = 'block';
            
            // Hide the social proof box after 3 seconds
            setTimeout(() => {
                socialProofBox.style.display = 'none';
            }, 5000);
        }
    }

    function startSocialProofUpdates() {
        updateSocialProof();
        // Wait 15 seconds before updating again
        setInterval(() => {
            updateSocialProof();
        }, 18000); // 18000 milliseconds = 18 seconds
    }

    // Start the social proof updates
    startSocialProofUpdates();	
	
	
	document.addEventListener('DOMContentLoaded', function() {
    const cryptocurrencyDropdown = document.getElementById('cryptocurrency_dropdown');
    const moneycurrencyDropdown = document.getElementById('moneycurrency_dropdown');
    const cryptocurrencyAmountInput = document.getElementById('cryptocurrency_amount');
    const convertedPriceInput = document.getElementById('converted_price');
    const calculateButton = document.getElementById('calculate_button');

    const apiBaseUrl = 'https://api.coingecko.com/api/v3';

    const getCryptoPrice = async (cryptoId) => {
        try {
            const response = await fetch(`${apiBaseUrl}/simple/price?ids=${cryptoId}&vs_currencies=usd`);
            const data = await response.json();
            return data[cryptoId].usd;
        } catch (error) {
           // console.error('Error fetching cryptocurrency price:', error);
            return null;
        }
    };

    const getConversionRate = async (currency) => {
        try {
            const response = await fetch(`${apiBaseUrl}/simple/price?ids=usd&vs_currencies=${currency}`);
            const data = await response.json();
            return data.usd[currency];
        } catch (error) {
        //    console.error('Error fetching conversion rate:', error);
            return null;
        }
    };

    const calculatePrice = async () => {
        const cryptoId = cryptocurrencyDropdown.value;
        const amount = parseFloat(cryptocurrencyAmountInput.value);
        const moneyCurrency = moneycurrencyDropdown.value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const cryptoPriceInUSD = await getCryptoPrice(cryptoId);
        if (!cryptoPriceInUSD) {
            alert('Unable to fetch cryptocurrency price.');
            return;
        }

        const conversionRate = await getConversionRate(moneyCurrency);
        if (!conversionRate) {
            alert('Unable to fetch conversion rate.');
            return;
        }

        const priceInCurrency = (amount * cryptoPriceInUSD) * conversionRate;
        convertedPriceInput.value = priceInCurrency.toFixed(2);
    };

    calculateButton.addEventListener('click', calculatePrice);

    // Initial load
    calculatePrice();
});



// disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// disable text selection
document.addEventListener('selectstart', event => event.preventDefault());

// disable copying
document.addEventListener('copy', event => {
  event.clipboardData.setData('text/plain', 'Copying is not allowed.');
  event.preventDefault();
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "u") {
        event.preventDefault();
        alert("View Source is disabled");
    }
});
