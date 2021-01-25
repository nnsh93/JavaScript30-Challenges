# Challenge No. 2 - JSS and Clock

![JS and CSS Clock](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%232%20-%20JS%20and%20CSS%20Clock/JS%20and%20CSS%20Clock.PNG)

# Description
A digital clock 


## setInterval()
This is crucial to run the setDate function every 1000ms so the clock needle moves accordingly
```javascript
setInterval(setDate, 1000);
```

## setDate() 
Seconds, minutes, and hours is retrieve from the following code:-
```javascript
let date = new Date(); 

let seconds = date.getSeconds(); 
let minutes = date.getMinutes();
let hous = date.getHours(); 
```

After the value of time is retrieved, rotation transformation have to be applied to each needle to move accordingly with the following code:-
```javascript
const secondHand = document.querySelector('.second-hand')

secondHand.style.transform = `rotate(${((seconds / 60) * 360) + 90}deg)`;
```
The same is repeated for the rest of the needle but the division of hour is by 12 instead of 60 because there's only 12 hours per revolution. All needle rotations have to be compensated by +90 degrees due to the nature of CSS design whereby the needle is originally horizontal. 

## Improvement 
**The issue:** During the transition of the needle from the end back to the start on the following mark (59 seconds to 0 seconds, 59 minutes to 0 minutes, 11 hours - 12 hours, 23 hours - 0 hours) the needle reverses in transformation. 

**The solution:** To off the transition at this marks so the reverse can't be seen with the following code:-
```javascript
(seconds == 0) ? secondHand.style.transition = `initial` : secondHand.style.removeProperty('transition');
```

However, I do not like this solution as when the needle moves on this marks the transition is removed completely. 

## Future fixes
To figure out how to keep the transition intact on the above marks.

