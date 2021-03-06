"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var a = [];
  console.log(JSON.stringify(carsJSON));
  $.each(carsJSON, function(index, car) {
    a.push(
    '<div class="col-md-4 car">' +
        '<h2>' + car["Make"] + '</h2>' +
        '<p><strong>Model:</strong> ' + car['Model'] + '</p>' +
        '<p><strong>Year:</strong> ' + car['Year'] + '</p>' +
    '</div>');
  });
  var html = '<div class="row">' + a.join("") + '</div>'
  // console.log(html);
  return html;
  // <div class="row">
  //   <div class="col-md-4 car">
  //     <h2>Chevrolet</h2>
  //     <p><strong>Model:</strong> Tahoe</p>
  //     <p><strong>Year:</strong> 2012</p>
  //   </div>
  //   <div class="col-md-4 car">
  //     <h2>Toyota</h2>
  //     <p><strong>Model:</strong> Camry</p>
  //     <p><strong>Year:</strong> 2002</p>
  //   </div>
  //   <div class="col-md-4 car">
  //     <h2>Mercedes-Benz</h2>
  //     <p><strong>Model:</strong> E-Class</p>
  //     <p><strong>Year:</strong> 1998</p>
  //   </div>
  // </div>

}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var num = ($('.col-md-4.car').length + 3)/3
  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/" + num +"/3"
  // console.log(url);
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
}
