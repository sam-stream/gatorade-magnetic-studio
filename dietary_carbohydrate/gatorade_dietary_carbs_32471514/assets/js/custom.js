/*------------------------------------*\
    Desktop
\*------------------------------------*/
$(function(){
    $('.js-body-mass-kgs-input').keyup(function(){
        let input_value = parseFloat($('.js-body-mass-kgs-input').val()) || 0;
        console.log(input_value);
        
        let kgsLightLower = input_value * 3;
        let kgsLightHigher = input_value * 5;

        let kgsMorderateLower = input_value * 5;
        let kgsMorderateHigher = input_value * 7;

        let kgsEnduranceLower = input_value * 6;
        let kgsEnduranceHigher = input_value * 10;

        let kgsExtremeLower = input_value * 8;
        let kgsExtremeHigher = input_value * 12;
      
        $('.js-body-mass-kgs-light-output').html(kgsLightLower + ' - ' + kgsLightHigher);
        $('.js-body-mass-kgs-moderate-output').html(kgsMorderateLower + ' - ' + kgsMorderateHigher);
        $('.js-body-mass-kgs-endurance-output').html(kgsEnduranceLower + ' - ' + kgsEnduranceHigher);
        $('.js-body-mass-kgs-extreme-output').html(kgsExtremeLower + ' - ' + kgsExtremeHigher);
    });
});

$(function(){
    $('.js-body-mass-lbs-input').keyup(function(){
        let input_value = $('.js-body-mass-lbs-input').val();
        console.log(input_value);

        ozValue = input_value * 16 / 1000;

        console.log(ozValue);
        
        let lbsLightLower = (ozValue * 3).toFixed(2);
        let lbsLightHigher = (ozValue * 5).toFixed(2);

        let lbsMorderateLower = (ozValue * 5).toFixed(2);
        let lbsMorderateHigher = (ozValue * 7).toFixed(2);

        let lbsEnduranceLower = (ozValue * 6).toFixed(2);
        let lbsEnduranceHigher = (ozValue * 10).toFixed(2);

        let lbsExtremeLower = (ozValue * 8).toFixed(2);
        let lbsExtremeHigher = (ozValue * 12).toFixed(2);
      
        $('.js-body-mass-lbs-light-output').html(lbsLightLower + ' - ' + lbsLightHigher);
        $('.js-body-mass-lbs-moderate-output').html(lbsMorderateLower + ' - ' + lbsMorderateHigher);
        $('.js-body-mass-lbs-endurance-output').html(lbsEnduranceLower + ' - ' + lbsEnduranceHigher);
        $('.js-body-mass-lbs-extreme-output').html(lbsExtremeLower + ' - ' + lbsExtremeHigher);
    });
});

/*------------------------------------*\
    Mobile
\*------------------------------------*/
$(function(){
    $('.js-body-mass-kgs-mobile-input').keyup(function(){
        let input_value = parseFloat($('.js-body-mass-kgs-mobile-input').val()) || 0;
        console.log(input_value);
        
        let kgsLightLower = input_value * 3;
        let kgsLightHigher = input_value * 5;

        let kgsMorderateLower = input_value * 5;
        let kgsMorderateHigher = input_value * 7;

        let kgsEnduranceLower = input_value * 6;
        let kgsEnduranceHigher = input_value * 10;

        let kgsExtremeLower = input_value * 8;
        let kgsExtremeHigher = input_value * 12;
      
        $('.js-body-mass-kgs-light-mobile-output').html(kgsLightLower + ' - ' + kgsLightHigher);
        $('.js-body-mass-kgs-moderate-mobile-output').html(kgsMorderateLower + ' - ' + kgsMorderateHigher);
        $('.js-body-mass-kgs-endurance-mobile-output').html(kgsEnduranceLower + ' - ' + kgsEnduranceHigher);
        $('.js-body-mass-kgs-extreme-mobile-output').html(kgsExtremeLower + ' - ' + kgsExtremeHigher);
    });
});

$(function(){
    $('.js-body-mass-lbs-mobile-input').keyup(function(){
        let input_value = $('.js-body-mass-lbs-mobile-input').val();
        console.log(input_value);
        ozValue = input_value * 16 / 1000;

        console.log(ozValue);
        
        let lbsLightLower = (ozValue * 3).toFixed(2);
        let lbsLightHigher = (ozValue * 5).toFixed(2);

        let lbsMorderateLower = (ozValue * 5).toFixed(2);
        let lbsMorderateHigher = (ozValue * 7).toFixed(2);

        let lbsEnduranceLower = (ozValue * 6).toFixed(2);
        let lbsEnduranceHigher = (ozValue * 10).toFixed(2);

        let lbsExtremeLower = (ozValue * 8).toFixed(2);
        let lbsExtremeHigher = (ozValue * 12).toFixed(2);
      
        $('.js-body-mass-lbs-light-mobile-output').html(lbsLightLower + ' - ' + lbsLightHigher);
        $('.js-body-mass-lbs-moderate-mobile-output').html(lbsMorderateLower + ' - ' + lbsMorderateHigher);
        $('.js-body-mass-lbs-endurance-mobile-output').html(lbsEnduranceLower + ' - ' + lbsEnduranceHigher);
        $('.js-body-mass-lbs-extreme-mobile-output').html(lbsExtremeLower + ' - ' + lbsExtremeHigher);
    });
});
