document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('mobile-menu').addEventListener('click', function(){
        document.querySelector('nav').classList.toggle('open');
    });
    document.getElementById('mobile-menu-close').addEventListener('click', function(){
        document.querySelector('nav').classList.toggle('open');
    });
});