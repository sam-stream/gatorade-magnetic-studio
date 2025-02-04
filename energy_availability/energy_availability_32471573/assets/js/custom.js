// Desktop - Energy Availability Calculator
jQuery(function() {

    let energyCalculatorTrigger = '.js-desktop-energy-calculator-trigger';

    let energyIntakeInput = '.js-desktop-energy-intake-input';
    let energyExpenditureInput = '.js-desktop-energy-expenditure-input';
    let fatFreeMassInput = '.js-desktop-fat-free-mass-input';
    let energyCalculatorOutput = '.js-desktop-energy-calculator-output';

    jQuery(energyCalculatorTrigger).on('change', function() {

        console.log('Trigger');

        // Get numeric values from the inputs
        let energyIntake = parseFloat(jQuery(energyIntakeInput).val()) || 0;
        let energyExpenditure = parseFloat(jQuery(energyExpenditureInput).val()) || 0;
        let fatFreeMass = parseFloat(jQuery(fatFreeMassInput).val()) || 1; // Avoid division by zero

        // Correct the formula
        let energyCalulatorFormula = (energyIntake - energyExpenditure) / fatFreeMass;

        console.log(energyCalulatorFormula);

        // Output the result
        jQuery(energyCalculatorOutput).html(Math.round(energyCalulatorFormula));
    });

    jQuery(".js-desktop-energy-calculator-reset").on("click", function(event) {
        console.log('Calculator Reset');
        jQuery('.js-desktop-energy-calculator-clear-input').val('');
        jQuery('.js-desktop-energy-calculator-clear-span').empty();
    });

    jQuery(".js-desktop-energy-balance-reset").on("click", function(event) {
        console.log('Balance Reset');
        jQuery('.js-desktop-energy-balance-clear-input').val('');
        jQuery('.js-desktop-energy-balance-clear-span').empty();
    });

});

// Desktop - Energy Availability Energy Balance Method
jQuery(function () {
    let desktopEnergyAvailabilityTrigger = '.js-desktop-energy-availability-trigger';

    let desktopBM1 = '.js-desktop-bm1';
    let desktopBM2 = '.js-desktop-bm2';

    let desktopBF1 = '.js-desktop-bf1';
    let desktopBF2 = '.js-desktop-bf2';

    let desktopTDEE = '.js-desktop-tdee';
    let desktopADEE = '.js-desktop-adee';

    let desktopDBM = '.js-desktop-dbm';

    let desktopTotalEnergyOutput = '.js-desktop-total-energy';

    jQuery(desktopEnergyAvailabilityTrigger).on('change', function () {
        // console.log('Changed');

        // Extract values and convert them to numbers
        let bm1 = parseFloat(jQuery(desktopBM1).val()) || 0;
        let bm2 = parseFloat(jQuery(desktopBM2).val()) || 0;

        let bf1 = parseFloat(jQuery(desktopBF1).val()) / 100 || 0;
        let bf2 = parseFloat(jQuery(desktopBF2).val()) / 100 || 0;

        let tdee = parseFloat(jQuery(desktopTDEE).val()) || 0;
        let adee = parseFloat(jQuery(desktopADEE).val()) || 0;

        let dbm = parseFloat(jQuery(desktopDBM).val()) || 1; // Default to 1 to avoid division by zero

        
        console.log('Body Mass 1:', bm1);
        console.log('Body Mass 2:', bm2);
        console.log('Body Fat 1:', bf1);
        console.log('Body Fat 2:', bf2);
        console.log('Total Daily Energy Expenditure:', tdee);
        console.log('Daily Exercise Energy Expenditure:', adee);
        console.log('Day between measurements:', dbm);

        let desktopFM1 = bm1 * bf1;
        
        // console.log('BM1:', bm1);
        // console.log('BF1:', bf1);
        console.log('FM1:', desktopFM1);
        
        let desktopFFM1 = bm1 - desktopFM1;

        console.log('FFM1:', desktopFFM1);

        let desktopFM2 = bm2 * bf2;

        // console.log('BM2:', bm2);
        // console.log('BF2:', bf2);
        console.log('FM2:', desktopFM2);

        let desktopFFM2 = bm2 - desktopFM2;
        
        console.log('FFM2:', desktopFFM2);

        let desktopCES = (1.0 * ((desktopFFM2 - desktopFFM1) / dbm)) + (9.5 * ((desktopFM2 - desktopFM1) / dbm));

        // let test = ( 1.0 * (FFM2 59.925 - FFM1 56 / DAYS 61)) + ( 9.5 * (FM2 10.575 - FM1 14 / DAYS 61);

        console.log('CES:', desktopCES);

        let desktopEIN = tdee + desktopCES;

        console.log('EIN:', desktopEIN);

        let desktopTotalEnergy = (desktopEIN - adee) / desktopFFM2;

        console.log('EAV:', desktopTotalEnergy);
        // My Total = desktopTotalEnergy: 30.029719526457257

        // Output the result
        jQuery(desktopTotalEnergyOutput).html(Math.round(desktopTotalEnergy));
    });
});

// Mobile - Energy Availability Calculator
jQuery(function() {

    let mobileEnergyCalculatorTrigger = '.js-mobile-energy-calculator-trigger';

    let mobleEnergyIntakeInput = '.js-mobile-energy-intake-input';
    let mobileEnergyExpenditureInput = '.js-mobile-energy-expenditure-input';
    let energyFatFreeMassInput = '.js-mobile-fat-free-mass-input';
    let mobileEnergyCalculatorOutput = '.js-mobile-energy-calculator-output';

    jQuery(mobileEnergyCalculatorTrigger).on('change', function() {

        console.log('Trigger');

        // Get numeric values from the inputs
        let mobileEnergyIntake = parseFloat(jQuery(mobleEnergyIntakeInput).val()) || 0;
        let mobileEnergyExpenditure = parseFloat(jQuery(mobileEnergyExpenditureInput).val()) || 0;
        let mobileFatFreeMass = parseFloat(jQuery(energyFatFreeMassInput).val()) || 1; // Avoid division by zero

        // Correct the formula
        let mobileEnergyCalulatorFormula = (mobileEnergyIntake - mobileEnergyExpenditure) / mobileFatFreeMass;

        // Output the result
        jQuery(mobileEnergyCalculatorOutput).html(Math.round(mobileEnergyCalulatorFormula));
    });

    jQuery(".js-mobile-energy-calculator-reset").on("click", function(event) {
        console.log('Calculator Reset');
        jQuery('.js-mobile-energy-calculator-clear-input').val('');
        jQuery('.js-mobile-energy-calculator-clear-span').empty();
    });

    jQuery(".js-mobile-energy-balance-reset").on("click", function(event) {
        console.log('Balance Reset');
        jQuery('.js-mobile-energy-balance-clear-input').val('');
        jQuery('.js-mobile-energy-balance-clear-span').empty();
    });

});

// Mobile - Energy Availability Energy Balance Method
jQuery(function () {
    let mobileEnergyAvailabilityTrigger = '.js-mobile-energy-availability-trigger';

    let mobileBM1 = '.js-mobile-bm1';
    let mobileBM2 = '.js-mobile-bm2';

    let mobileBF1 = '.js-mobile-bf1';
    let mobileBF2 = '.js-mobile-bf2';

    let mobileTDEE = '.js-mobile-tdee';
    let mobileADEE = '.js-mobile-adee';

    let mobileDBM = '.js-mobile-dbm';

    let mobileTotalEnergyOutput = '.js-mobile-total-energy';

    jQuery(mobileEnergyAvailabilityTrigger).on('change', function () {
        // console.log('Changed');

        // Extract values and convert them to numbers
        let bm1 = parseFloat(jQuery(mobileBM1).val()) || 0;
        let bm2 = parseFloat(jQuery(mobileBM2).val()) || 0;

        let bf1 = parseFloat(jQuery(mobileBF1).val()) / 100 || 0;
        let bf2 = parseFloat(jQuery(mobileBF2).val()) / 100 || 0;

        let tdee = parseFloat(jQuery(mobileTDEE).val()) || 0;
        let adee = parseFloat(jQuery(mobileADEE).val()) || 0;

        let dbm = parseFloat(jQuery(mobileDBM).val()) || 1; // Default to 1 to avoid division by zero

        let mobileFM1 = bm1 * bf1;
        
        // console.log('BM1:', bm1);
        // console.log('BF1:', bf1);
        // console.log('Mobile FM1:', mobileFM1);
        
        let mobileFFM1 = bm1 - mobileFM1;

        // console.log('Mobile FMF1:', mobileFFM1);

        let mobileFM2 = bm2 * bf2;

        // console.log('BM2:', bm2);
        // console.log('BF2:', bf2);
        // console.log('Mobile FM2:', mobileFM2);

        let mobileFFM2 = bm2 - mobileFM2;
        
        // console.log('Mobile FMF2:', mobileFFM2);

        let mobileCES = (1.0 * ((mobileFFM2 - mobileFFM1) / dbm)) + (9.5 * ((mobileFM2 - mobileFM1) / dbm));

        // console.log('mobileCES:', mobileCES);

        let mobileEIN = tdee + mobileCES;

        // console.log('mobileEIN:', mobileEIN);

        let mobileTotalEnergy = (mobileEIN - adee) / mobileFFM2;

        // console.log('mobileTotalEnergy:', mobileTotalEnergy);
        // My Total = mobileTotalEnergy: 30.029719526457257

        // Output the result
        jQuery(mobileTotalEnergyOutput).html(Math.round(mobileTotalEnergy));
    });
});

