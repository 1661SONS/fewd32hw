//wait for the DOM elements to load before executing
jQuery(document).ready(function(){

    // Create a function that runs whenever the submit button is clicked
    jQuery('#submit_btn').click(function(e) {
    	//prevent the submit button from refreshing the page
    	e.preventDefault();
    	 //Create a variable called moodvalue and get the value of the #mood input
    	var myMood = jQuery('#mood').val();
    	// reset input after initial submission
    	jQuery('#mood').val('');
    	//Correct for capitalization and user's shitty typing
    	myMood = myMood.toLowerCase().trim();
    	// if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
    	if(myMood == 'excited' || myMood == 'ecstatic' || myMood == 'fantastic') {
    		jQuery('.moodring div').attr('class','excited');
    	 // if the user inputs happy/good/great change the CSS class to 'happy'
    	}else if (myMood == 'happy' || myMood == 'good' || myMood == 'great'){
    		jQuery('.moodring div').attr('class','happy');
    	// if the user inputs bad/angry change the CSS class to 'bad'
    	}else if (myMood == 'bad' || myMood == 'angry'){
    		jQuery('.moodring div').attr('class','bad');
    	}
    	
    });   

});  

    // Listen for user interaction on the submit button.
