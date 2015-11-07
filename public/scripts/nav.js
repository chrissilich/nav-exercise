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
              buildNav();
              console.log(data);
          }
          else {
            alert('there was an error and here is what the server said:' + httpRequest.status);
          }
        }
    }

    var buildNav = function() {
      var myNav = document.getElementById("myNav");
      var navItemList = data.items;

      for (var i = 0; i < navItemList.length; i++) {
        // make an li  // make <a>
        var li = document.createElement('li');
        var a  = document.createElement('a');


        myNav.appendChild(li);
        li.appendChild(a);

        a.innerHTML = navItemList[i].label;




        // populate text and url
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

