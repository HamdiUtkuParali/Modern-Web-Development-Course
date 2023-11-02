// ASENKRON
/*
function proccess1(){
    setTimeout(function(){
        console.log("Procces1");
    },4000);
}

function proccess2(){
    setTimeout(function(){
        console.log("Proccess2");
    },2000);
}

proccess1();
proccess2();
console.log("Naber?");
*/

// SENKRON
/*
function proccess1(callback){
    setTimeout(function(){
        console.log("Procces1");
        callback();
    },4000);
}

function proccess2(){
    setTimeout(function(){
        console.log("Proccess2");
        console.log("Naber?");
    },2000);
    
}
proccess1(proccess2);
*/

// Başka bir örnek
// ASENKRON
/*
 const langs = ["Python","Java","C++"];
 
 function addLang(lang){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklend");
    },2000)
}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(){
            console.log(lang);
        });
    },1000)
}

 addLang("Javascript");
 getAllLangs();
 */

// SENKRON

const langs = ["Python","Java","C++"];
 
 function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback()
    },2000)
 }
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000)
}

 addLang("Javascript",getAllLangs);