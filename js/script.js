function init(){
    var button = document.getElementById('entrybutton');
  
    function onCommand(){
      var textbox = document.getElementById('entryinput');
      document.getElementById('textoutput').innerHTML = textbox.value;
      alert("Alexander Medina: " + textbox.value);
    }
  
    button.addEventListener('click', onCommand);
    }
    
window.addEventListener('load', init);