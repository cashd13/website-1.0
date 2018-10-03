
$('#dropdown-button').on('click', () => {
	
	$('.dropdown-menu').slideToggle("slow");
	
});

$(window).resize(function() {
	var width=$(window).width();
	if(width >= 620){
		
		var isVisible=$('.dropdown-menu').is(':visible');
		if(isVisible===true){
			$('.dropdown-menu').toggle();
		}
	}
});
