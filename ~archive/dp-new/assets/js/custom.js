$(function(){
    fieldSelectDesktop = '#item133147';
    fieldOuputDesktop = '#item132921';

    $( fieldSelectDesktop ).on('change', function() {				
        const fieldInput = $('#item132919').val();			
        // console.log( fieldInput );
        selectValue = this.value;
        // console.log(selectValue);
        maths = fieldInput * selectValue;
        // console.log(maths);
        $(fieldOuputDesktop).html(maths);			
    });
});

$(function(){
    fieldSelect = '#item140940';
    fieldOuput = '#item140941';

    $( fieldSelect ).on('change', function() {				
        const fieldInput = $('#item140939').val();			
        // console.log( fieldInput );
        selectValue = this.value;
        // console.log(selectValue);
        maths = fieldInput * selectValue;
        // console.log(maths);
        $(fieldOuput).html(maths);			
    });
});