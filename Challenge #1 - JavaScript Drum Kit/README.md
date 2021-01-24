# JavaScript30, Challenges No. 1 - Drum Kit

![Drumkit](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%231%20-%20JavaScript%20Drum%20Kit/Drumkit.PNG)

# Description
A basic drum keyboard that plays a sound associated to the key pressed. 

## playSound()
It will determine which key on the keyboard is being pressed to play the relevant audio and transform the key for visual effects.

## removeTransition()
It removes the key visual effects to its neutral state after the transition has ended.

## Improvements made 
**The issue:** When a key is held down it spams the sound causing noisy clashes of audios.<br/>
**The solution:** Inside the playSound() function, the code below is added to exit the function after a sound is played if a key is being held down for too long.

```javascript
if (e.repeat) return;
```


