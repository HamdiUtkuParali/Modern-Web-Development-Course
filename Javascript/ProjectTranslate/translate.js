function Translate(){
    this.apikey = "";
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(word,lang,callback){
    //Ajax işlemleri
    const endpoint = `https://translation.googleapis.com/language/translate/v2?key=${this.apikey}&q=${word}&target=${lang}`;
    
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