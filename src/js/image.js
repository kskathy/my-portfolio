document.addEventListener("DOMContentLoaded", function () {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };
  

     //PROJECT ANIMATION
    //  function reveal() {
    //     var reveals = document.querySelectorAll(".reveal");
      
    //     for (var i = 0; i < reveals.length; i++) {
    //       var windowHeight = window.innerHeight;
    //       console.log(windowHeight)
    //       var elementTop = reveals[i].getBoundingClientRect().top;
    //       var elementVisible = 0;
      
    //       if (elementTop < windowHeight - elementVisible) {
    //         reveals[i].classList.add("active");
    //       } else {
    //         reveals[i].classList.remove("active");
    //       }
    //     }
    //   }
    //   window.addEventListener("scroll", reveal);

      

      
    // TEXT ANIMATION
    let fadeupCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
        container.classList.add("not-fading-up");
  
        if (entry.isIntersecting) {
          container.classList.add("fading-up");
          return;
        }
  
        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("fading-up");
        }
      });
    };
  
    let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
  
    document.querySelectorAll(".fadeup").forEach((fadeup) => {
      fadeupObserver.observe(fadeup);
    });
  });
  

// SCROLLING ELEMENTS
  const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});