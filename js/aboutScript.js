menuToggler.addEventListener('click', ev => {
   menu.classList.toggle('open');
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


const faqButtons = document.querySelectorAll('.faq-button');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});