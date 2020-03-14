document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mobile-menu').addEventListener('click', toggleMobileNav);
    document.getElementById('mobile-menu-close').addEventListener('click', toggleMobileNav);

    // Sticky Header
    window.onscroll = function () {
        addStickyHeader();
    };

    window.onload = function(){
        addStickyHeader();
    };
    var header = document.querySelector("header");
    // Get the offset position of the navbar
    var sticky = 0;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function addStickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky");
        }
    }

    // Scrolling Links
    let links = document.querySelectorAll('nav ul.navbar a');
    for(let link of links) link.addEventListener('click', scrollTo);

    function scrollTo(e) {
        toggleMobileNav();
        let element = document.getElementById(e.target.dataset.target);
        var topOfElement;
        if(element.offsetTop == 0) topOfElement = element.offsetTop;
        else topOfElement = element.offsetTop - header.clientHeight;
        window.scroll({ top: topOfElement, behavior: "smooth" });
    }

    function toggleMobileNav(){
        document.querySelector('nav').classList.toggle('open');
    }
});