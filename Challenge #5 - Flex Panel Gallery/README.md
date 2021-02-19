# Challenges No. 5 - Flex Panel Gallery

![Flex Panel Gallery](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%235%20-%20Flex%20Panel%20Gallery/Flex%20Panel%20Gallery.PNG)

# Description 
Flex Panel on Click for more details.

## toggleOpen() 
To toggle .open class on clicked image. 
```css
  .open {
    flex: 5;
    font-size: 40px;
  }
```

```javascript
  function toggleOpen() {
    this.classList.toggle('open');
  }
```

## toggleActive()
To toggle top and bottom text transition once image flex transition is completed
```javascript
  function toggleActive(e) }
    if(e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
```

## Improvements
To shrink prior active panel when another panel is clicked.

There are 2 conditions to be met
1. When the same image is clicked it does the opposite action depending on what the prior state it is in. 
2. When another image is clicked to flex, the prior image should shrink. 

### Variable declaration 
firstClick: To determine if it's the first click on flex panel
previousClickOpen: Previous clicked flex panel
currentClickOpen: Current clicked flex panel
```javascript
  var firstClick = true, previousClickOpen, currentClickOpen;
```

### Adding event listeners to each panel
When a click is registered on any of the panel the toggleOpen() function will initiate.
```javascript
  const panels = document.querySelectorAll(".panel");
  panels.forEach(panel => panel.addEventListener("click", toggleOpen));
```

### addActive()
```javascript
  this.classList.add('open-active');
  this.removeEventListener('transitionend', addActive);
```
1. To add .open-active class 
2. Remove event listener to prevent top and bottom text from transitioning in again after it has transited out.

### removeActive() 
```javascript
  function removeActive() {
    this.classList.remove('open-active');
    this.removeEventListener('transitionend', removeActive);
```
1. To remove .open-active class
2. Remove event listener to allow top and bottom text to transition in again after it has transited out.

### removeOpenActive()
```javascript
  function removeOpenActive() {
     panels.forEach(panel => {
        panel.classList.remove('open');
        panel.classList.remove('open-active');
     })
  }
```
To restore each panel to it's original state by removing .open and .open-active class.

### toggleOpen() 
There are 3 conditions:- 
1. First click
2. If current clicked panel is different from previously clicked panel
3. If current clicked panel is equal to previously clicked panel

```javascript
  function toggleOpen(e) {

      currentClickOpen = this.classList;

      //Case 1: To add effect the first image clicked
      if (firstClick) {

        this.classList.add('open');
        this.addEventListener('transitionend', addActive); 

        firstClick = false;

        //Case 2: If a different image is clicked, remove all effects from classLists of each node and add effects to current image
      } else if (previousClickOpen !== currentClickOpen) {

        removeOpenActive();

        this.classList.add('open');
        this.addEventListener('transitionend', addActive);

        //Case 3: If the same image is clicked, remove all affects, and restore firstClick to true;  
      } else if (previousClickOpen === currentClickOpen) {

        removeOpenActive();

        this.addEventListener('transitionend', removeActive);

        firstClick = true;

      }

      previousClickOpen = currentClickOpen;

    }
```
