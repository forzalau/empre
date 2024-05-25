document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.top = "-100px";
        } else {
            if (scrollTop === 0) {
                header.style.top = "0";
            }
        }

        lastScrollTop = scrollTop;
    });
});

// ************************************************************** //

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".numberDisplay");

    const incrementarNumero = (element, finalNumber, duration) => {
        const increment = finalNumber / (duration / 10);
        let currentNumber = 0;

        const interval = setInterval(() => {
            currentNumber += increment;
            element.innerText =
                "+ " + Math.floor(Math.min(currentNumber, finalNumber));
            if (currentNumber >= finalNumber) clearInterval(interval);
        }, 10);
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    incrementarNumero(
                        element,
                        +element.dataset.finalNumber,
                        3000
                    );
                    observer.unobserve(element);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
});

// ************************************************************** //
