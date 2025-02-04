$(function(){
  $('#item120249').keyup(function(){
    var input_value = parseFloat($('#item120249').val()) || 0;
    
    var kilograms = Math.round(input_value / 2.2);

    console.log(kilograms);
    
    $('#one_kilogram').html(Math.round(kilograms * 1));
    
    $('#two_kilogram').html(Math.round(kilograms * 2));

    $('#three_kilogram').html(Math.round(kilograms * 3));
    
    $('#four_kilogram').html(Math.round(kilograms * 4));
    
  });
});

$(function(){
  $('#item126672').keyup(function(){
    var input_value = parseFloat($('#item126672').val()) || 0;
    
    var kilograms = Math.round(input_value / 2.2);

    console.log(kilograms);
    
    $('.one_kilogram').html(Math.round(kilograms * 1));
    
    $('.two_kilogram').html(Math.round(kilograms * 2));

    $('.three_kilogram').html(Math.round(kilograms * 3));
    
    $('.four_kilogram').html(Math.round(kilograms * 4));
    
  });
});