// Google  Maps

let map;

function initMap() {
  const loc = { lat: 40.783058, lng: -73.971252 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 8,
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

window.initMap = initMap;

// Smooth Scrolling

$("#nav  a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#nav").style.opacity = 0.9;
  } else {
    document.querySelector("#nav").style.opacity = 1;
  }
});
