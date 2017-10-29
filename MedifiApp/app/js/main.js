'use strict';
// Assuming web 1.0 is being used


$(document).ready(() => {
  
  var getIPFSFile = (hash, callback) => {
    var url = 'https://ipfs.io/ipfs/' + hash;
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
      // Clear any current docs
      $('#current-docs').empty();
      getIPFSFile(value, (content, err) => {
        if (!err) {
          // Turn JSON string into JSON Object
          var currentDocObj = JSON.parse(content);
          console.log(currentDocObj);

          for(var i = 0; i < currentDocObj.docs.length; i++) {
            var htmlStr = '<div class="doc">';
            for (var key in currentDocObj.docs[i]) {
              htmlStr += "<p>" + key + ": " + currentDocObj.docs[i][key];
            }
            htmlStr += '</div>';
            $('#current-docs').append(htmlStr);
          }
        } else {
          console.log('ERROR:' + err);
        }
      });
    });
  });
  
  // Add Document on upload
  $("#new-doc-form").on('submit', (event) => {
    event.preventDefault();

    var formData = $("#new-doc-form").serializeArray();
    var formJSONString = '{';
  
    for (var i = 0; i < formData.length; i++) {
      var name = formData[i].name;
      var val = formData[i].value;
      formJSONString += '"' + name + '":' + '"' + val + '"';

      if (i < formData.length-1) {
        formJSONString += ',';
      }
    }
    formJSONString += '}';
    
    // Get current data in blockchain
    SimpleStorage.methods.get().call(function(err, value) {
      getIPFSFile(value, (content, err) => {
        if (!err) {
          // Turn JSON string into JSON Object
          var documentData = JSON.parse(content);
          var formJSON = JSON.parse(formJSONString)
          
          // Update past data
          documentData.docs.push(formJSON);

          // Add updated document obj to ipfs
          var documentDataString = JSON.stringify(documentData);
          EmbarkJS.Storage.saveText(documentDataString).then(function(hash) {
              // Update blockchain data
              SimpleStorage.methods.set(hash).send({from: web3.eth.defaultAccount});
          })
          .catch(function(err) {
            if(err){
              console.log("IPFS saveText Error => " + err.message);
            }
          });
        }
      });
    });
  });

  
  $("#send-trigger").on('click', () => {
    var value = $("#to-send-to-bc").val();
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


});