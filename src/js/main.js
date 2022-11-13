$(document).ready(function(){
    $('#menu_toggle').click(function(){
        $('#main_nav').stop(true, true).slideToggle()
    })
})

function vrai () {
  switch (window.location.pathname) {
    case "/src/page_1.html":
      alert("Mauvaise réponse.\nSelon les estimations, l’étoile Bételgeuse devrait exploser en supernova entre maintenant et les 100 000 prochaines années. ")
      window.location.href = "./page_2.html"
      break;
    case "/src/page_2.html":
      alert("Mauvaise réponse,\nLes naines blanches sont la dernière phase d’environ 98 % des étoiles.\n Lorsque le Soleil aura atteint cette phase, il ne sera pas plus grand que la Terre.\nVous allez être rediriger à la prochaine question.")
      window.location.href = "./page_3.html"
      break;
    case "/src/page_3.html":
      alert("Mauvaise réponse,\nLes supernovas s’observent généralement à la mort de grandes étoiles ayant une masse\n au moins cinq fois plus élevée que celle du Soleil. ")
      window.location.href = "./page_4.html"
      break;
    case "/src/page_4.html":
      alert("Bonne réponse.\nL’univers, lui, en compterait 70 000 trillions.\nC’est dix fois plus que tous les grains de sable contenus dans les plages et les déserts de la Terre.")
      window.location.href = "./page_5.html"
      break;
    case "/src/page_5.html":
      alert("Bonne réponse.\nProxima du Centaure est située à environ 4,24 années-lumière du Soleil,\ndans la constellation australe du Centaure. Elle a été découverte en 1915.")
      window.location.href = "./page_6.html"
      break;
    case "/src/page_6.html":
      alert("Bonne réponse.\nÂgée de 240 ans, cette étoile est 1 trillion de fois plus petite que le Soleil. Elle est située à 16 000 années-lumière de notre planète dans la constellation du Sagittaire.")
      window.location.href = "./page_7.html"
      break;
    case "/src/page_7.html":
      alert("Bonne réponse,\nOn y retrouve aussi de l’hélium.")
      window.location.href = "./page_8.html"
      break;
    case "/src/page_8.html":
      alert("Bonne réponse,\nLes étoiles les plus chaudes arborent habituellement des teintes bleutées.")
      window.location.href = "./page_9.html"
      break;
    case "/src/page_9.html":
      alert("Bonne réponse.\n Découverte en 2018 grâce au télescope spatial Hubble de la NASA, elle est située à 9,3 milliards d’années-lumière de notre planète.")
      window.location.href = "./page_10.html"
      break;
    case "/src/page_10.html":
      alert("Mauvaise réponse.\nLes plus petites étoiles ont généralement une durée de vie plus longue que les grandes, car elles brûlent moins rapidement.")
      window.location.href = "./index.html"
      break;
    default:
      break;
  }
}

function faux () {
  switch (window.location.pathname) {
    case "/src/page_1.html":
      alert("Bonne réponse.\nSelon les estimations, l’étoile Bételgeuse devrait exploser en supernova entre maintenant et les 100 000 prochaines années. ")
      window.location.href = "./page_2.html"
      break;
    case "/src/page_2.html":
      alert("Bonne réponse,\nLes naines blanches sont la dernière phase d’environ 98 % des étoiles.\nLorsque le Soleil aura atteint cette phase, il ne sera pas plus grand que la Terre.\nVous allez être rediriger à la prochaine question.")
      window.location.href = "./page_3.html"
      break;
    case "/src/page_3.html":
      alert("Bonne réponse.\nLes supernovas s’observent généralement à la mort de grandes étoiles ayant une masse\nau moins cinq fois plus élevée que celle du Soleil. ")
      window.location.href = "./page_4.html"
      break;
    case "/src/page_4.html":
      alert("Mauvaise réponse.\nL’univers, lui, en compterait 70 000 trillions.\nC’est dix fois plus que tous les grains de sable contenus dans les plages et les déserts de la Terre.")  
      window.location.href = "./page_5.html"
      break;
    case "/src/page_5.html":
      alert("Mauvaise réponse.\nProxima du Centaure est située à environ 4,24 années-lumière du Soleil,\ndans la constellation australe du Centaure. Elle a été découverte en 1915.")
      window.location.href = "./page_6.html"
      break;
    case "/src/page_6.html":
      alert("Mauvaise réponse.\nÂgée de 240 ans, cette étoile est 1 trillion de fois plus petite que le Soleil. Elle est située à 16 000 années-lumière de notre planète dans la constellation du Sagittaire.")
      window.location.href = "./page_7.html"
      break;
    case "/src/page_7.html":
      alert("Mauvaise réponse.\nOn y retrouve aussi de l’hélium.")
      window.location.href = "./page_8.html"
      break;
    case "/src/page_8.html":
      alert("Mauvaise réponse,\nLes étoiles les plus chaudes sont souvent blanches ou bleues, tandis que les étoiles les plus froides ont des couleurs rouges ou orangées. ")
      window.location.href = "./page_9.html"
      break;
    case "/src/page_9.html":
      alert("Mauvaise réponse.\nDécouverte en 2018 grâce au télescope spatial Hubble de la NASA, elle est située à 9,3 milliards d’années-lumière de notre planète.")
      window.location.href = "./page_10.html"
      break;
    case "/src/page_10.html":
      alert("Bonne réponse.\nLes plus petites étoiles ont généralement une durée de vie plus longue que les grandes, car elles brûlent moins rapidement.")
      window.location.href = "./about.html"
      break;
    default:
      break;
  }
}

function index() {
    switch (window.location.pathname) {
      case "/src/index.html":
        alert("C'est parti pour le premier vrai ou faux,\nVous allez être rediriger.")
        window.location.href = "./page_1.html";
        break;
      default:
        break;
    }
}
