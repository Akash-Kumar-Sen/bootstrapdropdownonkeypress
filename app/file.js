/*let keyToShow = 37;
let keyToCollapse = 39;


function activateDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function collapseDropdown() {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}
  
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == keyToShow) {
        activateDropdown();
    }
    else if(event.keyCode == keyToCollapse) {
        collapseDropdown();
    }
});*/
let keyToShow = 37;

function activateDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == keyToShow) {
        activateDropdown();
    }
});