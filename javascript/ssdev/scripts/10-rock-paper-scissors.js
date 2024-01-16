      // shortcuts
      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      function pickComputerMove() {
        let computerMove = "";
        const randomNumber = Math.random();

        let result = "";
        let counterWin = 0;
        let counterLose = 0;
        let counterTie = 0;
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }

      function updateResult(result, movesHtml, scoreText) {
        document.querySelector(".js-result").innerText = result;
        document.querySelector(".js-moves").innerHTML = movesHtml;
        document.querySelector(".js-score").innerText = scoreText;
      }

      function compareMoves(move1, move2) {
        if (move1 === move2) {
          score.ties += 1;
          localStorage.setItem("score", JSON.stringify(score));
          return "Tie";
        } else if (
          (move1 === "rock" && move2 === "scissors") ||
          (move1 === "paper" && move2 === "rock") ||
          (move1 === "scissors" && move2 === "paper")
        ) {
          score.wins += 1;
          localStorage.setItem("score", JSON.stringify(score));
          return "Win";
        } else {
          score.losses += 1;
          localStorage.setItem("score", JSON.stringify(score));
          return "Lose";
        }
      }
      function resetScore() {
        localStorage.removeItem("score");
        score.losses = 0;
        score.wins = 0;
        score.ties = 0;
        localStorage.setItem("score", JSON.stringify(score));
        let scoreText = `Ties: ${score.ties},  Wins: ${score.wins} , Losses: ${score.losses}`;
        updateResult('', '', scoreText);
      }

      function play(yourMove) {
        let computerMove = pickComputerMove();
        let result = compareMoves(yourMove, computerMove);

        let movesText = `You picked ${yourMove} , computer picked ${computerMove}`;
        let movesHtml = ` <span>You</span>
            <img src="images/${yourMove}-emoji.png" alt="" class="move-icon">
            <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
            <span>Computer</span>`
        let scoreText = `Ties: ${score.ties},  Wins: ${score.wins} , Losses: ${score.losses}`;
        updateResult(`You ${result}`, movesHtml, scoreText);
      }