
const button = document.getElementById('btn');
const copyButton = document.getElementById('copy-button')
const inputKeywords = document.getElementById('input');
const output = document.getElementById('output')
const inputLength = document.getElementById('input-length')
const outLength = document.getElementById('output-length')


function sortingFunc() {
  const string = inputKeywords.value
  const array = string.toLowerCase().split(/\s*(?:;|,|$)\s*/).map((e) => e.trim())
  const sorting = array.filter((item, index) => array.indexOf(item) === index)

  output.innerHTML = sorting.toString()
  inputLength.innerHTML = array.length
  outLength.innerHTML = sorting.length
}

button.addEventListener('click', sortingFunc);

function copyFunc() {
  var copyText = output;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  console.log(copyText)
}

copyButton.addEventListener('click', copyFunc);



