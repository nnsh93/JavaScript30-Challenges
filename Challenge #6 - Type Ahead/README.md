# Challenges No. 6 - AJAX Type Ahead

![Type Ahead Gallery](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%236%20-%20Type%20Ahead/Type%20Ahead%20Img.PNG)

# Description 
Show live mdetails as input is given

## To fetch and convert data from JSON then push it into cities array using spread operator
```javascript
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
  .then(datas => datas.json())
  .then(data => cities.push(...data));

```

## To filter and return matched searches
```javascript
  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      let regex = new RegExp(wordToMatch,'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }
```
## To format numbers using regex
```javascript
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
```

## To append matched data to suggestion unordered list element
```javascript
    // To append matched data to search bar
    function displayMatches() {
      const matchArray = findMatches(this.value, cities);
      console.log(matchArray);
      const html = matchArray.map(place => {

        const regex = new RegExp(this.value, 'gi');

        //To highlight text
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        console.log(cityName,stateName);
        return `
          <li> 
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `;
      }).join('');

      suggestions.innerHTML = html;
    }
```

## Calling DOM elements and adding event listeners (To listen for changes and key up)
```javascript
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
```
