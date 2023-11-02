class Request {

    async get(url){
        
        const myResponse = await fetch(url);
        const myData = await myResponse.json();
        return myData;
    }

    async post(url,data){
        const myResponse = await fetch(url,{
            method : 'POST',
            body: JSON.stringify(data),
            headers: {"Content-type":"application/json; charset=UTF-8"}
        });
        const myData = await myResponse.json();
        return myData;
    }

    async put(url,data){
        const myResponse = await fetch(url,{
            method:'PUT',
            body: JSON.stringify(data),
            headers: {"Content-type":"application/json; charset=UTF-8"}
        });
        const myDdata = await myResponse.json();
        return myData;
    }

    async delete(url){
        const myResponse = await fetch(url,{
            method:'DELETE'
        });
        return "Veri silme işlemi başarılı";
    }

}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => console.log(data))
.catch(err => console.log(err));