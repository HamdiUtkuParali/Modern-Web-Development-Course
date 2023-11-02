//Set Timeout

// setTimeout(function(){
//     console.log("Merhaba");
// },5000);

//Set Interval



let i = 0;

let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);
},1000);

document.getElementById("btnStop").addEventListener("click",function(){
    clearInterval(value);
});