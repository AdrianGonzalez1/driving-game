var car = {
direction: ''

}

var racecarImg = document.querySelector('.racecar')


window.addEventListener('keydown', function() {
  if (event.key === 'ArrowLeft') {
    racecarImg.className = 'racecar west';
    car.direction = 'west';
    this.console.log(event.key)
    this.console.log(car)
  } else if (this.event.key === 'ArrowRight') {
    racecarImg.className = 'racecar';
    car.direction = 'east';
    this.console.log(event.key)
    this.console.log(car)
  } else if (this.event.key === 'ArrowUp') {
    racecarImg.className = 'racecar north';
    car.direction = 'north';
    this.console.log(event.key)
    this.console.log(car)
  } else if (this.event.key === 'ArrowDown') {
    racecarImg.className = 'racecar south';
    car.direction = 'south';
    this.console.log(event.key)
    this.console.log(car)
  }
})