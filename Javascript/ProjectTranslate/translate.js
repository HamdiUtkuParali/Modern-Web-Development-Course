function Translate(word,language){
    this.apikey = "";
    this.word = word;
    this.language = language;
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri
    const endpoint = `https://translation.googleapis.com/language/translate/v2?key=${this.apikey}&q=${this.word}&target=${this.language}`;
    
    this.xhr.open("GET",endpoint);

    this.xhr.onload = () =>{
        if(this.xhr.status === 200){
            const text = JSON.parse(this.xhr.responseText).data.translations[0].translatedText ;
            console.log(text);
            callback(null,text);
        }
        else{
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}
