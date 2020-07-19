var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + 'nożyce' + '! Jeśli Twój ruch to kamień, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
printMessage('wylosowana liczba to: ' + randomNumber);
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

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wpisana odpowiedź to: ' + playerInput);

if (playerInput == '1') {
    playerMove = 'kamień';
} else {
    playerMove = 'błędny wybór';
}
printMessage('Twój ruch: ' + playerMove);

if (playerInput == '2') {
    playerMove = 'papier';
} else {
    playerMove = 'błędny wybór';
}
printMessage('Twój ruch: ' + playerMove);

if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'błędny wybór';
}
printMessage('Twój ruch: ' + playerMove);