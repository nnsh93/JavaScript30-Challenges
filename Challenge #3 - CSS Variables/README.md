# Challenges No. 3 - CSS Variable

![JS and CSS Clock](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%233%20-%20CSS%20Variables/CSS%20Variabls.PNG)
# Description
To be able to adjust the image padding, blur, opacity and base color.

## HTML
Input type of range so adjustment can be made to the picture and input type of color will open the windows default paint when clicked.
```html
<div class="controls">
  
  etc... 
  
  <label for="opacity">Opacity:</label>
  <input id="opacity" type="range" name="opacity" min="0" max="100" value="50">
  
  <label for="base">Base Color</label>
  <input id="base" type="color" name="base" value="#ffc600">
</div>
```
- value: To set default value on start

## CSS
Variable has to be declared on the :root while img selector will use these variables on the designated properties
```css
:root {
  --base: #ffa500;
  --blur: 10px;
  --spacing: 10px;
  --opacity: 50;
}

img {
  background: var(--base);
  filter: blur(var(--blur));
  padding: var(--spacing);
  opacity: calc(var(--opacity)/100);
}

```
- calc(): Allows for mathematical computational on CSS<br/>
HTML opacity input has a range between min = "0" and max = "100". However, CSS opacity property only takes in 0 to 1. I can't place HTML range between 0 to 1 because the slider values only allow whole integer and not decimal. Thus, the opacity variable has to be divided by 100. 

## JavaScript
### 1. Register changes of value in sliders
```javascript
const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); 
inputs.forEach(input => input.addEventListener('change', handleUpdate)); 
```
The ```mousemove``` event listener is to detect changes in values of the slider as the mouse moves it and apply the changes. While the ```change``` is to apply the changes in value for the color box. 

### 2. To set property to the designated elements using the handleUpdate() function
```javascript
function handleUpdate() {
  // Takes data element from the selected element. If there is data-now and data-sizing the return object would be { now: "x", sizing: "z" }. 
  // '' happens when data-set is non existence. This is for the case of input type=color
  const suffix = this.dataset.sizing || ''; 
  document.querySelector('img').style.setProperty(`--${this.name}`, this.value+suffix);
}
```

## Addition made
Opacity slider. 
