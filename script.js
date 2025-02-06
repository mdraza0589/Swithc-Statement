let monthNumber = prompt('enter a number!');
monthNumber = parseFloat(monthNumber);

switch (monthNumber) {
    case (1):

        document.write('January')
        break;

    case (2):
        document.write('February')
        break; 1

    case (3):
        document.write('March')
        break;

    case (4):
        document.write('April')
        break;

    case (5):
        document.write('May')
        break;

    case (6):
        document.write('June')
        break;

    case (7):
        document.write('July')
        break;

    case (8):
        document.write('August')
        break;

    case (9):
        document.write('September')
        break;

    case (10):
        document.write('Octuber')
        break;

    case (11):
        document.write('November')
        break;

    case (12):
        document.write('December')
        break;

    default:
        document.write('Sorry!.....enter number between 1 to 12')
}
