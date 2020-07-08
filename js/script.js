var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + 'nożyce' + '! Jeśli Twój ruch to kamień, to wygrywasz!');
var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 2);
console.log('wylosowana liczba to: ' + randomNumber);
printMessage('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
if (randomNumber == '2') {
    computerMove = 'papier';
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
if (randomNumber == '3') {
    computerMove = 'nożyce';
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);