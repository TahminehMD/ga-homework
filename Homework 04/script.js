let score = 0

let ball1 = document.getElementById("ball1")
let ball2 = document.getElementById("ball2")
let ball3 = document.getElementById("ball3")
let scoreText = document.getElementById("score-text")

ball1.onclick = function () {
    score = score + 10
    scoreText.innerHTML = score
}

ball2.onclick = function () {
    score = score + 8
    scoreText.innerHTML = score
}

ball3.onclick = function () {
    score = score + 15
    scoreText.innerHTML = score
}

let balls = document.querySelectorAll(".ball")
for (let i = 0; i < 3; i++) {
    balls[i].addEventListener('mouseover', function () {
        balls[i].style = "border : 6px solid black"
    })
    balls[i].addEventListener('mouseleave', function () {
        balls[i].style = "border : none"
    })
}

setInterval(function () {
    if (score >= 100) {
        window.alert("YOU WIN!!")
        score = 0
        scoreText.innerHTML = score
    }
}, 500)


