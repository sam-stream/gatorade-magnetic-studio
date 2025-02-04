$(function(){
    $('#item120249').keyup(function(){
      var input_value = parseFloat($('#item120249').val()) || 0;
      
      var kilograms = Math.round(input_value / 2.2);
      
      $('#kilograms_value').val(kilograms);
      
      $('#light_activity_one').html(Math.round(kilograms * 3));
      
      $('#light_activity_two').html(Math.round(kilograms * 5));

      $('#moderate_activity_one').html(Math.round(kilograms * 5));
      
      $('#moderate_activity_two').html(Math.round(kilograms * 7));

      $('#endurance_activity_one').html(Math.round(kilograms * 6));
      
      $('#endurance_activity_two').html(Math.round(kilograms * 10));

      $('#extreme_activity_one').html(Math.round(kilograms * 8));
      
      $('#extreme_activity_two').html(Math.round(kilograms * 12));
      
    });
  });