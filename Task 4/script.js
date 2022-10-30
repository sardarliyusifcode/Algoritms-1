const month = prompt('Enter month').toLowerCase();

switch (month) {
    case 'january':
        alert('31');
        break;
    case 'february':
        alert('28');
        break;
    case 'march':
        alert('31');
        break;
    case 'april':
        alert('30');
        break;
    case 'may':
        alert('31');
        break;
    case 'june':
        alert('30');
        break;
    case 'july':
        alert('31');
        break;
    case 'august':
        alert('31');
        break;
    case 'september':
        alert('30');
        break;
    case 'october':
        alert('31');
        break;
    case 'november':
        alert('30');
        break;
    case 'december':
        alert('31');
        break;

    default:
        alert('Not a month, please enter correctly');
        break;
}