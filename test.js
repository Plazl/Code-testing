var clicks = 0;

var exist = true;

while (exist = true) {

var clicks = clicks + 1;
     }
if (clicks >= 1e31)  {

const americanNames = [
  'k', 'm', 'b', 't', 'qa', 'qu', 'sx', 'sp', 'o', 'n',
 
];

function formatBigPositiveNumber(clicks) {
  const str = BigInt(clicks).toString();
  const len = str.length;
  if (len <= 3) {
    return str;
  } else if (len <= 6) {
    return str.slice(0, len - 3) + ',' + str.slice(-3);
  } else {
    const magnitude = ((len - 1) / 3) | 0;
    const place = 1 + (len + 2) % 3;
    const sig = str.slice(0, 4);
    const name = americanNames[magnitude];
    if (!name) throw new Error('I cannot format that number');
    return sig.substring(0, place) + '.' + sig.substring(place) + ' ' + name
  }
}

function fixedWidth(str, clicks) {
  return (' '.repeat(clicks) + str).slice(-clicks);
}

for (let [input, expected] of clicks) {
  const actual = formatBigPositiveNumber(input);
  console.log('\n%s\n%s', fixedWidth(input, 25), fixedWidth(expected, 25));
  console.log('%s', fixedWidth(actual, 25));
 }
}  

else if(clicks > 1e31) {
     var formattedclicks = clicks.toExponential();
  document.getElementById("clicks").innerHTML = formattedclicks;
     
}


else {

throw new Error("Something went wrong! Reload the page for a possible fix. If it wont fix, go to github.com/Plazl/Evo-Clicker and submut");
  }
     
     
     
     
