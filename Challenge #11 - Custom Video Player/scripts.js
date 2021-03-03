/* To get all Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = progress.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/********************
Build functions 
********************/
// To toggle video to pause or play
function togglePlay() {
    const method = video.paused ? video.play() : video.pause();
}

//To change play/pause icon accordingly
function updateButton() {
    const icon = this.paused ? '►' : '▌▌';
    toggle.textContent = icon;
}

//To skip videos
function skip() {
    const time = this.dataset.skip;
    video.currentTime += parseFloat(time); 
}

//To make changes based on slider pull
function handleRangeUpdate() {
     video[this.name] = this.value;
}

// To grow progress according to video time
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// To play vdeo depending on where the progressbar is clicked
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log("it's working!");
}

/********************
 Adding event listeners 
 ********************/
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