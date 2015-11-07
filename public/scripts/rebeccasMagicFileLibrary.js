console.log("magic happening");

var AJAX = {};

(function() {

  AJAX.get = function(url, callback){

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
      if(httpRequest.readystate == XMLHttpRequest.DONE){
        if(httpRequest.status == 200){
          var data = JSON.parse(httpRequest.responseText);
          callback(null, data);
        }
        else{
          var theError = 'there was an error and here is what the server said:' + httpRequest.status;
        callback(theError, null);
        }
      }
    }
  }
})();