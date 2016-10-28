var locations = []; // this array will hold your objects

// object constructor
function State(state, rev, locations){
  this.state = state;
  this.revenue = rev;
  this.locationCount = locations;
  this.averageRevenue = function(){
    var avg = this.revenue / this.locationCount;
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
