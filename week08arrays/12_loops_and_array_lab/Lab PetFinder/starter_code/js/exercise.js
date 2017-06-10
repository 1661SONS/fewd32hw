function selectPet(petType){
    console.log(petType);

    // Get the specific pet data set
    var selectedPet = petData[petType];
    console.log(selectedPet);

    // Set the title
    jQuery(".petDisplayName").text(selectedPet['displayName']);

    // Empty the specification data
    jQuery('.petsDataSpecs').empty();

    // Add the space required, size, weight
    jQuery('.petsDataSpecs').append('<dt>SIZE</dt><dd>'+selectedPet['size']+'</dd>');
    jQuery('.petsDataSpecs').append('<dt>WEIGHT</dt><dd>'+selectedPet['weight']+'</dd>');
    jQuery('.petsDataSpecs').append('<dt>SPACE REQUIRED</dt><dd>'+selectedPet['spaceRequired']+'</dd>');

    // Add logic to add the trainability and lap size images
    if (selectedPet['trainability']==true){
        jQuery('.petsDataSpecs').append("<dt>TRAINABLE</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png'></dd>");
    }else {
        jQuery('.petsDataSpecs').append("<dt>TRAINABLE</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png'></dd>");
    }

    // Add the foods (may require loop)
    var foods = '<dt>FOODS</dt><dd><ul>';
        for (i=0; i < selectedPet['foods'].length; i++) { 
            foods+= '<li>'+selectedPet['foods'][i]+'</li>';
        }
            foods=foods + '</ul></dd>';
                jQuery('.petsDataSpecs').append(foods);
        
    // Update the images
    var images = "";
        for (i=0; i < selectedPet['images'].length; i++) {
            console.log(selectedPet['images'][i]);
            images+= "<img class='photoThumb' src='"+selectedPet['images'][i]['img']+"'>";
        }
            // images=images + ''
            jQuery('.thumbHaus').empty();
                jQuery('.thumbHaus').append(images);

    // Create a variable to hold the thumbnailHTML
    var thumb = "";

    // Loop through the thumbnails and add the html to the variable
    // for (i=0; i < selectedPet['photoThumb'])


    // Empty the Thumbnails Div


    
    // Append to the page

    
    // Empty the ideal for

    
    // Insert the ideal for


    // Empty the Adoption Groups

    
    // Add the adoption groups


}// end selectPet


jQuery(document).ready(function(){

    // Initial run

        // Pick the initial pet

    //Update whenever a new value is picked
    jQuery('#petType').on('change',function(){
        selectPet(jQuery(this).val());
    });

});