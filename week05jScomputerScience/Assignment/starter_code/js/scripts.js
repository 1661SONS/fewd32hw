jQuery(document).ready(function(){
	
	// prevent page from refreshing/jumping on update click
	jQuery('#update_btn').click(function(){
		event.preventDefault();
	
		// create variable for city, ignore extra spaces and user's improper capitalization
		var city = jQuery('#city_type').val();
		jQuery('#city_type').val('');
		city = city.toLowerCase().trim();

		// if user searches for the most wonderful place on earth, change css class to 'atl'
		if(city == 'atlanta' || city == 'atl' || city == 'hotlanta' || city == 'the a' || city == 'where the players play' || city == 'home of the braves'){
	      jQuery('body').attr('class','atl');
	    }
	    // if user searches for San Diego, change css class to 'sd'
	    else if (city == 'san diego' || city == 'sd' || city == 'go diego go'){
	      $('body').attr('class','sd');
	    }
	    // if user searches for Los Angeles, change css class to 'la'
	    else if (city == 'los angeles' || city == 'la' || city == 'kunfu kenny' || city == 'lax' || city == 'hollywood'){
	    	jQuery('body').attr('class','la');
	    }
	    // if user searches for Austin, change css class to 'austin'
	    else if (city == 'austin' || city == 'aus' || city == 'atx'){
	    	jQuery('body').attr('class','austin');
	    }
	    // if user searches for Sydney, change css class to 'sydney'
	    else if (city == 'sydney' || city == 'syd'){
	    	jQuery('body').attr('class','austin');
	    }
	    // if user searches for New York City, change css class to 'nyc'
	    else if (city == 'new york' || city == 'ny' || city == 'nyc' || city == 'jfk' || city == 'lga' || city == 'new york city'){
	    	jQuery('body').attr('class','nyc');
	    }
	    // if user searches for San Francisco, change css class to 'sf'
	    else if (city == 'san francisco' || city == 'sf' || city == 'frisco' || city == 'the bay' || city == 'the bay area' || city == 'bay area' || city == 'san fran' || city == 'oakland'){
	    	jQuery('body').attr('class','sf');
	    }
	    // if user searches for Havana, change css class to 'havana'
	    else if (city == 'havana' || city == 'city of lights' || city == 'cuba' || city == 'viva la revolucion'){
	    	jQuery('body').attr('class','havana');
	    }
	});
});