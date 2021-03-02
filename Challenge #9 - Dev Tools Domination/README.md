# Challenges No. 9 - Dev Tools Domination!

# Description 
Advance console tools that be used to check data 

## console.log('%s', 'string') for string
%s: to append string with what is provided info after comma
```javascript
  console.log("%s, I'm Nicholas", "Hello");
  //Return Hello, I'm Nicholas
```

## console.log( '%c', 'style') for styling
```javascript
  console.log("%c style test!","background-color: red");
  //Return style test! with a red background color
```

## warning message
```javascript
  console.warn("Beep beep!")
```

## error message
```javascript
  console.error("Oh no!");
```

## Testing message
```javascript
  console.assert(1===2, "wrong!");
```

## Clear log
```javascript
  console.clear();
```

## To view dom objects
```javascript
  console.dir(document.querySelector('p'));
```

## Group data together
```javascript
  dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  })
```

## Counting 
To count iterately 
```javascript
  console.count('yes');
  console.count('no');
  console.count('yes');
  console.count('no');
  // Return yes: 2, no: 2
```

## Timing 
Too time how long it takes to fetch data
```javascript
  console.time('fetching data');
  fetch('https://api.github.com/users/wesbos')
  .then(data => data.json) 
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })
  
  //Return fetching data: 360.6969ms
```

## Table
```javascript
  console.table(dogs);
```
