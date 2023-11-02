function getTextFile(){
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(){
    fetch("https://v6.exchangerate-api.com/v6/a4b984fd10bf1594b4769fb6/latest/EUR")
    .then(response => response.json())
    .then(data => console.log(data.conversion_rates.TRY))
    .catch(err => console.log(err));
}

//getTextFile();
// getJsonFile();
getExternalAPI();