const navToggle = document.getElementById('nav_Toggle');
const navLinks = document.getElementById('nav_links');

navToggle.addEventListener('click',()=>{
     navToggle.classList.toggle('active');
     navLinks.classList.toggle('active');
})

document.querySelectorAll('navLinks a').forEach(link =>{
     link.addEventListener('click',()=>{
          navToggle.classList.remove('active');
          navLinks.classList.remove('active');

     })
})


const nav_links = document.getElementById('navbar');
window.onscroll = function(){
     var scrollnav = window.scrollY;
     if(scrollnav>=100){
          nav_links.classList.add('navbar-color');
     }
     else{
          nav_links.classList.remove('navbar-color');
     }
}
