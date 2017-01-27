$(function () {

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".form").focus(function (){ 
		$(this).next('span.form-help').slideToggle("slow"); 
	}); 

	$(".form-btn").on('click', function (e){
		e.preventDefault();
		$(".form").next('span.form-help').slideToggle("slow");
	}); 

});

