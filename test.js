
     var hasClickers = false;

     var x = 0;

     var y = 0;

     var z = 0;
    
     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   

function addClicks(amount) {

 clicks = clicks + amount * multiplier;
      document.getElementById("clicks").innerHTML = clicks;
  }
     function upgradeMenu() {
  var x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
           var y = document.getElementById("main1");
  if (y.style.display === "none") {
    y.style.display = "block";     
  } else {
    y.style.display = "none";

  }
          var z = document.getElementById("upgradestab");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";

  }  
}

function buyMult() {

if (clicks >= multiplierCost) {


    var clicks = clicks - multiplierCost;
    var multiplierCost = multiplierCost * 1.5;
    var multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("multiplier").innerHTML = multiplier
    document.getElementById("clicks").innerHTML = Math.round(clicks);
     
  }

}

function buyClicker() {

if (clicks >= clickerCost) {


    var clicks = clicks - clickerCost;
    var clickerCost = clickerCost * 1.5;
    var clickers = clickers + 1; 
    var hasClickers = true;
    var t = t - 0.5;
    document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
    document.getElementById("clicks").innerHTML = Math.round(clicks);
 
          
    
 
        
  }

}

     if (hasClickers = true)  {

           // Timer
        var t = 1000;
 
        f1();
         
    
        function addClicks(){
         
             clicks = clicks + 1 * multiplier;
        }
         

        function f1() {
       
            addClicks();
            setTimeout(f1, t);
             document.getElementById("clicks").innerHTML = Math.round(clicks);
        }

     }

 else {
 console.log("no")
  }



const americanNames = [
  'k', 'm', 'b', 't', 'qa', 'qu', 'sx', 'sp', 'o', 'n',
 
];

function formatBigPositiveNumber(n) {
  const str = BigInt(n).toString();
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

function fixedWidth(str, n) {
  return (' '.repeat(n) + str).slice(-n);
}

for (let [input, expected] of clicks) {
  const actual = formatBigPositiveNumber(input);
  console.log('\n%s\n%s', fixedWidth(input, 25), fixedWidth(expected, 25));
  console.log('%s', fixedWidth(actual, 25));
}
