// Prototype,Ajax,Callback

const translate = new Translate();
const ui = new UI();

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translater);
}


function translater(e){
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
    
    ui.changeUI();
    e.preventDefault();
}