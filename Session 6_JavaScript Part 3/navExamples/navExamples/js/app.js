document.addEventListener('DOMContentLoaded', function() {

function menuToggle() {
    document.querySelector('.nav2').classList.toggle('active');
   }

   document.querySelector('.hamburger').addEventListener('click', menuToggle);
   document.querySelector('.cross').addEventListener('click', menuToggle);
   
});