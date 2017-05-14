// create variable and set initial value
var theScore = 0;

// functions
    // add 5
    function add5(){
        theScore = 5 + theScore;
        jQuery('#result').text(theScore);
    }
    // add 10
    function add10(){
        theScore = 10 + theScore;
        jQuery('#result').text(theScore);
    }
    // minus 1
    function minus1(){
        theScore = theScore - 1;
        jQuery('#result').text(theScore);
    }
    // set zero
    function setZero(){
        theScore = 0;
        jQuery('#result').text(theScore);
    }

// actions

    // click add 5
    jQuery('#add5').click(add5);

    // click add 10
    jQuery('#add10').click(add10);

    // click minus 1
    jQuery('#sub1').click(minus1);

    // click set 0
    jQuery('#zero').click(setZero);
