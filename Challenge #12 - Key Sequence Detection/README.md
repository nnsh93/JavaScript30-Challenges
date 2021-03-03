# Challenges No. 12 - Key Sequence Detection

![Key Sequence Detection](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%2312%20-%20Key%20Sequence%20Detection/Key%20Sequence%20Detection.PNG)

# Description 
Custom Video Player 

## Javascript
### Variable declaration
```javascript
  const pressed = [];
  const secretCode = 'wesbos'; //Declare secret code!
```
### Event listener and function
```javascript
  //Runs after any keypressed is released.
  window.addEventListener('keyup', (e) => {
    //Push entered key value into pressed array 
    pressed.push(e.key);
    
    // 1st value: When index is of -ve value if goes from right. -1 will be the first from right. 
    // 2nd value: When the number to delete is -ve. Nothing will happen
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  
    if (pressed.join('').includes(secretCode)) {
      console.log('DING DING! SECRET CODE ENTERED');
      cornify_add(); //To add effect from cornify library when code is typed
    }
  });
```
