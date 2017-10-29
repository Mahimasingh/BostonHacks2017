


/*'use strict';

// ===========================
// Storage (IPFS) example
// ===========================

$(document).ready(() => {

  var getIPFSFile = (hash, callback) => {
    var url = 'https://ipfs.io/ipfs/' + hash
    var request = $.ajax({
      url: url,
      method: 'GET'
    });
   
    request.done(function( msg ) {
      console.log(msg);
      callback(msg, null); //null err
    });
     
    request.fail(function( jqXHR, textStatus ) {
      console.log( "Request failed: " + textStatus );
      callback(null, textStatus); //null msg
    });
  }

  $('#load-docs').on('click', () => {
    // Populate current docs
    SimpleStorage.methods.get().call(function(err, value) {
        getIPFSFile(value, (content, err) => {
          if (!err) {
            // Turn JSON string into JSON Object
            //var currentDocObj = JSON.parse(content);
            console.log(content);

            /*for(var i = 0; i < currentDocObj.docs.length; i++) {
              htmlStr = '<div class="doc">';
              for (var key in currentDocObj.docs[i]) {
                htmlStr += "<p>" + key + ": " + currentDocObj.docs[i].key;
              }
              htmlStr += '</div>';
              $('#current-docs').append(htmlStr);
            }
          }
        });
    });
  });
    

  // automatic set if config/storage.json has "enabled": true and "provider": "ipfs"
  //EmbarkJS.Storage.setProvider('ipfs',{server: 'localhost', port: '5001'});

  $('#send-ipfs-button').on('click', () => {
    var val = $('#send-ipfs').val();
  
    EmbarkJS.Storage.saveText(val).then(function(hash) {
      $("#hash").text(hash);
      console.log(hash)
    })
    .catch(function(err) {
      if(err){
        console.log("IPFS saveText Error => " + err.message);
      }
    });

  });

  $('#load-hash-info').on('click', () => {
    var val = $("#hash").text();

    EmbarkJS.Storage.get(val).then(function(content) {
      $("#hash-info").text(content);
      console.log(content);
    })
    .catch(function(err) {
      if(err){
        console.log("IPFS get Error => " + err.message);
      }
    });
  });

  // ===========================
  // Blockchain example
  // ===========================
  $("#send-trigger").on('click', () => {
    var value = $("#to-send-to-bc").val();
    console.log('Sending: ' + value + ' to bc');
    var newData = {};

    // If web3.js 1.0 is being used
    if (EmbarkJS.isNewWeb3()) {
    
      SimpleStorage.methods.set(value).send({from: web3.eth.defaultAccount});

    } else {
      SimpleStorage.set(value);
    }

  });

  $("#get-bc-val").on('click', () => {
    // If web3.js 1.0 is being used
    if (EmbarkJS.isNewWeb3()) {
      SimpleStorage.methods.get().call(function(err, value) {
        
        $("#bc-val").text(value);
        getIPFSFile(value, (content, err) => {
          if (!err) {
            $('#bc-content').text(content);
          }
        });

      });
    } else {
      SimpleStorage.get().then(function(value) {
        $("#bc-val").text(value);
      });
    }
  });

});*/