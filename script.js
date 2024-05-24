function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
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
