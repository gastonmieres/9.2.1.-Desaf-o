document.addEventListener('DOMContentLoaded', function(){
   var data = document.getElementById('data');
   var inputStorage =  localStorage.getItem('inputStorage');

   data.innerHTML = ` ${inputStorage}
   `

});