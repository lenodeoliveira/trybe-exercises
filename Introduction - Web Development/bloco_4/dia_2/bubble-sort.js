

let numbers = [5,4,3,30,2,1,0];


for (let i = 0; i <numbers.length; i ++) { 
   
    for (let j = 0; j <numbers.length - i; j ++) { 

        if (numbers [j]> numbers [j + 1]) { 
            
            let tmp = numbers [j] ; 
            numbers [j] = numbers [j + 1]; 
            numbers [j + 1] = tmp; 
          } 
        
        } 
} 
console.log(numbers.join(', ')); 
