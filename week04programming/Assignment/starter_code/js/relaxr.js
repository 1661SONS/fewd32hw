jQuery(document).ready(function () {

    jQuery('.readmore').click(show_text);
    function show_text (){
           jQuery('#show-this-on-click').slideToggle();
           jQuery('.readmore').hide();
           jQuery('.readless').show();
    }

    jQuery('.readless').click(hide_text);
    function hide_text (){
           jQuery('#show-this-on-click').slideToggle();
           jQuery('.readless').hide();
           jQuery('.readmore').show();
    }

    jQuery('.learnmore').click(learn_more);
    function learn_more (){
           jQuery('#learnmoretext').slideDown();
           jQuery('.learnmore').hide();
    }

    jQuery('.no_jump').click(function (e) {
        e.preventDefault();
    });
    
});
