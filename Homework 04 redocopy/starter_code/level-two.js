/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

let balls = document.querySelectorAll(".js-ball");
for (let i = 0; i < 3; i++) {
    balls[i].addEventListener('click', function () {
        score = score + 10

        if (score <= 100) {
            scoreEl.innerText = score;
            //document.getElementById("test").innerHTML= score   (second way)
        } else {
            declareWinner();
        }
    })
}
function declareWinner() {
    document.body.classList.add('game-over');
}



