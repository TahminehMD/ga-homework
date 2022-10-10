let score = 0

let ball = document.querySelector("img")
ball.onclick = function(){
    score++
    let scoreH1 = document.querySelector("h1")
    scoreH1.innerHTML = "Your score is : " + score
    if(score == 10){
        window.alert("you win!!")
    }
}
