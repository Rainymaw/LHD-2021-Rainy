var box = document.getElementsByClassName("grid-item");
    var turn = true;
    var initState = ["A","B","C","D","E","F","G","H","I"]

    var rempli = 9
    
    var player = ["PLAYER 1","PLAYER 2"];
    
    var wincombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8],[2,4,6]];
    
    var active = "icon-player active-player"
    var inactive = "icon-player"

function startGame() {
    turn = true;
    rempli = 9
    //Part event listener
    for (var i = 0; i < box.length; i++) {
        box[i].innerHTML = initState[i]
        box[i].style.color= "black";
        box[i].style.backgroundColor = ""
        
        document.getElementById("win").innerHTML = ""
        document.getElementById("restart").hidden=true;

        document.getElementById("player2").className = inactive
        document.getElementById("player1").className = active

        box[i].addEventListener("click",foncton,{
            once:true
        });
        console.log(box[i].innerHTML);
      }
    
}
//Part Initializing

startGame()
//The function
function foncton(event){
    rempli -= 1
    if (turn ===true){
        event.target.style.color="blue";
        event.target.innerHTML="O";
        checkwin();

        document.getElementById("player1").className = inactive
        document.getElementById("player2").className = active

        document.getElementById("Player").innerHTML=player[1];
    }else{
        event.target.style.color="red";
        event.target.innerHTML="X";
        checkwin();

        document.getElementById("player2").className = inactive
        document.getElementById("player1").className = active

        document.getElementById("Player").innerHTML=player[0]; 
    }

    if (rempli ===0){
        document.getElementById("win").innerHTML = "Stalemate"
        document.getElementById("restart").hidden=false;
    }
    turn = !turn
}

//Win Check
function checkwin(){
    let i = 0;
    for (i = 0; i < wincombo.length;i++){
        var boite = wincombo[i];
        if (box[boite[0]].innerHTML === box[boite[1]].innerHTML && box[boite[1]].innerHTML === box[boite[2]].innerHTML){
            for (var k = 0; k< 3; k++){
                box[boite[k]].style.backgroundColor = "#90ee90";
            }
         document.getElementById("win").innerHTML=document.getElementById("Player").innerHTML+ " Has won the game";
         document.getElementById("restart").hidden=false;
         
        }
    }
}

document.getElementById("restart").addEventListener("click",function(){

    startGame()
})