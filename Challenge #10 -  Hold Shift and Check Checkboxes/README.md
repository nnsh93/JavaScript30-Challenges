# Challenges No. 10 - Hold Shift and Check Checkboxes

# Description 
Checklist 

## To call HTML DOM for checkboxes
```javascript
  checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");
```

## lastChecked
This variable is required assign the latest clicked checkbox

## handleCheck()
```javascript
  function handleCheck(e) {
    //Check if shift held down && check if checkbox is checked
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
      //If checkbox is the current clicked checkbox or checkbox is the last clicked checked box inBetween boolean changes
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
        }
      //If inBetween is true, checkboxes in between will be checked.
        if(inBetween) {
          checkbox.checked = true;
        }
      })
    }
    lastChecked = this;
  }
```

##Event listener to hear for click
```javascript
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
```
