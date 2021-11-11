$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})


function validateForm() {
	let x = document.forms[".container myForm"]["file"].value;
	if (x == "") {
	  alert("Please upload car image");
	  return false;
	}
  }