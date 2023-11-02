// async function test(data) {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(data);
//         },5000);
//     });

//     console.log("Naber");
//     let response = await promise;
//     return response;

// }

// test("Merhaba").then(response => console.log(response));

// async function testData(data) {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         },5000);
//     });

//     const response = await promise;
//     return response;
// }

// testData(245)
// .then(data => console.log(data))
// .catch(err => console.error(err));

// async function getCurreny(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// getCurreny("https://v6.exchangerate-api.com/v6/a4b984fd10bf1594b4769fb6/latest/EUR")
// .then(response => console.log(response));

async function test(data) {
    let myPromise = new Promise((myResolve,myReject) => {
        if(data === "number")
        {
            myReject(new Error("Geçersiz Değer"));
        }
        else{
            setTimeout(() => myResolve(data+" Dünya"),5000);
        }
        
    });

    let myResponse = await myPromise;

    return myResponse+" Güzel Bir Gün";
}

test("Merhaba")
.then(result => console.log(result))
.catch(error => console.error(error));