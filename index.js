// code your solution here
function superbowlWin(array) {
    const winningYear = array.find(object => object.result === "W");
    if (winningYear) {
        return winningYear.year;
    } else {
        return undefined;
    }
}
