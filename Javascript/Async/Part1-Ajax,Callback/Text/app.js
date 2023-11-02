document.getElementById("btn").addEventListener("click",function(){
    
    const xhr = new XMLHttpRequest();

    /* Eski Yöntem
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState == 4) {
            console.log(this.responseText);
        }
    }
    */
   xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
   }

    xhr.open("GET","example.txt",true);

    xhr.send();
})