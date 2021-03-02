# Challenges No. 7 - CARDIO ARRAY 2

# Description 
More array exercises! 

## Variable data
```javascript
    const peoples = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
```

## .some and .every
Rectify if some or every data in an array is true given the condition.
```javascript
  peoples.some => (new Date().getFullYear() - poeple.year >= 19);
  //Return true
```

If anyone from the peoples array is >= 19 years old. It returns true

```javascript
  peoples.every => (new Date().getFullYear() - people.year >= 19);
  //Return false
```

Everyone from the peoples array has to be >= 19 years old to return true. 

## .find
Similar to filter, but return the object for the one that is looked for
```javascript
  comments.find(commet => comment.id == 823423)
  // Returns {text:'Super good', id: 823423}
```

## .findIndex
To find index
```javascript
  let toDelete = comments.findIndex(comment => comment.id == 823423);
  comments.splice(toDelete, 1);
  console.table(comments);
```



