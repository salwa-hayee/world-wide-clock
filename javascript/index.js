setInterval(function () {
  let losangelesUpdate = document.querySelector("#los-angeles");
  console.log(losangelesUpdate);

  let losangelesDateUpdate = document.querySelector("#los-angeles .date");
  console.log(losangelesDateUpdate);

  let losangelesTimeUpdate = document.querySelector("#los-angeles .time");
  console.log(losangelesTimeUpdate);
  let losangelesTimeZone = moment.tz("America/Los_Angeles");

  losangelesTimeUpdate.innerHTML = losangelesTimeZone.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
  losangelesDateUpdate.innerHTML = losangelesTimeZone.format("MMMM Do, YYYY");

  let sydneyUpdate = document.querySelector("#sydney");
  console.log(sydneyUpdate);

  let sydneyDateUpdate = document.querySelector("#sydney .date");
  console.log(sydneyDateUpdate);

  let sydneyTimeUpdate = document.querySelector("#sydney .time");
  console.log(sydneyTimeUpdate);
  let sydneyTimeZone = moment.tz("Australia/Sydney");

  sydneyTimeUpdate.innerHTML = sydneyTimeZone.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
  sydneyDateUpdate.innerHTML = sydneyTimeZone.format("MMMM Do, YYYY");
}, 1000);
