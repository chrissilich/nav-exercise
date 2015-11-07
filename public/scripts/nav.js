console.log("nav.js happening");

// ajax request for "/api/nav.json"
(function() {

  window.onload = function(){

    AJAX.get('api/nav.json', function(err, data){
      if(err) {
        console.log(err);
        return;
      } else {}
      console.log(data);
      //replaceHTML(data);
    });
  };

  // function replaceHTML(data){

  // }

})();






