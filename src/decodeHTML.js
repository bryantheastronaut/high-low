export function decodeHTML(input) {
  let txt = document.createElement('textarea');
  txt.innerHTML = input;
  return txt.value;
}
