// Prototype,Ajax,Callback

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
    }

}

let inputText = document.getElementById("word").value;
let selectedLang = document.getElementById("language").value;
const translate = new Translate(inputText,selectedLang);

function translateWord(e){

    translate.changeParameters(inputText,selectedLang);
    translate.translateWord(function(err,response){
        if(err){
            console.log(err);
        }
        else{
            console.log(response);
        }
    });


    e.preventDefault();
}