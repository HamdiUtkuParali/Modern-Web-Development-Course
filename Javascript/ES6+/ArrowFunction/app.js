// Normal Fonskiyon Yazım Şekli
const merhaba1 = function(){
    console.log("Merhaba");
}

// Arrow Function Yazım Şekli
const merhaba2 = () => console.log("Merhaba"); // parametresiz
const merhaba3 = name => console.log("Merhaba",name); // bir parametreli
const merhaba4 = (firstName,lastName) => console.log("Merhaba",firstName,lastName);

merhaba1();
merhaba2();
merhaba3("Utku");
merhaba4("Utku","Paralı");


const cube1 = function(x){
    return x*x*x;
}
// yukardaki küp fonksiyonunu arrow funcion yazım tekniği ile yazalım

const cube2 = x => x*x*x;
