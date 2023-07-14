// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.

menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
});

const chooseUsSection = document.querySelector('#chooseUsScroll');
const chooseUsItems = chooseUsSection.querySelectorAll('.item');

function animateChooseUsItems() {
  chooseUsItems.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight) {
      item.classList.add('animate');
    }
  });
}
animateChooseUsItems();

window.addEventListener('scroll', () => {
  animateChooseUsItems();
});


const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}


function scrollFunction() {
  const slideUpBoxes = document.querySelector(".scrollBoxes");
  if (isElementInViewport(slideUpBoxes)) {
    document.getElementById("scrollToggler").className = "slideUp";
    boxScroll.classList.toggle('appear');
    window.removeEventListener('scroll', scrollFunction);
  }
}
  
window.addEventListener('scroll', scrollFunction);



const scrollCounter = () => {
  const counterSection = document.querySelector(".strip");
  if (isElementInViewport(counterSection)) {
    const counters = document.querySelectorAll(".count");
    const speed = 550;

    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.getAttribute("data-count");
        let count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
          count += increment;
          counter.innerText = Math.floor(count);
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });

    window.removeEventListener('scroll', scrollCounter);
  }
};

window.addEventListener('scroll', scrollCounter);




const newCatBtn = document.getElementById('new-cat-btn');
      const catImage = document.getElementById('cat-image');
      
      function fetchRandomCatImage() {
        fetch('https://api.thecatapi.com/v1/images/search')
          .then(response => response.json())
          .then(data => {
            const imageUrl = data[0].url;
            catImage.src = imageUrl;
          })
          .catch(error => console.error(error));
      }
      newCatBtn.addEventListener('click', fetchRandomCatImage);    
      
      fetchRandomCatImage();




