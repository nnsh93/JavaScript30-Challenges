# Challenges No. 17 - Sort Without Articles

![Sort Without Articles](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%2317%20-%20Sort%20Without%20Articles/Sort%20Without%20Article%20Image.PNG)

# Description
To sort band names ignoring the article 'The, An, A'

## HTML 
```html
  <ul id="bands"></ul>
```
## Javascript
```javascript
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  const orderedEle = document.getElementById('bands');

  // 1. Function to remove article 'The','A', "An"

  function strip(bandName) {

    const articleRegex = new RegExp(/^(The|An|A)\s/, 'i');

    return bandName.replace(articleRegex, '');  
  }

  // 2. Function to sort the array
  const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

  // 3. Append list elements onto unordered list
  sortedBands.forEach(sortedBand => {

    // 3.1 Create list element
    const listEle = document.createElement('li');

    // 3.2 Input text from sortedBands arrays into list element
    listEle.textContent = sortedBand;

    // 3.3 Append list onto unordered list
    orderedEle.appendChild(listEle);
  })
```
