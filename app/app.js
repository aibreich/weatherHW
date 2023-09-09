// constant variables
const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=`;
const apiKey = `576315925541448888d204812232808`;

// Get data function shown in class
// function getData() {
//   $.getJSON(`./data/data.json`, (data) => {
//     console.log("data ", data.Students);
//     let students = data.Students;
//     $.each(students, (idx, student) => {
//       console.log(`index ${idx} student `, student.classes);
//       $(".student").append(`<p>${student.firstName}</p>`);
//       $.each(student.classes, (idx, course) => {
//         $(".student").append(`<p>${course.classNumber}</p>`);
//       });
//     });
//   }).fail(function (e) {
//     console.log("error", e);
//   });
// }
// init listeners
function initListeners() {
  $("#submit").on("click", (e) => {
    e.preventDefault();
    let city = $("#city").val();
    // let zip = $("#zip").val();

    if (city != "") {
      $(".current").empty();
      $(".forecast").empty();
      let cityURL =
        baseUrl + apiKey + "&q=" + city + "&days=4&aqi=no&alerts=no";

      $.getJSON(cityURL, (data) => {
        console.log(data);
        // $(".current").empty();<div class="curregion"> Region: ${data.location.region}</div>
        // / ${data.current.temp_c}°C
        // / ${data.current.feelslike_c}°C
        $(".current").append(
          `<div class="curlocal">
          <div class="curleft">
            <div class="lefttop">
              <div class="curlocation">${data.location.name}, ${data.location.region}</div>
              <div class="curupdate">${data.current.last_updated}</div>
            </div>
            <div class="latlon">
            <div class="lat">Latitude: ${data.location.lat}</div>
            <div class="lon">Longitude: ${data.location.lon}</div>
            </div>
            </div>

            <div class="curright">
           
            <div class="righttop">
              <div class="curtemp"> ${data.current.temp_f}°F </div>
              <div class="curfeelslike">Feels like: ${data.current.feelslike_f}°F </div>
              <div class="condcard">
                <div class="curcondition">${data.current.condition.text}</div>
                <img src="${data.current.condition.icon}" />
              </div>
            </div>
             
           
          

          </div>`,
          `<div class="grouptemp">
          <div class="card">
            <div class="title">Wind Speed:</div>
            <div class="curwindspeed">${data.current.wind_mph}mph </div>
          </div>
          <div class="card">
            <div class="title">Wind Direction:</div>
            <div class="curwindspeed">${data.current.wind_dir}</div>
          </div>
          <div class="card">
            <div class="title">Precipitation:</div>
            <div class="curprecip">${data.current.precip_in}in </div>
          </div>
          <div class="card">
            <div class="title">Visibility:</div>
            <div class="curvisibility">${data.current.vis_miles}mi </div>
          </div>
          <div class="card">
            <div class="title">Humidity:</div>
            <div class="curhumidity">${data.current.humidity}%</div>
          </div>
          <div class="card">
            <div class="title">UV Index:</div>
            <div class="curuv">${data.current.uv}</div>
          </div>
        </div>
          `
        );
        for (let d = 0; d < 24; d++) {
          var str = `${data.forecast.forecastday[0].hour[d].time}`;
          console.log(str.split(" ").pop());
          $(".dayforecast").append(
            `
  <div class="daycast">
                <div class="daycard">
                <img src="${
                  data.forecast.forecastday[0].hour[d].condition.icon
                }" />
                <div class="daytemp">
                ${data.forecast.forecastday[0].hour[d].temp_f}
                </div>
                <div class="daytime">
                ${str.split(" ").pop()}
                </div>
                </div>
                </div>`
          );
        }
        let forecast = data.forecast.forecastday;
        console.log(forecast);
        $(".forecast").append(`<div class="foretitle">Weekly Forecast:</div>`);

        //      / ${forecast[idx].day.maxtemp_c}°C
        //      / ${forecast[idx].day.mintemp_c}°C
        $.each(forecast, (idx, forecastday) => {
          $(".forecast").append(
            `
            <div class="days">
            <div class="daysDate">Date: ${forecast[idx].date}</div>
            <div class="daysType">
            <div class="cond">
            ${forecast[idx].day.condition.text} 
            </div>
            
            <img src="${forecast[idx].day.condition.icon}" /></div>
            <div class="daysHighs">Highs of: ${forecast[idx].day.maxtemp_f}°F </div>
            <div class="daysLows">Lows of: ${forecast[idx].day.mintemp_f}°F </div>
            
            
          </div>`
          );
        });
      }).fail(function (e) {
        console.log("error", e);
      });
    }

    // if (zip != "") {
    //   $(".current").empty();
    //   $(".forecast").empty();
    //   let zipURL = baseUrl + apiKey + "&q=" + zip + "&days=4&aqi=no&alerts=no";
    //   $.getJSON(zipURL, (data) => {
    //     console.log(data);
    //     // $(".current").empty();<div class="curregion"> Region: ${data.location.region}</div>
    //     $(".current").append(
    //       `<div class="curlocal">
    //       <div class="curleft">
    //         <div class="lefttop">
    //           <div class="curlocation">${data.location.name}, ${data.location.country}</div>
    //           <div class="curupdate">${data.current.last_updated}</div>
    //         </div>
    //         <div class="latlon">
    //         <div class="lat">Latitude: ${data.location.lat}</div>
    //         <div class="lon">Longitude: ${data.location.lon}</div>
    //         </div>
    //         </div>

    //         <div class="curright">

    //         <div class="righttop">
    //           <div class="curtemp"> ${data.current.temp_f}°F</div>
    //           <div class="curfeelslike">Feels like: ${data.current.feelslike_f}°F</div>
    //           <div class="condcard">
    //             <div class="curcondition">${data.current.condition.text}</div>
    //             <img src="${data.current.condition.icon}" />
    //           </div>
    //         </div>

    //       </div>`,
    //       // / ${data.current.wind_kph}kph
    //       // / ${data.current.precip_mm}
    //       // / ${data.current.vis_km}km

    //       `<div class="grouptemp">
    //       <div class="card">
    //         <div class="title">Wind Speed:</div>
    //         <div class="curwindspeed">${data.current.wind_mph}mph </div>
    //       </div>
    //       <div class="card">
    //         <div class="title">Wind Direction:</div>
    //         <div class="curwindspeed">${data.current.wind_dir}</div>
    //       </div>
    //       <div class="card">
    //         <div class="title">Precipitation:</div>
    //         <div class="curprecip">${data.current.precip_in}in </div>
    //       </div>
    //       <div class="card">
    //         <div class="title">Visibility:</div>
    //         <div class="curvisibility">${data.current.vis_miles}mi </div>
    //       </div>
    //       <div class="card">
    //         <div class="title">Humidity:</div>
    //         <div class="curhumidity">${data.current.humidity}%</div>
    //       </div>
    //       <div class="card">
    //         <div class="title">UV Index:</div>
    //         <div class="curuv">${data.current.uv}</div>
    //       </div>
    //     </div>
    //       `
    //     );
    //     let forecast = data.forecast.forecastday;
    //     console.log(forecast);
    //     $(".forecast").append(`<div class="foretitle">Weekly Forecast:</div>`);

    //     //      / ${forecast[idx].day.maxtemp_c}°C
    //     //      / ${forecast[idx].day.mintemp_c}°C
    //     $.each(forecast, (idx, forecastday) => {
    //       $(".forecast").append(
    //         `
    //         <div class="days">
    //         <div class="daysDate">Date: ${forecast[idx].date}</div>
    //         <div class="daysType">
    //         <div class="cond">
    //         ${forecast[idx].day.condition.text}
    //         </div>

    //         <img src="${forecast[idx].day.condition.icon}" /></div>
    //         <div class="daysHighs">Highs of: ${forecast[idx].day.maxtemp_f}°F </div>
    //         <div class="daysLows">Lows of: ${forecast[idx].day.mintemp_f}°F </div>

    //       </div>`
    //       );
    //     });
    //   }).fail(function (e) {
    //     console.log("error", e);
    //   });
    // }
    console.log(city);
  });
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    let crdURL =
      baseUrl +
      apiKey +
      "&q=" +
      crd.latitude +
      " " +
      crd.longitude +
      "&days=4&aqi=no&alerts=no";
    // + "&days=4&aqi=no&alerts=no";
    $.getJSON(crdURL, (data) => {
      console.log(data);
      $(".current").append(
        `<div class="curlocal">
        <div class="curleft">
          <div class="lefttop">
            <div class="curlocation">${data.location.name}, ${data.location.region}</div>
            <div class="curupdate">${data.current.last_updated}</div>
          </div>
          <div class="latlon">
          <div class="lat">Sunrise: ${data.forecast.forecastday[0].astro.sunrise}</div>
          <div class="lon">Sunset: ${data.forecast.forecastday[0].astro.sunset}</div>
          </div>
          </div>

          <div class="curright">
         
          <div class="righttop">
            <div class="curtemp"> ${data.current.temp_f}°F </div>
            <div class="curfeelslike">Feels like: ${data.current.feelslike_f}°F </div>
            <div class="condcard">
              <div class="curcondition">${data.current.condition.text}</div>
              <img src="${data.current.condition.icon}" />
            </div>
          </div>
           
         
        

        </div>`,
        // / ${data.current.wind_kph}kph
        // / ${data.current.precip_mm}
        // / ${data.current.vis_km}km

        `<div class="grouptemp">
        <div class="card">
          <div class="title">Wind Speed:</div>
          <div class="curwindspeed">${data.current.wind_mph}mph </div>
        </div>
        <div class="card">
          <div class="title">Wind Direction:</div>
          <div class="curwindspeed">${data.current.wind_dir}</div>
        </div>
        <div class="card">
          <div class="title">Precipitation:</div>
          <div class="curprecip">${data.current.precip_in}in </div>
        </div>
        <div class="card">
          <div class="title">Visibility:</div>
          <div class="curvisibility">${data.current.vis_miles}mi </div>
        </div>
        <div class="card">
          <div class="title">Humidity:</div>
          <div class="curhumidity">${data.current.humidity}%</div>
        </div>
        <div class="card">
          <div class="title">UV Index:</div>
          <div class="curuv">${data.current.uv}</div>
        </div>
      </div>
        `
      );

      for (let d = 0; d < 24; d++) {
        var str = `${data.forecast.forecastday[0].hour[d].time}`;
        console.log(str.split(" ").pop());
        $(".dayforecast").append(
          `
<div class="daycast">
              <div class="daycard">
              <img src="${
                data.forecast.forecastday[0].hour[d].condition.icon
              }" />
              <div class="daytemp">
              ${data.forecast.forecastday[0].hour[d].temp_f}
              </div>
              <div class="daytime">
              ${str.split(" ").pop()}
              </div>
              </div>
              </div>`
        );
      }

      let forecast = data.forecast.forecastday;
      console.log(forecast);
      $(".forecast").append(`<div class="foretitle">Weekly Forecast:</div>`);
      $.each(forecast, (idx, forecastday) => {
        $(".forecast").append(
          `
          <div class="days">
          <div class="daysDate">Date: ${forecast[idx].date}</div>
          <div class="daysType">
          <div class="cond">
          ${forecast[idx].day.condition.text} 
          </div>
          
          <img class="dayimg" src="${forecast[idx].day.condition.icon}" /></div>
          <div class="daysHighs">Highs of: ${forecast[idx].day.maxtemp_f}°F </div>
          <div class="daysLows">Lows of: ${forecast[idx].day.mintemp_f}°F </div>
          
          
        </div>`
        );
      });
    }).fail(function (e) {
      console.log("error", e);
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    alert("Please Refresh");
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}

/* The `$(document).ready()` function is a jQuery function that is used to specify a function to
execute when the DOM (Document Object Model) is fully loaded. In this case, the function is
retrieving data from a JSON file using the `getData()` function. */
$(document).ready(function () {
  initListeners();
  //   getData();
});
