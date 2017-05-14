jQuery(document).ready(function(){

// compare function
function compareValues(){

    // get values of inputs
    var a = jQuery('#a').val();
    var b = jQuery('#b').val();
    var displayValue;

    // turn inputs into numbers
    // since we are allowing decimals, must use parseFloat to turn input into integer
    a = parseFloat(a);
    b = parseFloat(b);

    // if inputs ARE numbers

        // if a > b, display = ">"
        if(a > b){
            displayValue = ">";
        }else if(b > a){
            // if a < b, display = "<"
            displayValue = "<";
        }else if (b == a){
            // if a = b, display = "=="
            displayValue = "==";
        }else{
            // else, display "N/A" catchall
            displayValue = "yo, what is that";
        }

    // put display to output span
    jQuery('#comparison').text(displayValue);
    };

// submit click
jQuery('#submit').click(compareValues);

});
