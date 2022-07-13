/*
Program for black jack card counting.
*/
var count = 0;
function countingCard(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdBet = "hold";
    holdBet = count > 0 ? "bet" : "hold";
    return count + " : " + holdBet;
}

countingCard(2);
countingCard(3);
countingCard("K");
countingCard(10);

console.log(countingCard("Q"));
