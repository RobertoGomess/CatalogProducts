M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    
    $("#loading").fadeOut(1000);

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });