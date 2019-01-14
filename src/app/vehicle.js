function getVehicles() {
    var xmlHttpRequest = new XMLHttpRequest();
  
    xmlHttpRequest.onreadystatechange = function() {
        if ( xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {
            document.getElementById("vehicles").innerHTML = xmlHttpRequest.responseText;
        }
    };
    xmlHttpRequest.open('GET', 'http://localhost:8080/api/vehicles', true);
    xmlHttpRequest.send();
  }