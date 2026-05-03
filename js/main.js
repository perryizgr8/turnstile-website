document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            header.style.boxShadow = "0 1px 8px rgba(0,0,0,.08)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener("click", function (e) {
            var target = document.querySelector(a.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});