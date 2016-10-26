var locations = []; // this array will hold your objects

// object constructor
function State(state, revenue, locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  function averageRevenue(){
    return this.this.revenue / this.this.locationCount;
  }
  averageRevenue();
}

// object instances
var illinois = new State("il", 5000, 12);
console.log(illinois.state);

var minnesota = new State("mn", 300, 3);
console.log(minnesota.state);
var nevada = new State("nv", 25000, 1);
console.log(nevada.state);

// push object instances to locations array
locations.push(illinois);
locations.push(minnesota);
locations.push(nevada);

console.log(locations);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
