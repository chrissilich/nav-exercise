console.log("nav.js");

// ajax request for "/api/nav.json"

(function() {

    var navJSON;

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
              //document.getElementById("myNav").innerHTML = navJSON.responseText;
           }
           else if(navJSON.status == 400) {
              alert('There was an error 400')
           }
           else {
               alert('something else other than 200 was returned')
           }
        }
    }

    navJSON.open("GET", "/api/nav.json", true);
    navJSON.send();
})();



// when that succeeds, it should return a long string of JSON

// parse that JSON into real a JS object with an array full of nav item objects in it
(function() {

  var json = navJSON.response;

  var result = JSON.parse(json);

});

// loop through that array, making the nav

// var arr = [];

// for(var x in parsed){
//   arr.push(parsed[x]);
// }

