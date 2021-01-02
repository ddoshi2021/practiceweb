function clickButton() {
    $(".hide").toggle();
    $(".show").toggle();
	
}

$(document).ready(function(){
    $(".show").hide();
    $(".hide, .show").on("click", clickButton);
		
	$("#header").click(function(){
    $("h1").slideUp("slow");
  })
  
	$("h2").click(function(){
    $("h1").slideDown("fast");
  })
});