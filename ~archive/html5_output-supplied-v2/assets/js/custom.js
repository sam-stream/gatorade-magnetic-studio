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
        $(pre_lbs_times7_output).html( Math.ceil(pre_lbs_times7) );

        pre_lbs_times3 = pre_lbs_input_value * Number(3) / Number(65.1852);
        pre_lbs_times3_output = '.pre_lbs_times3';
        $(pre_lbs_times3_output).html( Math.ceil(pre_lbs_times3) );

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

    during_kgs_exercise_time = '.during_kgs_exercise_time';
    
    kgOutputExerciseTime = '.during_kgs_exercise_time';
    kgOutputSweatRateTotal = '.during_kgs_sweat_rate';
    
    $( desktopKgFluidEntakeInput ).on('change', function() {
        let DesktopKgCalulationOne = $(desktopKgPreExerciseInput).val();
        let DesktopKgCalulationTwo = $(desktopKgPostExerciseInput).val();
        let DesktopKgCalulationThree = $(desktopKgFluidEntakeInput).val();
        let DesktopKgOutputOne = Number(DesktopKgCalulationOne) - Number(DesktopKgCalulationTwo) + Number(DesktopKgCalulationThree);
        
        $(desktopOutputKgSweatLoss).html(DesktopKgOutputOne);				
    });

    $( during_kgs_exercise_time ).on('change', function() {				
        let CalculateSweatLossInput = $(desktopOutputKgSweatLoss).html();
        let CalculateExerciseTimeInput = $(during_kgs_exercise_time).val();

        $(kgOutputExerciseTime).html(CalculateExerciseTimeInput);

        kgSweatRateTotal = Number(CalculateSweatLossInput) / Number(CalculateExerciseTimeInput);

        $(kgOutputSweatRateTotal).html((kgSweatRateTotal).toFixed(2));
    });

    $(".during_kgs_reset").on("click", function(event) {
        $('.during_kgs_input').val('');
        $('.during_kgs_clear').empty();
    });

});

// During lbs Calculation (Slide 8)
// Note this converts it to Oz's as well
jQuery(function(){

    during_lbs_pre_mass = '.during_lbs_pre_mass';
    during_lbs_post_mass = '.during_lbs_post_mass';
    during_lbs_fluid_intake = '.during_lbs_fluid_intake';
    during_lbs_sweat_loss_calculation = '.during_lbs_sweat_loss';

    during_lbs_exercise_time = '.during_lbs_exercise_time';

    during_lbs_exercise_time_output = '.during_lbs_exercise_time';
    during_lbs_sweat_rate = '.during_lbs_sweat_rate';
    
    jQuery( during_lbs_fluid_intake ).on('change', function() {
        let during_lbs_pre_mass_calculation = $(during_lbs_pre_mass).val();
        let during_lbs_post_mass_calculation = $(during_lbs_post_mass).val();
        let during_lbs_fluid_intake_calculation = $(during_lbs_fluid_intake).val();

        let during_lbs_body_mass_calculation = Number(during_lbs_pre_mass_calculation) - Number(during_lbs_post_mass_calculation);

        let during_lbs_ounces_conversion = Number(during_lbs_body_mass_calculation) * 16;

        let during_lbs_sweat_loss = Number(during_lbs_fluid_intake_calculation) + Number(during_lbs_ounces_conversion);				
        
        $(during_lbs_sweat_loss_calculation).html(during_lbs_sweat_loss);
    });

    jQuery( during_lbs_exercise_time ).on('change', function() {				
        let CalculateSweatLossInput = $(during_lbs_sweat_loss_calculation).html();
        let CalculateExerciseTimeInput = $(during_lbs_exercise_time).val();

        $(during_lbs_exercise_time_output).html(CalculateExerciseTimeInput);

        during_lbs_sweat_rate_total = Number(CalculateSweatLossInput) / Number(CalculateExerciseTimeInput);

        $(during_lbs_sweat_rate).html((during_lbs_sweat_rate_total));
    });

    $(".during_lbs_reset").on("click", function(event) {
        $('.during_lbs_input').val('');
        $('.during_lbs_clear').empty();
    });

});

// Post kgs Calculation (Slide 9)
jQuery(function(){
    desktopKgPreExerciseMassInput = '.post_kgs_pre_mass';
    desktopKgPostExerciseMassInput = '.post_kgs_post_mass';
    desktopOutputKgMassLoss = '.post_kgs_body_mass_loss';

    desktopOutputL120 = '.post_kgs_120_replacement';
    desktopOutputL150 = '.post_kgs_150_replacement';
    
    jQuery( desktopKgPostExerciseMassInput ).on('change', function() {
        let DesktopKgCalulationOne = $(desktopKgPreExerciseMassInput).val();
        let DesktopKgCalulationTwo = $(desktopKgPostExerciseMassInput).val();
        let DesktopKgMassOutputOne = Number(DesktopKgCalulationOne) - Number(DesktopKgCalulationTwo);
        
        $(desktopOutputKgMassLoss).html(DesktopKgMassOutputOne);
        
        let replacement120 = Number(DesktopKgMassOutputOne) * 1.2;
        let replacement150 = Number(DesktopKgMassOutputOne) * 1.5;

        $(desktopOutputL120).html(replacement120);
        $(desktopOutputL150).html(replacement150);
    });

    $(".post_kgs_reset").on("click", function(event) {
        $('.post_kgs_input').val('');
        $('.post_kgs_clear').empty();
    });

});

// Post lbs Calculation (Slide 9)
jQuery(function(){
    post_lbs_pre_mass = '.post_lbs_pre_mass';
    post_lbs_post_mass = '.post_lbs_post_mass';
    post_lbs_body_mass_loss = '.post_lbs_body_mass_loss';

    post_lbs_120_replacement = '.post_lbs_120_replacement';
    post_lbs_150_replacement = '.post_lbs_150_replacement';
    
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