$(document).ready(function(){

$('#skillsDisplay').toggle();
$('#referencesDisplay').toggle();
$('#portfolioDisplay').toggle();
$('#workHistoryDisplay').toggle();

var currentDisplay = 'home';

$('#home').click(function(){
	$('#'+currentDisplay+'Display').toggle();
	$('#homeDisplay').toggle();
	currentDisplay = 'home';
});

$('#skills').click(function(){
	$('#'+currentDisplay+'Display').toggle();
	$('#skillsDisplay').toggle();
	currentDisplay = 'skills';
});

$('#references').click(function(){
	$('#'+currentDisplay+'Display').toggle();
	$('#referencesDisplay').toggle();
	currentDisplay = 'references';
});

$('#portfolio').click(function(){
	$('#'+currentDisplay+'Display').toggle();
	$('#portfolioDisplay').toggle();
	currentDisplay = 'portfolio';
});

$('#workHistory').click(function(){
	$('#'+currentDisplay+'Display').toggle();
	$('#workHistoryDisplay').toggle();
	currentDisplay = 'workHistory';
});

$('#click').fadeIn(2500);

$('click').click(function(){

});

//CARDS
$('#next').click(function(){
$('#next').css({'pointer-events' : 'none'});
var current;
var second;
var third;
var maxZ = null;
var midZ = null;
var lowZ = null;
var theZ = null;
	$('.card').each(function(){
		theZ = parseInt($(this).css('z-index'),10);
		if(maxZ === null || maxZ < theZ){
			current = this.id;
			maxZ = theZ;
		}
		if(lowZ === null || lowZ > theZ){
			third = this.id;
			lowZ = theZ;
		}
		if(theZ == 2){
			second = this.id;
		}
	});
		
	$('#'+current).css({'height' : '400px', 'transform' : 'translateX(375px)', 'transition' : 'all 0.25s'});
	$('#'+current).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    function(e) {
	$('#'+current).css({'transform' : 'translateX(0px)', 'z-index' : '1', 'margin-left' : '50px'});
    });
	$('#'+second).css({'height' : '500px', 'margin-left' : '0px', 'z-index' : '3', 'transition' : 'all 0.5s'});
	$('#'+third).css({'height' : '450px', 'margin-left' : '25px', 'z-index' : '2', 'transition' : 'all 0.5s'});

	$(this).removeAttr("disabled")
		setTimeout(function(){
			$('#next').css({'pointer-events' : 'all', "cursor" : "pointer"});
			}, 500)
	
});
// END OF CARDS

$('.otherSite').mouseenter(function(){

});

$('.otherSite').mouseleave(function(){
});

});