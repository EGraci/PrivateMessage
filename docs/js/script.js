/* ========================================================================= */
/*	Preview Image
/* ========================================================================= */
var Dimage;
    function encodePI() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("Efile").files[0]);
     
        oFReader.onload = function(oFREvent) {
        document.getElementById("Egambar").src = oFREvent.target.result;
        Dimage = oFREvent.target.result;
        };
    }

	function decodePI() {
		document.getElementById("Dpesan").value = "";
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("Dfile").files[0]);
       
        oFReader.onload = function(oFREvent) {
        document.getElementById("Dgambar").src = oFREvent.target.result;
		document.getElementById("Dpesan").value = steg.decode(oFREvent.target.result);

        };
    }
/* ========================================================================= */
/*	Secreat Message & Donwload Image
/* ========================================================================= */
function encode(){
	if(document.getElementById("Epesan").value.length >= 13){
		var data = steg.encode(document.getElementById("Epesan").value, Dimage);
		download(data,"Encode.png");
	}else{
		alert("Pesan minimal 13 digit !!!");
	}
}
function download(uri, name) {
	var link = document.createElement("a");
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}
/* ========================================================================= */
/*	JQUERY
/* ========================================================================= */
(function ($) {
	'use strict';

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$('#navigation').sticky({
		topSpacing: 0
	});


	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});



	//   magnific popup video
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});

})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();


/* ========================================================================= */
/*	Smooth Scroll
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*=\'#\']');
