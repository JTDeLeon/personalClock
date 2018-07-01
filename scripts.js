//Target hands
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

setInterval(()=>{
    //set date
    let date = new Date();

    //instantiate variables
    let currentHour, currentMin, currentSec;

    //Set time in variables
    if(date.getHours() > 12) {    
        currentHour = date.getHours()-12;
    }
    else{
        currentHour = date.getHours();
    }

    currentMin = date.getMinutes();
    currentSec = date.getSeconds();

    //Set degrees to rotate
    let hourDeg = 90+(currentHour*30);
    let minDeg = 90+(currentMin*6);
    let secDeg = 90+(currentSec*6);

    //every hour is 30 degrees
    addRotate(hourHand,hourDeg);

    //every minute & second is 6 degrees
    addRotate(minHand,minDeg);
    addRotate(secHand,secDeg);

},1000);

function addRotate(element,degree){
    element.style.transform = `rotate(${degree}deg)`;
    element.style.transformOrigin = '100%';
    // element.style.transitionTimingFunction = 'ease-in-out';
    // element.style.transition = 'all 0.05s';
    // element.setAttribute('style','transition-timing-function: cubic-bezier(1, 0.25, 0.54, 1.17); transition: all 0.05s; transform-origin: 100%;'+ `transform: rotate(${degree}deg)`);
}