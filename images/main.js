var racecarImg = document.querySelector('.racecar');

var car = {
direction: ''
}



// listens for keydown event, turns car in arrow direction, and updates data model
window.addEventListener('keydown', function() {
  if (event.key === 'ArrowLeft') {
    racecarImg.className = 'racecar west';
    car.direction = 'west';
  } else if (this.event.key === 'ArrowRight') {
    racecarImg.className = 'racecar';
    car.direction = 'east';
  } else if (this.event.key === 'ArrowUp') {
    racecarImg.className = 'racecar north';
    car.direction = 'north';
  } else if (this.event.key === 'ArrowDown') {
    racecarImg.className = 'racecar south';
    car.direction = 'south';
  }
})