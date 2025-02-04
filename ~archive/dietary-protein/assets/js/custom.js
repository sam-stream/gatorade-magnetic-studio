$(function(){
    fieldSelect = '.o-field-select';
    fieldOuput = '.o-field-output';

    $( fieldSelect ).on('change', function() {				
        const fieldInput = $('.o-field-input').val();			
        // console.log( fieldInput );
        selectValue = this.value;
        // console.log(selectValue);
        maths = fieldInput * selectValue;
        // console.log(maths);
        $(fieldOuput).html(maths);			
    });
});