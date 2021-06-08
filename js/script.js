var createSum = document.getElementById('somma-button');

var resultSumElement = document.getElementById('final-price');

var codeD = '232fewfe2';

// var checkItem = document.getElementsByClassName('somma-check');

createSum.addEventListener('click', function(){

    var resultSumInt = 12;

    var checkItem = document.getElementsByClassName('somma-check');

    for(var i = 0; i < checkItem.length; i++ ){

        if(checkItem[i].checked){

            resultSumInt += parseInt(checkItem[i].value);

        }
    }

     var discount = getElementById('check-discount-item');

     if(discount.value.length > 0 && discount.value === codeD){

        
     }



    resultSumElement.innerHTML = 'il prezzo finale è: ' + resultSumInt;
})