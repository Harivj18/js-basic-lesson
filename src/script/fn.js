/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable semi */
function Car () {
    let milesDriven = 0;
    let speed = 0;
    this.accelerate = (velocity, distance) => {
        speed += velocity;
        milesDriven += distance;
    }
    this.getMilesDriven = () => milesDriven;
    this.getspeed = () => speed;
}
const testCarModule = new Car();
console.log('Miles :' + testCarModule.getMilesDriven());
console.log('Speed :' + testCarModule.getspeed());

testCarModule.speed = 100;
testCarModule.milesDriven = 10;
console.log('Miles :' + testCarModule.getMilesDriven());
console.log('Speed :' + testCarModule.getspeed());

testCarModule.accelerate(4, 10);
console.log('Miles :' + testCarModule.getMilesDriven());
console.log('Speed :' + testCarModule.getspeed());
