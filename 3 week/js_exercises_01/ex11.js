const johnsScores = [89, 120, 103];
const mikesScores = [116, 94, 123];
const marysScores = [97, 134, 105];

const averageScoreJohn = (johnsScores[0] + johnsScores[1] + johnsScores[2]) / johnsScores.length;
const averageScoreMike = (mikesScores[0] + mikesScores[1] + mikesScores[2]) / mikesScores.length;
const averageScoreMary = (marysScores[0] + marysScores[1] + marysScores[2]) / marysScores.length;


if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
    console.log(`John's team wins with an average score of ${averageScoreJohn}`);
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
    console.log(`Mike's team wins with an average score of ${averageScoreMike}`);
} else if (averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike) {
    console.log(`Mary's team wins with an average score of ${averageScoreMary}`);
} else {
    console.log(`There is a draw between the teams`);
}
