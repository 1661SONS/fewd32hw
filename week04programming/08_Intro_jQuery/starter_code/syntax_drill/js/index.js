jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
  	jQuery('#purpleBox').click(purpleParagraphs);
	function purpleParagraphs (){
		jQuery('p').css('color', 'purple');
	}

    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black
    jQuery('#blueBox').click(bruiseBackground);
    function bruiseBackground (){
    	jQuery('p').css('background-color', 'black');
    	jQuery('p').css('color', 'white');
    	jQuery('p.hipsterSpeak').css('background-color', 'blue');
    }

    // When the red box is clicked set the list items toggle red background and white text on and off
    jQuery('#redBox').click(redBackground);
    function redBackground (){
    	jQuery('li').toggleClass('redForm');
    }
    
    // When any of the boxes are clicked, add a 6px solid black bottom border
    jQuery('#purpleBox').click(borderPurple);
    function borderPurple (){
    	jQuery('#purpleBox').css('border-bottom', '6px solid black')
    }
    jQuery('#blueBox').click(borderBlue);
    function borderBlue (){
    	jQuery('#blueBox').css('border-bottom', '6px solid black')
    }
    jQuery('#redBox').click(borderRed);
    function borderRed (){
    	jQuery('#redBox').css('border-bottom', '6px solid black')
    }

});