var locations = []; // this array will hold your objects

// object constructor
function State(state, revenue, locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function(){
    var avg = revenue / locationCount;
    return avg;
  }
}

// object instances
var illinois = new State("il", 5000, 12);
var minnesota = new State("mn", 300, 3);
var nevada = new State("nv", 25000, 1);

// push object instances to locations array
locations.push(illinois);
locations.push(minnesota);
locations.push(nevada);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span><strong>State: </strong>' + element.state.toUpperCase() + ' |</span>');
    $li.append('<span><strong>Total revenue: </strong>' + element.revenue + ' |</span>');
    $li.append('<span><strong>Total locations: </strong>' + element.locationCount + ' |</span>');
    $li.append('<span><strong>Average revenue: </strong>' + element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
