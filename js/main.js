(function () {
    var STORAGE_KEY = "turnstile-theme";
    var html = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    var sunIcon = btn.querySelector(".theme-icon-sun");
    var moonIcon = btn.querySelector(".theme-icon-moon");
    var label = btn.querySelector("span");

    function applyTheme(theme) {
        if (theme === "dark") {
            html.setAttribute("data-theme", "dark");
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
            label.textContent = "Dark";
        } else {
            html.removeAttribute("data-theme");
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
            label.textContent = "Light";
        }
    }

    function getSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function initTheme() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            applyTheme(stored);
        } else {
            applyTheme(getSystemTheme());
        }
    }

    btn.addEventListener("click", function () {
        var current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
        var next = current === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });

    initTheme();

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
})();