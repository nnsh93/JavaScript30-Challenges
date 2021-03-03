# Challenges No. 13 - Slide in on Scroll

![Slide in on Scroll](https://github.com/nnsh93/JavaScript30-Challenges/blob/main/Challenge%20%2313%20-%20Slide%20in%20on%20Scroll/Slide%20in%20On%20Scroll.PNG)

# Description 
Slide in on Scroll

## Javascript
### Debounce function
To reduce the frequency of the function being executed controlled by the miliseconds(wait). Else, too much data will be fed when scrolled causing performance issue.
```javascript
  function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
```

### Reach for images element with class 'slide-in'
```javascript
  const sliderImages = document.querySelectorAll('.slide-in');
```

### CheckSlide function
```javascript
  function checkSlide(e) {
    sliderImages.forEach(slideImage => {
      //scrollY: Indicates the top of the visible page
      //innerHeight: Indicates with height of browser display
      //slideImage.height: Indicates the height of each image
      const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2; //half way through the image

      //sliderImage.offsetTop : indicates how far is the image from the top of the page 
      const imageBottom = slideImage.offsetTop + slideImage.height; // bottom of the image

      const isHalfShown = slideInAt > slideImage.offsetTop; 
      const isNotScrolledPast = window.scrollY < imageBottom; 
      if (isHalfShown && isNotScrolledPast) {
        slideImage.classList.add('active');
      } else {
        slideImage.classList.remove('active');
      }
    })
  }
```

### Event Listener 
```javascript
  window.addEventListener('scroll', debounce(checkSlide));
```
