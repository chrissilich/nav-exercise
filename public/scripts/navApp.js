(function(){
  window.onload = function(){

    AJAX.get('api/nav.json', function(err, data){
      if(err){console.log(err); return; }
      console.log(data);
      //replaceHTML(data);
    });
  };

  function replaceHTML(data){
    $('#myNav').html('<li>test' + data[0].name+'</li>');

  } // test no jquery allowed
})();

