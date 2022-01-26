document.getElementById("count-value").innerHTML = localStorage.getItem("key");

if(localStorage.getItem("key") <= 1){
    document.getElementById("final").innerHTML = "NO";
}
if(localStorage.getItem("key") > 1 && localStorage.getItem("key") <= 4){
    document.getElementById("final").innerHTML = "Maybe";
}
if(localStorage.getItem("key") == 5){
    document.getElementById("final").innerHTML = "Yes";
}