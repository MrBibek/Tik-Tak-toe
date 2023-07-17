// Assescing the DOM
let entry = document.querySelectorAll(".entries");
let result = document.querySelector(".result");
let restart = document.querySelector(".restart-btn")

// Taking the Default Value
let cross=true;
let circle=false;
let clicked = 0;
let gameOver = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let entriesCross = [];
let entriesCircle = [];
let draw = true;

// Function for the Buttons
entry.forEach(function (btn){
btn.addEventListener("click",function (){
    clicked++;
    // Condition for the Cross
    if(cross){
    btn.innerHTML= `<i class="bi bi-x-lg cross-sign"></i>`
    let id = parseInt(btn.dataset.id);
    btn.disabled=true
    console.log(id)
    circle=true;
    cross=false;
    entriesCross.push(id);
    console.log(entriesCross)
    }
    // Condition for the Circle
   else{
        btn.innerHTML = `<span class="bi bi-circle circle-sign"></span>`
        let id = parseInt(btn.dataset.id);
        btn.disabled=true

    console.log(id)
        // console.log("circle")
        cross=true;
        circle=false;
        entriesCircle.push(id);
        console.log(entriesCircle)
    }
    if(clicked>=5){
     
       checkForWinner();
        }})
})

function checkForWinner(){
  // if(cross){         
  
for(let i=0;i<gameOver.length;i++){
  let matchedCross=0;
  let matchedCircle=0;
// console.log("ENtered the first loop")
for(let j=0;j<gameOver[i].length;j++){
  // console.log("ENtered the second loop")

  for(let k=0;k<entriesCross.length;k++){
    // console.log("ENtered the third loop")

if(gameOver[i][j]==entriesCross[k]){

  matchedCross++;
  if(matchedCross>=3){
    console.log("Cross is the winner");
    popupWinner("cross","Cross is the Winner")
    draw = false;
  }
}}
for(let k=0;k<entriesCircle.length;k++){

if(gameOver[i][j]==entriesCircle[k]){
  matchedCircle++;
  if(matchedCircle>=3){
    console.log("Circle is the winner");
    popupWinner("circle","Circle is the Winner")
    draw = false;
  }
}
  }
}


}
if(clicked==9 && draw){
  result.innerHTML = "Game is Draw."
  restart.classList.add("restart-show");
  console.log("Entered the draw loop")
}
}

function popupWinner(winner,text){
  result.innerHTML = `${text}`
  restart.classList.add("restart-show")
  entry.forEach(function (btn){
    btn.disabled=true;
  })

}

// Functioning the restart Btn
restart.addEventListener("click",function (){
  draw=true;
  cross=true;
 circle=false;
 clicked = 0;
 gameOver = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
 entriesCross = [];
 entriesCircle = [];
 entry.forEach(function (btn){
  btn.disabled=false;
  btn.innerHTML = ""
  result.innerHTML = "";
  restart.classList.remove("restart-show")
 })
})