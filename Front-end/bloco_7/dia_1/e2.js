const longestWord = frase => {

    const arr = frase.split(' ');
    let maior = 0;
    let palavra;
    
    for (let i = 0; i < arr.length; i++) {         
      if(arr[i].length > maior){
        palavra = arr[i];
        maior = arr[i].length;
      }
    }

    return palavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteckkkkeu"));


