const filter = document.getElementById("filter");


// Sayfa Yüklendi event'i

/*
document.addEventListener("DOMContentLoaded",load);

function load(e){
    console.log("Sayfa Yüklendi.");
}
*/

//Focus ve Blur
filter.addEventListener("focus",run);
filter.addEventListener("blur",run);
function run(e){
    console.log(e.type);
}

//Paste
filter.addEventListener("paste",run)