# Challenges No. 1 - Drum Kit

![Drumkit](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%231%20-%20JavaScript%20Drum%20Kit/Drumkit.PNG)

# Description
A drum keyboard.

## HTML
Each key has a sound associated to it.
```html
<div data-key="65" class="key">
  <kbd>A</kbd>
  <span class="sound">clap</span>
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>
```

## JavaScript
### ```window.addEventListener('keydown', playSound)```
Event listener are require to retrieve data from any key on the keyboard that is pressed.

#### playSound()
When a key is pressed this function is called. Since each key has a unique code the following code is used to retrieve the class element if any.
```javascript
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
```
Next is to check whether there is an audio element for the following data key. If none, exit function.
```javascript
if (!audio) return;
```
If audio is available a transition effect is added and the audio is played from time = 0.  
```javascript
key.classList.add('.playing');

audio.currentTime = 0;
audio.play();
```
The ```audio.currentTime``` method is important because audio files has a duration of how long it will play. Without it, if the same keys is being pressed rapidly the next audio won't sound until the current active sound it has ended.

### ```key.addEventListener('transitionend', removeTransition)```
This is important as it listens to any active transition that has ended. If it does, the removeTransition function is called.
```javascript
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```

#### removeTransition()
It removes the key visual effects to its neutral state
```javascript
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
```
## Improvements made 
**The issue:** When a key is held down it spams the sound causing noisy clashes of audios.<br/>
**The solution:** Inside the playSound() function, the code below is added to exit the function after a sound is played if a key is being held down for too long.
```javascript
function playSound(e) {
  if (e.repeat) return; //To exit function if a key is held down.
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  etc....
```


