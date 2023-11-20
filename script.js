// Fonctionnalité 1 :
function footerClick(){
  const footer = document.querySelector("footer")
  let nbClick = 1
  function footerClick(){
    console.log("clic n°" + nbClick)
    nbClick ++
  }
  footer.addEventListener("click", footerClick)
}
footerClick()

// Fonctionnalité 2 :
function clickIconButton() {
  const iconbutton = document.querySelector(".navbar-toggler");
  function clickIconButton() {
    let navbarHeader = document.getElementById('navbarHeader');
    navbarHeader.classList.toggle('collapse');
  };
  iconbutton.addEventListener('click', clickIconButton)
}
clickIconButton()



// fonctionnalité 3 :
function firstCardEditButton(){
  const firstCard = document.querySelectorAll('.card')[0];
  const firstCardEditButton = firstCard.querySelectorAll('.btn-outline-secondary')[0];
  const firstCardText = firstCard.querySelectorAll('.card-text')[0];
  function clickfirstCardEditButton(){
    firstCardText.style.color = "red";
  }
  firstCardEditButton.addEventListener('click', clickfirstCardEditButton)
}
firstCardEditButton()


// Fonctionnalité 4 :
function clickSecondCardEditButton() {
  const secondCard = document.querySelectorAll('.card')[1];
  const secondCardEditButton = secondCard.querySelectorAll('.btn-outline-secondary')[0];
  const secondCardText = secondCard.querySelectorAll('.card-text')[0];
  function clickSecondCardEditButton() {
    if (secondCardText.style.color === 'green') {
      secondCardText.style.color = "";
    } else {
      secondCardText.style.color = 'green';
    }
  }
secondCardEditButton.addEventListener('click', clickSecondCardEditButton);
}
clickSecondCardEditButton()

// Fonctionnalité 5 :
function clickBootstrapCSS(){
  const bootstrapCSS = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
  const navbar = document.querySelector('.navbar');
  function clickBootstrapCSS(){
    bootstrapCSS.setAttribute('disabled', 'true');
  }
  navbar.addEventListener('dblclick', clickBootstrapCSS)
}
clickBootstrapCSS()

// Fonctionnalité 6 :

function viewButton() {
  const album = document.querySelector('.album .row');
  const cards = Array.from(album.children);
  cards.forEach(function(card) {
    let imgInCard = card.getElementsByClassName('card-img-top')[0];
    let textInCard = card.getElementsByClassName('card-text')[0];
    let viewButtonInCard = card.getElementsByClassName('btn-success')[0];
    function mouseOverViewButton(){
      textInCard.classList.toggle('collapse');
      if (textInCard.classList.contains('collapse')) {
        textInCard.style.display = 'none';
        imgInCard.style.transform = 'scale(0.5)';
        imgInCard.style.transition = 'transform 0.3s ease';
      } else {
        textInCard.style.display = 'block';
        imgInCard.style.transform = 'scale(1)';
        imgInCard.style.transition = 'transform 0.3s ease';
      }
    }
    viewButtonInCard.addEventListener('mouseover', mouseOverViewButton)
  })
}
viewButton()

// Fonctionnalité 7 :
function rotateButton() {
  const album = document.querySelector('.album .row');
  const rotateButton = document.querySelector('.btn-secondary');
  rotateButton.addEventListener('click', function() {
    album.insertBefore(album.lastElementChild, album.firstElementChild);
  });
}
rotateButton()

// Fonctionnalité 8 :
function reverseRotateButton() {
  const album = document.querySelector('.album .row');
  const reverseRotateButton = document.querySelector('.btn-primary');
  reverseRotateButton.addEventListener('click', function(event) {
    event.preventDefault();
    album.insertBefore(album.firstElementChild, album.lastElementChild);
  });
}
reverseRotateButton()
