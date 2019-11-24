//Плавное появление текста//
$(window).ready(function(){
  /* немного другой эффект появления, и задержка в 2 секунды */
setTimeout ("$('#wrapper').show('drop');",1000);
});

//Блок Обратная связь//
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
