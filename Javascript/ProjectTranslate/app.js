// Prototype,Ajax,Callback

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateFunc);
    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
        ui.changeUI();
    }

}

const translate = new Translate();
const ui = new UI();

function translateFunc(e){

    let inputText = document.getElementById("word").value;
    let selectedLang = document.getElementById("language").value;

    translate.translateWord(inputText,selectedLang,function(err,response){
        if(err){
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }
    });


    e.preventDefault();
}