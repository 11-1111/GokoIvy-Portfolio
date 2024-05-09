function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach(sec => { 
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;

    if(top => offset && top < offset + height){
      sec.classList.add("show-animate");
    }

    else{
      sec.classList.remove("show-animate");
    }

  }

  )
}
