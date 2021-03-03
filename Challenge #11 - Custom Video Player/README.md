# Challenges No. 11 - Custom Video Player

![Checkbox](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%2311%20-%20Custom%20Video%20Player/Custom%20Video%20Player.PNG)

# Description 
Custom Video Player 

## HTML 
```html
  <body>

     <div class="player">
       <video class="player__video viewer" src="/652333414.mp4"></video>

       <div class="player__controls">
         <div class="progress">
          <div class="progress__filled"></div>
         </div>
         <button class="player__button toggle" title="Toggle Play">►</button>
         <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
         <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
         <button data-skip="-10" class="player__button">« 10s</button>
         <button data-skip="25" class="player__button">25s »</button>
       </div>
     </div>

    <script src="scripts.js"></script>
  </body>
```

## To get all Elements from DOM
```javascript
  //To fetch all relevant DOM elements for interaction
  const player = document.querySelector(".player");
  const video = player.querySelector(".viewer");
  const progress = player.querySelector(".progress");
  const progressBar = progress.querySelector(".progress__filled");
  const toggle = player.querySelector(".toggle");
  const skipButtons = player.querySelectorAll("[data-skip]");
  const ranges = player.querySelectorAll(".player__slider");
```

## Functions
### To toggle video to pause or play
```javascript
  function togglePlay() {
    const method = video.paused ? video.play() : video.pause();
  }
```
### To change play/pause icon accordingly
```javascript
  function updateButton() {
    const icon = this.paused ? '►' : '▌▌';
    toggle.textContent = icon;
  }
```
### To skip videos
```javascript
  function skip() {
    const time = this.dataset.skip;
    video.currentTime += parseFloat(time);
  }
```
### To make changes based on slider pull
```javascript
  function handleRangeUpdate() {
    video[this.name] = this.value;
   }
```
### To grow progress according to video time
```javascript
  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }
```
### To play video depending on where the progressbar is clicked
```javascript
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }
```

##Adding Event Listeners
```javascript
  toggle.addEventListener('click', togglePlay);

  video.addEventListener('click',togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);

  skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

  let mousedown = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // When mousedown is true it will move on the scrub(e). Cool!
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
```
## Future Improvements
TBD
