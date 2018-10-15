
$('#dropdown-button').on('click', () => {
	
	$('.dropdown-menu-custom').slideToggle("slow");
	
});

$(window).resize(function() {
	var width=$(window).width();
	if(width >= 620){
		
		var isVisible=$('.dropdown-menu-custom').is(':visible');
		if(isVisible===true){
			$('.dropdown-menu-custom').toggle();
		}
	}
});
