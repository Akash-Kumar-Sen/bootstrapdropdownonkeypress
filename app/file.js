let keyToShow = prompt("Please enter the key code, After pressing that key dropdown will occur");

function activateDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == keyToShow) {
        activateDropdown();
    }
});
