let n  = 5;
let symbol = "*";
let inputLine = "";
let inputPosition = n;

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) { 
        if (j < inputPosition) {
            inputLine = inputLine + " ";
        }
        else{
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = "";
    inputPosition = inputPosition -1;
}
   
