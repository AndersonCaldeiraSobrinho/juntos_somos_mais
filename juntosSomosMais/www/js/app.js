// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
// script.defer = true;
// script.async = true;

// window.initMap = function() {
//     // JS API is loaded and available
//   };


//   // Append the 'script' element to 'head'
// document.head.appendChild(script);



var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

