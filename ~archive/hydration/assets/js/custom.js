// Pre-exercise hydration calculation
jQuery(function(){
    fieldInput = '.desktop-input';
    fieldOutput = '.desktop-output--bodymass';

    fieldOutputBy3 = '.desktop-output--by3';
    fieldOutputBy5 = '.desktop-output--by5';
    fieldOutputBy7 = '.desktop-output--by7';

    jQuery( fieldInput ).on('change', function() {
      const initialValue = $(fieldInput).val();
      
      const bodyMassKgs = initialValue / 2.205;
      const calculateBy3 = bodyMassKgs * 3;
      const calculateBy5 = bodyMassKgs * 5;
      const calculateBy7 = bodyMassKgs * 7;
      
      $(fieldOutput).html((bodyMassKgs).toFixed(2));
      $(fieldOutputBy3).html((calculateBy3).toFixed(2));
      $(fieldOutputBy5).html((calculateBy5).toFixed(2));
      $(fieldOutputBy7).html((calculateBy7).toFixed(2));
    });
});

// Sweat Rate Calculator

// KG Calculation
jQuery(function(){
    desktopKgPreExerciseInput = '.desktop-kg-pre-exercise-input';
    desktopKgPostExerciseInput = '.desktop-kg-post-exercise-input';
    desktopKgFluidEntakeInput = '.desktop-kg-fluid-intake-input';
    desktopOutputKgSweatLoss = '.desktop-output-kg-sweat-loss';

    exerciseTimeInput = '.desktop-exercise-time-input';
    
    kgOutputExerciseTime = '.desktop-output-exercise-time';
    kgOutputSweatRateTotal = '.desktop-output-kg-sweat-rate-total';
    
    jQuery( desktopKgFluidEntakeInput ).on('change', function() {
        let DesktopKgCalulationOne = $(desktopKgPreExerciseInput).val();
        let DesktopKgCalulationTwo = $(desktopKgPostExerciseInput).val();
        let DesktopKgCalulationThree = $(desktopKgFluidEntakeInput).val();
        let DesktopKgOutputOne = Number(DesktopKgCalulationOne) - Number(DesktopKgCalulationTwo) + Number(DesktopKgCalulationThree);
        
        $(desktopOutputKgSweatLoss).html(DesktopKgOutputOne);				
    });

    jQuery( exerciseTimeInput ).on('change', function() {				
        let CalculateSweatLossInput = $(desktopOutputKgSweatLoss).html();
        let CalculateExerciseTimeInput = $(exerciseTimeInput).val();

        $(kgOutputExerciseTime).html(CalculateExerciseTimeInput);

        kgSweatRateTotal = Number(CalculateSweatLossInput) / Number(CalculateExerciseTimeInput);

        $(kgOutputSweatRateTotal).html((kgSweatRateTotal).toFixed(2));
    });

});

// LB Calculation
jQuery(function(){
    desktopLbPreExerciseInput = '.desktop-lb-pre-exercise-input';
    desktopLbPostExerciseInput = '.desktop-lb-post-exercise-input';
    desktopLbFluidEntakeInput = '.desktop-lb-fluid-intake-input';
    desktopOutputLbSweatLoss = '.desktop-output-lb-sweat-loss';

    lbOutputSweatRateTotal = '.desktop-output-lb-sweat-rate-total';
    
    jQuery( desktopLbFluidEntakeInput ).on('change', function() {
        let DesktopLbCalulationOne = $(desktopLbPreExerciseInput).val();
        let DesktopLbCalulationTwo = $(desktopLbPostExerciseInput).val();
        let DesktopLbCalulationThree = $(desktopLbFluidEntakeInput).val();
        let DesktopLbOutputOne = Number(DesktopLbCalulationOne) - Number(DesktopLbCalulationTwo) + Number(DesktopLbCalulationThree);				
        
        $(desktopOutputLbSweatLoss).html(DesktopLbOutputOne);
    });

    jQuery( exerciseTimeInput ).on('change', function() {				
        let CalculateSweatLossInput = $(desktopOutputLbSweatLoss).html();
        let CalculateExerciseTimeInput = $(exerciseTimeInput).val();

        $(kgOutputExerciseTime).html(CalculateExerciseTimeInput);

        lbSweatRateTotal = Number(CalculateSweatLossInput) / Number(CalculateExerciseTimeInput);

        $(lbOutputSweatRateTotal).html((lbSweatRateTotal).toFixed(2));
    });
});

// Post-exercise hydration

// KG Calculation
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

        $(desktopOutputL120).html(replacement120);
        $(desktopOutputL150).html(replacement150);
    });


});

// LB Calculation
jQuery(function(){
    desktopLbPreExerciseMassInput = '.desktop-lb-pre-body-mass-input';
    desktopLbPostExerciseMassInput = '.desktop-lb-post-body-mass-input';
    desktopOutputLbMassLoss = '.desktop-output-lb-body-mass-loss';

    desktopOutputOz120 = '.desktop-output-oz-120';
    desktopOutputOz150 = '.desktop-output-oz-150';
    
    jQuery( desktopLbPostExerciseMassInput ).on('change', function() {
        let DesktopLbCalulationOne = $(desktopLbPreExerciseMassInput).val();
        let DesktopLbCalulationTwo = $(desktopLbPostExerciseMassInput).val();
        let DesktopLbMassOutputOne = Number(DesktopLbCalulationOne) - Number(DesktopLbCalulationTwo);
        
        $(desktopOutputLbMassLoss).html(DesktopLbMassOutputOne);

        let replacement120 = Number(DesktopLbMassOutputOne) * 1.2;
        let replacement150 = Number(DesktopLbMassOutputOne) * 1.5;

        $(desktopOutputOz120).html(replacement120);
        $(desktopOutputOz150).html(replacement150);
    });
});