export function convertFaceToNumbers(card) {
  switch (card) {
    case 'J':
      return 11;
      break;
    case 'Q':
      return 12;
      break;
    case 'K':
      return 13;
      break;
    case 'A':
      return 14;
      break;
    default:
      return card;
      break;
  }
}
