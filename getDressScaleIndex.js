/**
 * Returns the dress index as a decimal value
 */
function getDressScaleIndex(dressConfigs) {

    var shorts = dressConfigs.shorts || false;
    var tshirt = dressConfigs.tshirt || false;
    var polo = dressConfigs.polo || false;
    var untuckedDressShirt = dressConfigs.untuckedDressShirt || false;
    var tuckedDressShirt = dressConfigs.tuckedDressShirt || false;
    var dressShoes = dressConfigs.dressShoes || false;
    var jeans = dressConfigs.jeans || false;
    var slacks = dressConfigs.slacks || false;
    var tie = dressConfigs.tie || false;
    var separateJacket = dressConfigs.separateJacket || false;
    var suitPantsAndJacket = dressConfigs.suitPantsAndJacket || false;
    var dapperSwank = dressConfigs.dapperSwank || false;

    var result = {
        index: null
        , error: null
    };

    //First check for illogical combos
    if(  ((untuckedDressShirt)? 1: 0) +  ((tuckedDressShirt)? 1: 0) +  ((polo)? 1: 0) +  ((tshirt)? 1: 0)   >1 ) result.error = 'Select one shirt, dude.';
    if(  ((untuckedDressShirt)? 1: 0) +  ((tuckedDressShirt)? 1: 0) +  ((polo)? 1: 0) +  ((tshirt)? 1: 0)   ==0  ) result.error = 'Select at least one shirt, dude.';
    else if(  ((slacks)? 1: 0) +  ((jeans)? 1: 0) +  ((shorts)? 1: 0) +  ((suitPantsAndJacket)? 1: 0)  >1 ) result.error = 'Dude, one pair of pants is enough.';
    else if(  ((suitPantsAndJacket)? 1: 0) +  ((separateJacket)? 1: 0)  >1 ) result.error = 'You do not need a second jacket with your suit.';
    else if(  tie && !tuckedDressShirt ) result.error = 'Wear a tucked shirt with a tie you dork.';
    if(result.error) return result;

    if(shorts) result.index = -1;
    else if ((separateJacket || suitPantsAndJacket) && dapperSwank  && tuckedDressShirt ) result.index = 5.1;
    else if (suitPantsAndJacket && tie && tuckedDressShirt && dressShoes) result.index = 5.0;
    else if (separateJacket && tie && tuckedDressShirt  && dressShoes) result.index = 4.5;
    else if (tuckedDressShirt && tie  && dressShoes) result.index = 4.1;
    else if ((separateJacket || suitPantsAndJacket) && tuckedDressShirt  && dressShoes) result.index = 4.0;
    else if ((separateJacket || suitPantsAndJacket)) result.index = 3.9;
    else if (tuckedDressShirt && slacks ) result.index = 3.0;
    else if (tuckedDressShirt && jeans ) result.index = 2.8;
    else if (untuckedDressShirt && dressShoes ) result.index = 2.5;
    else if (untuckedDressShirt ) result.index = 2.0;
    else if (polo) result.index = 1.0;
    else if (tshirt) result.index = 0.0;


    if(result.index == null) result.error = 'Hmmmm. You are missing something here.';
    return result;
}
