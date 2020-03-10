document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('mobile-menu').addEventListener('click', function(){
        document.querySelector('nav > ul.navbar').classList.toggle('open');
    })
});