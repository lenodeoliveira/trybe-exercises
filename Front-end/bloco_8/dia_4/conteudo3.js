const obj1 = {
    getName: function() { return "Luke" },
    getAge: function() {return 24 }
}

//com syntax sugar

const obj2 = {
    getName() { return "Luke" },
    getAge() {return 24 }
}

const getLo = () => "lo";

const obj3 = {};  
obj3[ "hel" + getLo() ] = "world";  

//usando syntax sugar es6

let obj4 = {  
    [ "hel" + getLo() ]: "world"
  }


console.log(obj4.hello)
//console.log(obj1.getName())
//console.log(obj2.getName())