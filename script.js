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
            currentNumber = Math.min(currentNumber + increment, finalNumber);
            element.innerText = Math.floor(currentNumber);
            if (currentNumber >= finalNumber) clearInterval(interval);
        }, 10);
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const finalNumber = +element.dataset.finalNumber;
                    const duration = 2000; // Puedes ajustar la duración si es necesario
                    incrementarNumero(element, finalNumber, duration);
                    observer.unobserve(element);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
});

// ************************************************************** //
