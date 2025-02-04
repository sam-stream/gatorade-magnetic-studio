/*------------------------------------*\
    Desktop
\*------------------------------------*/

// Pre kgs Calculation (Slide 7)
$(function(){
    $('.pre_kgs_input').keyup(function(){
        var input_value = parseFloat($('.pre_kgs_input').val()) || 0;
      
        $('.pre_kgs_times3').html(Math.round(input_value * 3));

        $('.pre_kgs_times5').html(Math.round(input_value * 5));
      
        $('.pre_kgs_times7').html(Math.round(input_value * 7));

        $(".pre_kgs_reset").on("click", function(event) {
            $('.pre_kgs_input').val('');
            $('.pre_kgs_clear').empty();
        });
      
    });
});

// Pre lbs Calculation (Slide 7)
$(function(){

    pre_lbs_input = '.pre_lbs_input';

    $(pre_lbs_input).keyup(function() {

        var pre_lbs_input_value = parseFloat($(pre_lbs_input).val()) || 0;

        pre_lbs_times5 = pre_lbs_input_value * Number(5) / Number(65.1852);
        pre_lbs_times5_output = '.pre_lbs_times5';
        $(pre_lbs_times5_output).html( pre_lbs_times5.toFixed(1) );

        pre_lbs_times7 = pre_lbs_input_value * Number(7) / Number(65.1852);
        pre_lbs_times7_output = '.pre_lbs_times7';
        $(pre_lbs_times7_output).html( Math.round(pre_lbs_times7) );

        pre_lbs_times3 = pre_lbs_input_value * Number(3) / Number(65.1852);
        pre_lbs_times3_output = '.pre_lbs_times3';
        $(pre_lbs_times3_output).html( Math.round(pre_lbs_times3) );

        $(".pre_lbs_reset").on("click", function(event) {
            $('.pre_lbs_input').val('');
            $('.pre_lbs_clear').empty();
        });
      
    });
});

// During kgs Calculation (Slide 8)
$(function(){

    desktopKgPreExerciseInput = '.during_kgs_pre_mass';
    desktopKgPostExerciseInput = '.during_kgs_post_mass';
    desktopKgFluidEntakeInput = '.during_kgs_fluid_intake';
    desktopOutputKgSweatLoss = '.during_kgs_sweat_loss';

    DesktopDuringKgExerciseTime = '.during_kgs_exercise_time';
    
    DesktopKgOutputExerciseTime = '.during_kgs_exercise_time';
    DesktopKgOutputSweatRateTotal = '.during_kgs_sweat_rate';
    
    $( desktopKgFluidEntakeInput ).on('change', function() {
        let DestkopDuringKgCalculationOne = $(desktopKgPreExerciseInput).val();
        let DesktopDuringKgCalulationTwo = $(desktopKgPostExerciseInput).val();
        let DesktopDuringKgCalulationThree = $(desktopKgFluidEntakeInput).val();
        let DesktopDuringKgOutputOne = Number(DestkopDuringKgCalculationOne) - Number(DesktopDuringKgCalulationTwo) + Number(DesktopDuringKgCalulationThree);
        
        // console.log(DesktopDuringKgOutputOne);

        $(desktopOutputKgSweatLoss).html(DesktopDuringKgOutputOne);				
    });

    $( DesktopDuringKgExerciseTime ).on('change', function() {				
        let CalculateSweatLossInput = $(desktopOutputKgSweatLoss).html();
        let CalculateExerciseTimeInput = $(DesktopDuringKgExerciseTime).val();

        $(DesktopKgOutputExerciseTime).html(CalculateExerciseTimeInput);
        
        kgSweatRateTotal = Number(CalculateSweatLossInput) / Number(CalculateExerciseTimeInput);
        
        console.log('CalculateSweatLossInput:', CalculateSweatLossInput);
        console.log('CalculateExerciseTimeInput:', CalculateExerciseTimeInput);
        console.log('kgSweatRateTotal:', kgSweatRateTotal);

        $(DesktopKgOutputSweatRateTotal).html((kgSweatRateTotal).toFixed(2));
    });

    $(".during_kgs_reset").on("click", function(event) {
        $('.during_kgs_input').val('');
        $('.during_kgs_clear').empty();
    });

});

// During lbs Calculation (Slide 8)
// Note this converts it to Oz's as well
jQuery(function(){

    desktop_during_lbs_pre_mass = '.during_lbs_pre_mass';
    desktop_during_lbs_post_mass = '.during_lbs_post_mass';
    desktop_during_lbs_fluid_intake = '.during_lbs_fluid_intake';
    desktop_during_lbs_sweat_loss_calculation = '.during_lbs_sweat_loss';

    desktop_during_lbs_exercise_time = '.during_lbs_exercise_time';

    desktop_during_lbs_exercise_time_output = '.during_lbs_exercise_time';
    desktop_during_lbs_sweat_rate = '.during_lbs_sweat_rate';
    
    jQuery( desktop_during_lbs_fluid_intake ).on('change', function() {
        let desktop_during_lbs_pre_mass_calculation = $(desktop_during_lbs_pre_mass).val();
        let desktop_during_lbs_post_mass_calculation = $(desktop_during_lbs_post_mass).val();
        let desktop_during_lbs_fluid_intake_calculation = $(desktop_during_lbs_fluid_intake).val();

        let desktop_during_lbs_body_mass_calculation = Number(desktop_during_lbs_pre_mass_calculation) - Number(desktop_during_lbs_post_mass_calculation);

        let desktop_during_lbs_ounces_conversion = Number(desktop_during_lbs_body_mass_calculation) * 16;

        let desktop_during_lbs_sweat_loss = Number(desktop_during_lbs_fluid_intake_calculation) + Number(desktop_during_lbs_ounces_conversion);				
        
        $(desktop_during_lbs_sweat_loss_calculation).html( Math.round(desktop_during_lbs_sweat_loss) );
    });

    jQuery( desktop_during_lbs_exercise_time ).on('change', function() {				
        let DesktopCalculateSweatLossInput = $(desktop_during_lbs_sweat_loss_calculation).html();
        let DesktopCalculateExerciseTimeInput = $(desktop_during_lbs_exercise_time).val();

        $(desktop_during_lbs_exercise_time_output).html( Math.round(DesktopCalculateExerciseTimeInput) );

        during_lbs_sweat_rate_total = Number(DesktopCalculateSweatLossInput) / Number(DesktopCalculateExerciseTimeInput);

        $(desktop_during_lbs_sweat_rate).html( Math.round(during_lbs_sweat_rate_total) );
    });

    $(".during_lbs_reset").on("click", function(event) {
        $('.during_lbs_input').val('');
        $('.during_lbs_clear').empty();
    });

});

// Post kgs Calculation (Slide 9)
jQuery(function(){
    desktopKgPreExerciseMassInput = '.desktop-kg-pre-body-mass-input';
    desktopKgPostExerciseMassInput = '.desktop-kg-post-body-mass-input';
    desktopOutputKgMassLoss = '.desktop-output-kg-body-mass-loss';

    desktopOutputL120 = '.desktop-output-l-120';
    desktopOutputL150 = '.desktop-output-l-150';
    
    jQuery( desktopKgPostExerciseMassInput ).on('change', function() {
        let DesktopKgCalulationOne = $(desktopKgPreExerciseMassInput).val();
        let DesktopKgCalulationTwo = $(desktopKgPostExerciseMassInput).val();
        let DesktopKgMassOutputOne = Number(DesktopKgCalulationOne) - Number(DesktopKgCalulationTwo);
        
        $(desktopOutputKgMassLoss).html(DesktopKgMassOutputOne);
        
        let replacement120 = Number(DesktopKgMassOutputOne) * 1.2;
        let replacement150 = Number(DesktopKgMassOutputOne) * 1.5;

        $(desktopOutputL120).html( Math.round(replacement120) );
        $(desktopOutputL150).html( Math.round(replacement150) );
    });

    $(".post_kgs_reset").on("click", function(event) {
        $('.post_kgs_input').val('');
        $('.post_kgs_clear').empty();
    });

});

// Post lbs Calculation (Slide 9)
jQuery(function(){
    post_lbs_pre_mass = '.desktop-lb-pre-body-mass-input';
    post_lbs_post_mass = '.desktop-lb-post-body-mass-input';
    post_lbs_body_mass_loss = '.desktop-output-lb-body-mass-loss';

    post_lbs_120_replacement = '.desktop-output-oz-120';
    post_lbs_150_replacement = '.desktop-output-oz-150';
    
    jQuery( post_lbs_post_mass ).on('change', function() {
        let post_lbs_pre_mass_calculation = $(post_lbs_pre_mass).val();
        let post_lbs_post_mass_calculation = $(post_lbs_post_mass).val();
        let post_lbs_body_mass_loss_total = Number(post_lbs_pre_mass_calculation) - Number(post_lbs_post_mass_calculation);
        
        $(post_lbs_body_mass_loss).html(post_lbs_body_mass_loss_total);

        let post_lbs_120_replacement_calculation = Number(post_lbs_body_mass_loss_total) * 1.2;
        let post_lbs_120_oz_conversion = Number(post_lbs_120_replacement_calculation) * 16;

        let post_lbs_150_replacement_calculation = Number(post_lbs_body_mass_loss_total) * 1.5;
        let post_lbs_150_oz_conversion = Number(post_lbs_150_replacement_calculation) * 16;

        $(post_lbs_120_replacement).html( Math.round(post_lbs_120_oz_conversion) );
        $(post_lbs_150_replacement).html( Math.round(post_lbs_150_oz_conversion) );
    });

    $(".post_lbs_reset").on("click", function(event) {
        $('.post_lbs_input').val('');
        $('.post_lbs_clear').empty();
    });
});

/*------------------------------------*\
    Mobile
\*------------------------------------*/

// Pre kgs Calculation (Slide 7)
$(function(){
    $('.js-kgs-body-mass-input').keyup(function(){
        var input_value = parseFloat($('.js-kgs-body-mass-input').val()) || 0;

        console.log(input_value);
      
        $('.js-kgs-body-mass-four-from').html(Math.round(input_value * 5));

        $('.js-kgs-body-mass-four-to').html(Math.round(input_value * 7));
      
        $('.js-kgs-body-mass-two-from').html(Math.round(input_value * 3));
        
        $('.js-kgs-body-mass-two-to').html(Math.round(input_value * 5));

        $(".js-button-reset").on("click", function(event) {
            $('.js-kgs-body-mass-input').val('');
            $('.js-clear').empty();
        });
      
    });
});

// Mobile - Pre lbs Calculation (Slide 7)
$(function(){

    mobileLbsInput = '.js-mobile-lbs-input';

    $(mobileLbsInput).keyup(function() {

        var mobilePreLbsInputValue = parseFloat($(mobileLbsInput).val()) || 0;

        mobilePreLbsFive = mobilePreLbsInputValue * Number(5) / Number(65.1852);
        mobilePreLbsFiveOutput = '.js-mobile-lbs-pre-five';
        $(mobilePreLbsFiveOutput).html( mobilePreLbsFive.toFixed(1) );

        mobilePreLbsSeven = mobilePreLbsInputValue * Number(7) / Number(65.1852);
        mobilePreLbsSevenOutput = '.js-mobile-lbs-pre-seven';
        $(mobilePreLbsSevenOutput).html( Math.round(mobilePreLbsSeven) );

        mobilePreLbsThree = mobilePreLbsInputValue * Number(3) / Number(65.1852);
        mobilePreLbsThreeOutput = '.js-mobile-lbs-pre-three';
        $(mobilePreLbsThreeOutput).html( Math.round(mobilePreLbsThree) );

        $(".js-mobile-pre-reset").on("click", function(event) {
            $('.pre_lbs_input').val('');
            $('.pre_lbs_clear').empty();
        });
      
    });
});

// Mobile - During kgs Calculation (Slide 8)
$(function(){

    mobileKgPreExerciseInput = '.js_mobile_during_kgs_pre_mass';
    mobileKgPostExerciseInput = '.js_mobile_during_kgs_post_mass';
    mobileKgFluidEntakeInput = '.js_mobile_during_kgs_fluid_intake';
    mobileOutputKgSweatLoss = '.js_mobile_during_kgs_sweat_loss';

    during_kgs_exercise_time = '.js_mobile_during_kgs_exercise_time';
    
    kgOutputExerciseTime = '.js_mobile_during_kgs_exercise_time';
    kgOutputSweatRateTotal = '.js_mobile_during_kgs_sweat_rate';
    
    $( mobileKgFluidEntakeInput ).on('change', function() {
        let mobileKgCalulationOne = $(mobileKgPreExerciseInput).val();
        let mobileKgCalulationTwo = $(mobileKgPostExerciseInput).val();
        let mobileKgCalulationThree = $(mobileKgFluidEntakeInput).val();
        let mobileKgOutputOne = Number(mobileKgCalulationOne) - Number(mobileKgCalulationTwo) + Number(mobileKgCalulationThree);
        
        $(mobileOutputKgSweatLoss).html(mobileKgOutputOne);				
    });

    $( during_kgs_exercise_time ).on('change', function() {				
        let CalculateSweatLossInput = $(mobileOutputKgSweatLoss).html();
        let CalculateExerciseTimeInput = $(during_kgs_exercise_time).val();

        $(kgOutputExerciseTime).html(CalculateExerciseTimeInput);

        kgSweatRateTotal = Number(CalculateSweatLossInput) / Number(CalculateExerciseTimeInput);

        $(kgOutputSweatRateTotal).html((kgSweatRateTotal).toFixed(2));
    });

    $(".js_mobile_during_kgs_reset").on("click", function(event) {
        $('.js_mobile_during_kgs_input').val('');
        $('.js_mobile_during_kgs_clear').empty();
    });

});

// Mobile - During lbs Calculation (Slide 8)
// Note this converts it to Oz's as well
jQuery(function(){

    during_lbs_pre_mass = '.js_mobile_during_lbs_pre_mass';
    during_lbs_post_mass = '.js_mobile_during_lbs_post_mass';
    during_lbs_fluid_intake = '.js_mobile_during_lbs_fluid_intake';
    during_lbs_sweat_loss_calculation = '.js_mobile_during_lbs_sweat_loss';

    console.log(during_lbs_sweat_loss_calculation);

    during_lbs_exercise_time = '.js_mobile_during_lbs_exercise_time';

    during_lbs_exercise_time_output = '.js_mobile_during_lbs_exercise_time';
    during_lbs_sweat_rate = '.js_mobile_during_lbs_sweat_rate';
    
    jQuery( during_lbs_fluid_intake ).on('change', function() {
        let during_lbs_pre_mass_calculation = $(during_lbs_pre_mass).val();
        let during_lbs_post_mass_calculation = $(during_lbs_post_mass).val();
        let during_lbs_fluid_intake_calculation = $(during_lbs_fluid_intake).val();

        let during_lbs_body_mass_calculation = Number(during_lbs_pre_mass_calculation) - Number(during_lbs_post_mass_calculation);

        let during_lbs_ounces_conversion = Number(during_lbs_body_mass_calculation) * 16;

        let during_lbs_sweat_loss = Number(during_lbs_fluid_intake_calculation) + Number(during_lbs_ounces_conversion);				
        
        console.log(during_lbs_sweat_loss);

        $(during_lbs_sweat_loss_calculation).html( Math.round(during_lbs_sweat_loss) );
    });

    jQuery( during_lbs_exercise_time ).on('change', function() {				
        let CalculateSweatLossInput = $(during_lbs_sweat_loss_calculation).html();
        let CalculateExerciseTimeInput = $(during_lbs_exercise_time).val();

        $(during_lbs_exercise_time_output).html( Math.round(CalculateExerciseTimeInput) );

        during_lbs_sweat_rate_total = Number(CalculateSweatLossInput) / Number(CalculateExerciseTimeInput);

        $(during_lbs_sweat_rate).html( Math.round(during_lbs_sweat_rate_total) );
    });

    $(".js_mobile_during_lbs_reset").on("click", function(event) {
        $('.js_mobile_during_lbs_input').val('');
        $('.js_mobile_during_lbs_clear').empty();
    });

});

// Mobile - Post kgs Calculation (Slide 9)
jQuery(function(){
    mobileKgPreExerciseMassInput = '.mobile-kg-pre-body-mass-input';
    mobileKgPostExerciseMassInput = '.mobile-kg-post-body-mass-input';
    mobileOutputKgMassLoss = '.mobile-output-kg-body-mass-loss';

    mobileOutputL120 = '.mobile-output-l-120';
    mobileOutputL150 = '.mobile-output-l-150';
    
    jQuery( mobileKgPostExerciseMassInput ).on('change', function() {
        let mobileKgCalulationOne = $(mobileKgPreExerciseMassInput).val();
        let mobileKgCalulationTwo = $(mobileKgPostExerciseMassInput).val();
        let mobileKgMassOutputOne = Number(mobileKgCalulationOne) - Number(mobileKgCalulationTwo);
        
        $(mobileOutputKgMassLoss).html(mobileKgMassOutputOne);
        
        let mobileReplacement120 = Number(mobileKgMassOutputOne) * 1.2;
        let mobileReplacement150 = Number(mobileKgMassOutputOne) * 1.5;

        $(mobileOutputL120).html( Math.round(mobileReplacement120) );
        $(mobileOutputL150).html( Math.round(mobileReplacement150) );
    });

    $(".js_mobile_post_kgs_reset").on("click", function(event) {
        $('.js_mobile_post_kgs_input').val('');
        $('.js_mobile_post_kgs_clear').empty();
    });

});

// Mobile - Post lbs Calculation (Slide 9)
jQuery(function(){
    mobile_post_lbs_pre_mass = '.mobile-lb-pre-body-mass-input';
    mobile_post_lbs_post_mass = '.mobile-lb-post-body-mass-input';
    mobile_post_lbs_body_mass_loss = '.mobile-output-lb-body-mass-loss';

    mobile_post_lbs_120_replacement = '.mobile-output-oz-120';
    mobile_post_lbs_150_replacement = '.mobile-output-oz-150';
    
    jQuery( mobile_post_lbs_post_mass ).on('change', function() {
        let mobile_post_lbs_150_replacementpost_lbs_pre_mass_calculation = $(mobile_post_lbs_pre_mass).val();
        let mobile_post_lbs_post_mass_calculation = $(mobile_post_lbs_post_mass).val();
        let mobile_post_lbs_body_mass_loss_total = Number(mobile_post_lbs_150_replacementpost_lbs_pre_mass_calculation) - Number(mobile_post_lbs_post_mass_calculation);
        
        $(mobile_post_lbs_body_mass_loss).html(mobile_post_lbs_body_mass_loss_total);

        let mobile_post_lbs_120_replacement_calculation = Number(mobile_post_lbs_body_mass_loss_total) * 1.2;
        let mobile_post_lbs_120_oz_conversion = Number(mobile_post_lbs_120_replacement_calculation) * 16;

        let mobile_post_lbs_150_replacement_calculation = Number(mobile_post_lbs_body_mass_loss_total) * 1.5;
        let mobile_post_lbs_150_oz_conversion = Number(mobile_post_lbs_150_replacement_calculation) * 16;

        $(mobile_post_lbs_120_replacement).html( Math.round(mobile_post_lbs_120_oz_conversion) );
        $(mobile_post_lbs_150_replacement).html( Math.round(mobile_post_lbs_150_oz_conversion) );
    });

    $(".js_mobile_post_lbs_reset").on("click", function(event) {
        $('.js_mobile_post_lbs_input').val('');
        $('.js_mobile_post_lbs_clear').empty();
    });
});
