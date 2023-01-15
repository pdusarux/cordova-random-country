const button = document.getElementById("random-btn");
const countryName = document.getElementById("country-name");
const regionName = document.getElementById("region-name");
const subregionName = document.getElementById("subregion-name");
const capitalName = document.getElementById("capital-name");

const labels = document.getElementsByClassName("info-label");

const flag = document.createElement("img");
flag.style.width = "250px";
flag.style.height = "150px";
flag.style.margin = "20px 0";

var map;

button.addEventListener("click", function () {
  for (let label of labels) {
    label.style.display = label.style.display === "none" ? "block" : "none";
  }
});

button.addEventListener("click", function () {
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {
      console.log("data:>", data);
      const randomCountry = data[Math.floor(Math.random() * data.length)];
      countryName.innerHTML = "country: " + randomCountry.name;
      regionName.innerHTML = "region: " + randomCountry.region;
      subregionName.innerHTML = "subregion: " + randomCountry.subregion;
      capitalName.innerHTML = "capital: " + randomCountry.capital;

      flag.src = randomCountry.flag;
      container.appendChild(flag);

      initMap(randomCountry.latlng[0], randomCountry.latlng[1]);
    });
});

function initMap(lat, lon) {
  var mapOptions = {
    center: new google.maps.LatLng(lat, lon),
    zoom: 8,
  };
  console.log("mapOptions:>", mapOptions);
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map: map,
  });
  console.log("map:>", map);
}
