let latitudeGeolocation = null;
let longitudeGeolocation = null;

if ("geolocation" in navigator) {
    console.log("Suporta Geolocalização!");
} else {
    alert("Navegador não suporta Geolocalização!");
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    latitudeGeolocation = position.coords.latitude;
    longitudeGeolocation = position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
    // console.log(position.address);
    segueCodigoComGeolocalizacao();
  },showError);

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
  }

function segueCodigoComGeolocalizacao(){
  console.log(latiudeGeolocation);
  console.log(longitudeGeolocation);
}
