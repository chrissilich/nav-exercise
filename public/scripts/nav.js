(function() {

    var navJSON;
    var data;

    if (window.XMLHttpRequest) {
        navJSON = new XMLHttpRequest();
    } else {
        navJSON = new ActiveXObject("Microsoft.XMLHTTP");
    }

    navJSON.onreadystatechange = function() {
        if (navJSON.readyState == XMLHttpRequest.DONE ) {
          if(navJSON.status == 200){

              data = JSON.parse(navJSON.responseText);
              buildNav(".desktop-nav");
              buildNav(".sidebar-mobile-nav");

          }
          else {
            alert('there was an error and here is what the server said:' + httpRequest.status);
          }
        }
    }

    var buildNav = function(selector) {
      var myNav = document.querySelector(selector);
      var navItemList = data.items;

      for (var i = 0; i < navItemList.length; i++) {

        var li = document.createElement('li');
        var a  = document.createElement('a');
        myNav.appendChild(li);
        li.appendChild(a);

        a.innerHTML = navItemList[i].label;
        a.setAttribute('href', navItemList[i].url);
        a.setAttribute('target', '_blank');

        var subNavItemList = navItemList[i].items;
        if (subNavItemList.length > 0) {

          li.addEventListener("click", toggleSubnav);

          var subUl = document.createElement('ul');
          var dropArrow = document.createElement('div');
          subUl.setAttribute('class', navItemList[i].label)

          li.appendChild(subUl);
          li.appendChild(dropArrow);
          dropArrow.setAttribute('class', 'drop-arrow');

          for (var z = 0; z < subNavItemList.length; z++) {

            var subLi = document.createElement('li');
            var subA  = document.createElement('a');

            subUl.appendChild(subLi);
            subLi.appendChild(subA);

            subA.innerHTML = subNavItemList[z].label;
            subA.setAttribute('href', subNavItemList[z].url);
            subA.setAttribute('target', '_blank');
          }
        }
      };
    };
    navJSON.open("GET", "/api/nav.json", true);
    navJSON.send();

})();


// var elements = document.getElementsByTagName('li');
// for(var i = 0, len = elements.length; i < len; i++) {
//   elements[i].onclick = function () {
//   // stuff

//   }
// }

var toggleSubnav = function(e) {

  e.preventDefault();

  if (this.className.indexOf("active") == -1) {
    // this li is not .active
    document.getElementById("overlay").className = "overlay";
    console.log("open subnav");

    this.className += " active";
  } else {
    // this li is already active
    console.log("close subnav");
    closeAllSubnavs();
  }


}


var closeAllSubnavs = function() {
  // find all lis
  document.querySelectorAll("li");
  // loop through them
  // remove .active from them

  //this.className = this.className.replace("active", "");


  document.getElementById("overlay").className = document.getElementById("overlay").className.replace("overlay", "");
}

/*
var removeOverlay = function() {
  document.getElementById("overlay").className = "";
    console.log("overlaid");
}
*/

