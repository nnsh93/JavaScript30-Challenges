# Challenges No. 4 - Array Cardio Day 1

# Description
Functional program practices using the following methods
- filter()
- map()
- sort() 
- reduce()

## Data
```javascript
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, 
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, 
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, 
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 } 
];

const peoples = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
```

### Filtering the list of inventors for those born in the 1500's using filter method
The filter method is used to filter those born more than 1499 AND less than 1600
```javascript
console.table(inventors.filter(people => people.year > 1499 && people.year < 1600))
```
### Returning an array of inventors first and last name only using map method
**Method 1**</br>
Returning a new object
```javascript
console.table(inventors.map(people => {
  return {
    first: people.first,
    last: people.last
  }
}));
```

**Method 2**</br>
Deleting the unnecessary object keys and return what's left
```javascript
console.table(inventors.map(people => {
  delete people['year'];
  delete people['passed'];
  return people;
}));
```

### Sorting inventors by birthdate, oldest to youngest using sort method
```javascript
console.table(inventors.sort((a, b) => a.year - b.year))
```

### Calculate the sum of years all the inventors has lived
console.log(inventors.reduce((sum, a) => sum + (a.passed - a.year), 0); 

#### Additional Table 
To return a new table with a data of how long each inventor has lived and sorted from longest to shortest lived.
```javascript
console.table(inventors.map(person => {
  return {
    first: person.first,
    last: person.last,
    year: person.year,
    passed: person.passed,
    lived: person.passed - person.year
  }
}).sort((a, b) => {
  return (b.passed - b.year) - (a.passed - a.year);
}));
```

### Creating a list of Boulevards in Paris that contain 'de' anywhere in the name by retrieving information from https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris<br>
The code below is run on the wikipedia console.
```javascript
const category  = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));

links.map(link => link.textContent).filter(link => link.includes('de'));
```
1. Extract all elements under the ```mw-category``` class with ```const category = document.querySelector(".mw-category");```
2. Extract and store all 'a' tag elements in ```category``` variable into ```links``` variable and transform it into an array with ```Array.from``` to allow the application of array method.
3. map() is used on ```links``` variable to return each data's that includes 'de' using filter().

### Sort peoples data alphabetically by last name
```javascript
console.table(peoples.map(people => {
  return {
    firstName: people.split(",")[1],
    lastName: people.split(",")[0]
  }
}).sort((a,b) => a.last > b.last ? 1 : -1 ));
```
1. Since data in array is a combination of both last name and first name separated by a comma. First, it is necessary to split each data using ```.split(",")``` where by the first and second splitted array will be the lastName and firstName. 
2. Then only able to sort the last name alphabetically. 

### Sum the instances of the data array provided below
#### Data
```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
```
#### Code
```javascript
console.log(data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  } /* else if (obj[item]) { This part of the code doesn't work because if a property does not exist in an object it returns undefined instead of false
    obj[item]++
  }
  */

  obj[item]++;

  return obj;
}, {}));
```
