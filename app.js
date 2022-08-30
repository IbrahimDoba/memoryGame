
const box1 = document.querySelectorAll(".box")
console.log(box1)
const item = document.querySelectorAll(".item")
const door = document.querySelectorAll(".door")
const container = document.querySelector('.container')
// let score = document.querySelector('.scores')
let score = 0



let isFlipped = false;
let firstCard;
let secondCard;

box1.forEach((box) => box.addEventListener('click', flip))




function flip (){
  this.classList.add("flip");
  if(!isFlipped){
    isFlipped = true;
    firstCard = this;
  } else{
    secondCard = this;
    console.log(firstCard )
    console.log(secondCard )

    checkIt()
  }
    }
 



function checkIt(){
    if (firstCard.dataset.image === secondCard.dataset.image) {
        succsess();
      } else {
        failed();
      }
    
}


function succsess (){
//    console.log('works')
firstCard.classList.removeEventListener("click", flip)
secondCard.classList.removeEventListener("click", flip)
reset()
}


function failed (){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset()
    }, 1000);
//   console.log('failed')
 }



function reset (){ 
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}


(function shuffle(){
  box1.forEach((box) =>{
    var index = Math.floor(Math.random() * 16);
   box.style.order = index ;
  });
})();


  // add scores
  
function addScore() {
  
}