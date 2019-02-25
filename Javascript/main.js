
$('#dropdown-button').on('click', () => {
	
	$('.nav-container').slideToggle("slow");
	
});

$(window).resize(function(){
	var width=$(window).width();
	var isVisible=$('.nav-container').is(':visible');
	if(!isVisible){
		if( (width >=620)){
			$('.nav-container').toggle();
		}
	}
})
//working on getting nav to apear after activating the drop-down menu and deactivating it