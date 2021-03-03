# Challenges No. 15 - Local Storage & Event Delegation

![Localstorage](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%2315%20-%20LocalStorage/Localstorage.PNG)

# Description
Local Storage & Event Delegation

## HTML 
```html
  <div class="wrapper">
    <h2>LOCAL TAPAS</h2>
    <p></p>
    <ul class="plates">
      <li>Loading Tapas...</li>
    </ul>
    <form class="add-items">
      <input type="text" name="item" placeholder="Item Name" required>
      <input type="submit" value="+ Add Item">
    </form>
  </div>
```
## Javascript
### Fetch HTML element
```javascript
  const addItems = document.querySelector('.add-items'); // Form elemenet
  const itemList = document.querySelector('.plates'); // Unordered List
```
### Check local storage
```javascript
  const items = JSON.parse(localStorage.getItem('items') || []; // JSON parse required to fetch string data from localstorage
```
### addItem() function
To add item to list
```javascript
  e.preventDefault(); //Prevent page from re-load after submit
  
  const text = (this.querySelector('[name=item]')).value; // To fetch input from input box of name 'item';
  const item = {
    text,
    done: false;
  };
  
  items.push(item);
  populateList(items, itemsList);
  
  //Set items to localStorage
  localStorage.setItem('items', JSON.stringify(items)); // Stringify required because localStorage can only store in string
  this.reset(); // To reset form input text
```
### populateList() function
To populate list of items in html format
```javascript
   function populateList(plates = [], platesList) {
      platesList.innerHTML = plates.map((plate, i) => {

        //id in input element and for in label element helps link the both element. For the event that input is checked, it will strikethrough the label.
        return `
        <li>
          <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}/>
          <label for="item${i}">${plate.text}</label>
        </li>
      `
      }).join('');
   }
```
### toggleDone function
```javascript
    function toggleDone(e) {
      if(!e.target.matches('input')) return; //skip this unless it's an input element
      const el = e.target;
      const index = el.dataset.index;
      items[index].done = !items[index].done; //Changes object done value to false/true;
      localStorage.setItem('items', JSON.stringify(items)); //Update items in local storage
      populateList(items,itemsList); //Update List item
    }
```
### Event Listeners
```javascript
    addItems.addEventListener('submit', addItem);
    itemsList.addEventListener('click', toggleDone); // Event delegation: Event listener is added to UL to hear for clicks on it's LI children.
    populateList(items, itemsList);
```

## Future Improvements
Make button that clear all, check all, and uncheck all.
