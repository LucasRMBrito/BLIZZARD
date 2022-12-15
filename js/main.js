var thumbs = new Swiper(".logos", {
  spaceBetween: 20,
  slidesPerView: 5,
  watchSlidesProgress: true,
});

var swiper = new Swiper(".slide-background", {
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 5e3,
    disableOnInteraction: false
  },
  thumbs: {
    swiper: thumbs,
  }
});

const barraProgresso = document.querySelector(".progress");

barraProgresso.addEventListener("animationend", myEndFunction);


function myEndFunction() {
  swiper.slideNext();
  barraProgresso.style.animation = "none";
  void barraProgresso.offsetWidth;
  barraProgresso.style.animation = null;
}

swiper.on("slideChange", function () {
  barraProgresso.style.animation = "none";
  void barraProgresso.offsetWidth; 
  barraProgresso.style.animation = null;
});


let cont1 = true;
let cont2 = true;

function abrirMenuJogos() {
  if (cont1 == true){
    document.getElementById("idJogos").style.transform = "translateY(0%)";
    document.getElementById("idEsportes").style.transform = "translateY(-100%)";
    document.getElementById("btn-jogos").style.color = "#00AEFF";
    document.getElementById("seta-jogos").style.transform = "rotate(180deg)";
    document.getElementById("seta-esportes").style.transform = "rotate(0deg)";
    document.getElementById("btn-esportes").style.color = "";
    console.log("apertou botão 1");
    cont1 = false;
    cont2 = true;
    return;
  }
  if (cont1 == false) {
    document.getElementById("idJogos").style.transform = "translateY(-100%)";
    document.getElementById("btn-jogos").style.color = "";
    document.getElementById("seta-jogos").style.transform = "rotate(0deg)";
    console.log("apertou botão 1");
    cont1 = true;
  }
}

function abrirMenuEsportes() {
  if (cont2 == true) {
    document.getElementById("idEsportes").style.transform = "translateY(0%)";
    document.getElementById("idJogos").style.transform = "translateY(-100%)";
    document.getElementById("btn-esportes").style.color = "#00AEFF";
    document.getElementById("seta-esportes").style.transform = "rotate(180deg)";
    document.getElementById("seta-jogos").style.transform = "rotate(0deg)";
    document.getElementById("btn-jogos").style.color = "";
    console.log("apertou botão 2");
    cont2 = false;
    cont1 = true;
    return;
  } 
  document.getElementById("idEsportes").style.transform = "translateY(-100%)";
  document.getElementById("btn-esportes").style.color = "";
  document.getElementById("seta-esportes").style.transform = "rotate(0deg)";
  cont2 = true;
  return;
}

function logarConta() {
  document.getElementById("logar-conta").style.transform = "translateY(0%)";
}
function fecharModal() {
  document.getElementById("logar-conta").style.transform = "translateY(100%)";
}

function gameCards(menuId, btnId) {
  document.getElementById(menuId).classList.remove('games-active')
  setTimeout(() => {
      document.getElementById(btnId).classList.add('active');
      document.getElementById(menuId).classList.add('games-active');
  }, 100);
  if (btnId == 'battle-net') {
      document.getElementById('switch').classList.remove('active')
      document.getElementById('xbox').classList.remove('active')
      document.getElementById('ps').classList.remove('active')
  }
  else if (btnId == 'switch') {
      document.getElementById('battle-net').classList.remove('active')
      document.getElementById('xbox').classList.remove('active')
      document.getElementById('ps').classList.remove('active')
  }
  else if (btnId == 'xbox') {
      document.getElementById('battle-net').classList.remove('active')
      document.getElementById('switch').classList.remove('active')
      document.getElementById('ps').classList.remove('active')
  }
  else if (btnId == 'ps') {
      document.getElementById('battle-net').classList.remove('active')
      document.getElementById('xbox').classList.remove('active')
      document.getElementById('switch').classList.remove('active')
  }
}