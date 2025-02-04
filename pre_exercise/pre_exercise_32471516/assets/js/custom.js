$(function(){
    $('#item122198').keyup(function(){
        var input_value = parseFloat($('#item122198').val()) || 0;
        
        var kilograms = Math.round(input_value / 2.2);

        console.log(kilograms);
        
        $('#one_kilogram').html(Math.round(kilograms * 1));
        
        $('#two_kilogram').html(Math.round(kilograms * 2));

        $('#three_kilogram').html(Math.round(kilograms * 3));
        
        $('#four_kilogram').html(Math.round(kilograms * 4));
    });
});

$(function(){
    $('#item132141').keyup(function(){
      var input_value = parseFloat($('#item132141').val()) || 0;
      
      var kilograms = Math.round(input_value / 2.2);

      console.log(kilograms);
      
      $('.js-one_kilogram').html(Math.round(kilograms * 1));
      
      $('.js-two_kilogram').html(Math.round(kilograms * 2));

      $('.js-three_kilogram').html(Math.round(kilograms * 3));
      
      $('.js-four_kilogram').html(Math.round(kilograms * 4));
      
    });
});