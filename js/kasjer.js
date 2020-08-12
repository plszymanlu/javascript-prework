var argPrice, argPaidAmount, change2, change1;

/**
 * Describe this function...
 */
function calculateChange(argPrice, argPaidAmount) {
    console.log('wywołano fukncję calucalteChange z argumentami: ' + argPrice + ', ' + argPaidAmount);
    return (argPaidAmonut - argPrice);
}
change1 = calculateChange(12, 20);
printMessage('Zapłacono 20zł, rachunek wynosi 13zł, reszta: ' + change1);
change2 = calculateChange(77, 100);
printMessage('Zapłacono 100zł, rachunek wynosi 77zł, reszta: ' + change2);
printMessage('Zapłacono 50zł, rachunek wynosi 49zł, reszta: ' + calculateChange(49, 50));