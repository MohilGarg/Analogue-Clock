var hourhand = document.querySelector('.hour');
var minutehand = document.querySelector('.minute');
var secondhand = document.querySelector('.second');

function rotate(){
    const currentDate = new Date();
 
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds(); 
 
    const secondFraction = seconds/60; 
    const minuteFraction = (secondFraction+minutes)/60;
    const hourFraction = (minuteFraction+hours)/12;
 
    const secondsRotate = secondFraction*360;      
    const minutesRotate = minuteFraction*360;
    const hoursRotate = hourFraction*360;
 
    secondhand.style.transform = `rotate(${secondsRotate}deg)`
    minutehand.style.transform = `rotate(${minutesRotate}deg)`
    hourhand.style.transform = `rotate(${hoursRotate}deg)`
 
}
 
setInterval(rotate, 1000)  