# Challenges No. 16 - Mouse Move Shadow

![Mouse Move Shadow](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%2316%20-%20Mouse%20Move%20Shadow/Mouse%20Over%20Shadow%20Image.PNG)

# Description
Responsive Shadow Effect Based on Mouse Position

## HTML 
```html
  <div class="hero">
    <h1 contenteditable>🔥WOAH!</h1>
  </div>
```
## Javascript
```javascript
  const hero = document.querySelector(".hero");
  const text = hero.querySelector("h1");
  const walk = 150;

  function textShadow(e) {

    // 1. Getting the coordinates of the mouse
    const {offsetWidth: width, offsetHeight: height} = hero; // ES6 Destructuring
    let {offsetX: x, offsetY: y} = e; 
    
    // 1.1 If the mouse is in the h1 element boundaries, it'll add the current mouse coordinate to the position of the h1 element
    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    //console.log(this,e.target) // 'This' will return if the DOM that the eventListener is attached to is within boundaries. As for 'target', it return whichever element the mouse is actively hovering.
    
    // 2. To calculate the text shadow
    const xWalk = Math.round(( x / width * walk ) - ( walk / 2 ));
    const yWalk = Math.round(( y / height * walk ) - ( walk / 2 ));

    // 3. Style text shadow 
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,0,0.7), 
    ${xWalk * -1 }px ${yWalk}px 0 rgba(255,255,0,0.7), 
    ${xWalk}px ${yWalk * -1}px 0 rgba(0,255,255,0.7), 
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255,0,255,0.7) `;
    
  }
```
