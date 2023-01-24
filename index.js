//let repeatEL = document.getElementById("repeat-el")
//let wordEL = document.getElementById("word-el").innerText



function play() {
    let wordEL = document.getElementById("word-el").value
    document.getElementById("repeat-el").innerText = wordEL + " %0D%0A" + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL 


}

function remove(){
    wordEL = document.getElementById("word-el").value = ""
    document.getElementById("repeat-el").innerText = wordEL
}

for(var p = 0; p < 21; p++){
    let wordEL = document.getElementById("word-el").value
    document.getElementById("repeat-el").innerText = wordEL
    console.log(wordEL)
}