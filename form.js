const Form = document.getElementById("searchform");
let geocode = [];
Form.addEventListener("submit", function (e) {
    e.preventDefault();
    const loc = document.querySelector("#loc");
    const name = document.querySelector("#name");
    const no = document.querySelector("#no");
    const qe = document.querySelector("#qe");

    axios
        .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc.value}.json?access_token=pk.eyJ1IjoidnRoYXJ1bjAwMSIsImEiOiJjbDJnNWtqejcwMG91M2tzYm5xdjNvcmN1In0.fYPiaIq6efAQSH24eeUH1Q`
        )
        .then((result) => {
            geocode = result.data.features[0].center;
            console.log(geocode);
            const geo = document.createElement("div");
            geo.innerHTML = `<div>
      <div>Name: ${name.value}</div>
      <div>Location: ${loc.value} </div>
      <div>Contact No.: ${no.value} </div>
      <div>Query: ${qe.value} </div>
      <div>
      Latitude = ${geocode[0]} Longitude= ${geocode[1]}
      </div>
      </div>`;
            document.querySelector("body").append(geo);
        });
});