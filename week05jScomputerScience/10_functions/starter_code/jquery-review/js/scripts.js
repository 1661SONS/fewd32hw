jQuery(document).ready(function(){
    jQuery('.box').css('background-color','goldenrod');
    jQuery('.box').text('this here is some text');

    // function bigger_topBox() {
    //     jQuery('#topBox').css('height','500px');
    // };
    // function bigger_bottomBox() {
    //     jQuery('#bottomBox').css('height','500px');
    // };
    //
    // jQuery('#topBox').click(bigger_topBox);
    // jQuery('#bottomBox').click(bigger_bottomBox);

    function bigger() {
        jQuery(this).css('height','500px');
    }
    jQuery('.box').click(bigger);

});
