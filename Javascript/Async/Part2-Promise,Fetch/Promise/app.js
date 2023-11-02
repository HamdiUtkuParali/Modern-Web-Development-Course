function getData(data) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data === "string"){
                resolve(data);
            }
            else{
                reject(new Error("Lütfen string bir değer girin"));
            }
        },5000);
    });
}

// getData(25)
// .then(response => console.log("Gelen Değer " + response))
// .catch(err => console.error(err));

function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }
            else{
                reject(new Error("Lütfen Bir Sayı Girin"));
            }
        },3000);
    });
}

// addTwo(10)
// .then(response => {
//     console.log(response);
//     return response + 2;
// }).then(response2 => console.log(response2))
// .catch(err => console.error(err));

function multiplyByTwo(number){
    return new Promise(function(myResolve,myReject){
        if(typeof(number)=== "number"){
            myResolve(number*2);
        }
        else{
            myReject("Geçersiz değer");
        }
    });
}

multiplyByTwo(50)
.then(result => console.log(result))
.catch(error => console.error(error));