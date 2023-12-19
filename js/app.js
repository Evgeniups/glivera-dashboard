(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (event => {
        const menuBtn = document.querySelector(".burger");
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector(".sidebar__close");
        const cover = document.querySelector(".page__cover");
        const toggleSidebar = () => {
            if (sidebar.classList.contains("active")) {
                sidebar.classList.remove("active");
                cover.classList.remove("page__cover_active");
                menuBtn.setAttribute("style", "display:block");
                sidebar.setAttribute("style", "left: -100%;");
            } else {
                sidebar.classList.add("active");
                menuBtn.setAttribute("style", "display:none");
                cover.classList.add("page__cover_active");
                sidebar.setAttribute("style", "left: 0;");
            }
        };
        menuBtn.addEventListener("click", (() => toggleSidebar()));
        closeBtn.addEventListener("click", (() => toggleSidebar()));
        cover.addEventListener("click", (() => toggleSidebar()));
    }));
    window["FLS"] = false;
    isWebp();
})();