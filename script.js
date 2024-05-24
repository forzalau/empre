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
