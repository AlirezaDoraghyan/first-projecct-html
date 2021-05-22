function menu() {
  var men = document.getElementById('menu').getElementsByTagName('ul')[0].getElementsByTagName('ul');
  var c = "<i class='fa fa-chevron-down animated infinite fadeIn'> </i>"
  for (var i = 0; i < men.length; i++) {
    men[i].parentNode.firstChild.innerHTML = men[i].parentNode.firstChild.innerHTML + c;
  }
}

function menue() {
  var men = document.getElementById('menua').getElementsByTagName('ul')[0].getElementsByTagName('ul');
  var c = "<i class='fa fa-chevron-down animated infinite fadeIn'> </i>"

  for (var i = 0; i < men.length; i++) {
    men[i].parentNode.firstChild.innerHTML = men[i].parentNode.firstChild.innerHTML + c;
  }
}

function logo() {
  document.getElementById("logoarea").style.left = "0";
  document.getElementById("logoareas").style.left = "0";
  //document.getElementById("boxinos").style.bottom="-22";
  //document.getElementById("indext").style.right="0";
}
