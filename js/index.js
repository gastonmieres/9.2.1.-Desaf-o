document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById('buttonText');
    var inputText = document.getElementById('inputText');

    button.addEventListener('click',function(event){
        localStorage.setItem('inputStorage', inputText.value );
    })
})

