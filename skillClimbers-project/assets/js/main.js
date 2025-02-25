const navbar = document.querySelector('.navbar');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const links = document.querySelectorAll('.link');
const overlay = document.querySelector('.overlay');

const toggleMenu = function() {
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
}

openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)

links.forEach(function(link){
    link.addEventListener('click', toggleMenu)
})

//copyright date
const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear();

//Headre & top-btn slide-in animation on scroll
const header = document.querySelector('.header')
const topBtn = document.querySelector('.top-btn') 
window.addEventListener('scroll',function(){
    if (this.scrollY > 100){
        header.classList.add('active')
        topBtn.classList.add('active')
    } else{
        header.classList.remove('active')
        topBtn.classList.remove('active')
    }
})

// JavaScript to hide the loader after page load
window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');
    
    // Hide the loader and show the content after 3 seconds
    setTimeout(function() {
      loaderWrapper.style.display = 'none';  // Hide the loader
      content.style.display = 'block';  // Show the main content
    }, 1400);  // Adjust the time as needed
  });
  

