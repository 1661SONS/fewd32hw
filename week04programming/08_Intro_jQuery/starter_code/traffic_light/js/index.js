//Implement the red light using jQuery. Don't forget to add the script tags.
jQuery('.button').click(lightsOff);
function lightsOff (){
	jQuery('.bulb').css('background-color' ,'black');
}

jQuery('#stopButton').click(redLight);
function redLight (){
	jQuery('#stopLight').css('background-color', 'red');
}

jQuery('#slowButton').click(yellowLight);
function yellowLight (){
	jQuery('#slowLight').css('background-color', 'yellow');
}

jQuery('#goButton').click(greenLight);
function greenLight (){
	jQuery('#goLight').css('background-color', 'green');
}


