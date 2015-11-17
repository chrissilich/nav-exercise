console.log("nav.js");

// ajax request for "/api/nav.json"

(function() {

    var navJSON;
    var data;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        navJSON = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        navJSON = new ActiveXObject("Microsoft.XMLHTTP");
    }

    navJSON.onreadystatechange = function() {
        if (navJSON.readyState == XMLHttpRequest.DONE ) {
          if(navJSON.status == 200){
              console.log(navJSON.responseText);
              data = JSON.parse(navJSON.responseText);
              buildNav(".desktop-nav");
              buildNav(".sidebar-mobile-nav");
              console.log(data);
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
        // make an li  // make <a>
        var li = document.createElement('li');
        var a  = document.createElement('a');
        myNav.appendChild(li);
        li.appendChild(a);
         // populate text and url
        a.innerHTML = navItemList[i].label;
        a.setAttribute('href', navItemList[i].url);

        var subNavItemList = navItemList[i].items;
        if (subNavItemList.length > 0) {
          // create ul
          var subUl = document.createElement('ul');
          subUl.setAttribute('class', navItemList[i].label)
          // append to originial li
          li.appendChild(subUl);

          for (var z = 0; z < subNavItemList.length; z++) {
            // make an li  // make <a>
            var subLi = document.createElement('li');
            var subA  = document.createElement('a');

            subUl.appendChild(subLi);
            subLi.appendChild(subA);
             // populate text and url
            subA.innerHTML = subNavItemList[z].label;
            subA.setAttribute('href', subNavItemList[z].url);
          }
        }




        // if statement for items is > [0] loop through array
          // for each through the array to make sub li and a
      };
    };

    navJSON.open("GET", "/api/nav.json", true);
    navJSON.send();
    console.log("complete");


})();

// when that succeeds, it should return a long string of JSON

// parse that JSON into real a JS object with an array full of nav item objects in it


// var data = JSON.parse(httpRequest.responseText);

// loop through that array, making the nav


