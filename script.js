/* ================= CUSTOM CURSOR ================= */

const ring = document.querySelector(".cursor-ring");
const dot = document.querySelector(".cursor-dot");


window.addEventListener("mousemove", (event) => {

  dot.style.left = event.clientX + "px";
  dot.style.top = event.clientY + "px";

  ring.style.left = event.clientX + "px";
  ring.style.top = event.clientY + "px";

});


/* ================= CURSOR HOVER ================= */

document
  .querySelectorAll("a, .magnetic")
  .forEach((element) => {

    element.addEventListener("mouseenter", () => {
      ring.classList.add("hover");
    });


    element.addEventListener("mouseleave", () => {
      ring.classList.remove("hover");
    });

  });


/* ================= MAGNETIC BUTTONS ================= */

document
  .querySelectorAll(".magnetic")
  .forEach((element) => {

    element.addEventListener("mousemove", (event) => {

      const rect = element.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left -
        rect.width / 2;

      const y =
        event.clientY -
        rect.top -
        rect.height / 2;


      element.style.transform =
        `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });


    element.addEventListener("mouseleave", () => {

      element.style.transform = "";

    });

  });


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach((element, index) => {

    element.style.transitionDelay =
      Math.min((index % 6) * 0.07, 0.35) + "s";

    observer.observe(element);

  });


/* ================= SMART HEADER ================= */

const header =
  document.querySelector(".site-header");


let lastY = 0;


window.addEventListener(
  "scroll",
  () => {

    const currentY =
      window.scrollY;


    if (
      currentY > lastY &&
      currentY > 250
    ) {

      header.style.transform =
        "translateY(-100%)";

    } else {

      header.style.transform =
        "translateY(0)";

    }


    lastY = currentY;

  },
  {
    passive: true
  }
);