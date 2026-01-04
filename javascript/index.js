function cityTimeUpdate() {
  let losangelesUpdate = document.querySelector("#los-angeles");
  let losangelesDateUpdate = document.querySelector("#los-angeles .date");
  let losangelesTimeUpdate = document.querySelector("#los-angeles .time");

  let losangelesTimeZone = moment.tz("America/Los_Angeles");

  losangelesTimeUpdate.innerHTML = losangelesTimeZone.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
  losangelesDateUpdate.innerHTML = losangelesTimeZone.format("MMMM Do, YYYY");

  let sydneyUpdate = document.querySelector("#sydney");
  let sydneyDateUpdate = document.querySelector("#sydney .date");
  let sydneyTimeUpdate = document.querySelector("#sydney .time");
  let sydneyTimeZone = moment.tz("Australia/Sydney");
  sydneyTimeUpdate.innerHTML = sydneyTimeZone.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
  sydneyDateUpdate.innerHTML = sydneyTimeZone.format("MMMM Do, YYYY");

  let kualaLumpurUpdate = document.querySelector("#kualaLumpur");
  let kualaLumpurDateUpdate = document.querySelector("#kualaLumpur .date");
  console.log(kualaLumpurDateUpdate);

  let kualaLumpurTimeUpdate = document.querySelector("#kualaLumpur .time");
  console.log(kualaLumpurTimeUpdate);
  let kualaLumpurTimeZone = moment.tz("Asia/Kuala_Lumpur");

  kualaLumpurTimeUpdate.innerHTML = kualaLumpurTimeZone.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
  kualaLumpurDateUpdate.innerHTML = kualaLumpurTimeZone.format("MMMM Do, YYYY");
}

function cityUpdate(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  if (cityTimeZone.length > 0) {
    citiesElement.innerHTML = citiesElement = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
  `;
  }
}

cityTimeUpdate();
setInterval(cityTimeUpdate, 1000);

let cityDropdownElement = document.querySelector("#city");
cityDropdownElement.addEventListener("change", cityUpdate);

setInterval(cityUpdate, 1000);
