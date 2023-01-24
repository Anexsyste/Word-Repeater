//let repeatEL = document.getElementById("repeat-el")
//let wordEL = document.getElementById("word-el").innerText



/*function play(str, num) {
    let wordEL = document.getElementById("word-el").value
    if (num < 21){
        return str.repeat(num);

    }else {
        return "";
    }

    /*let wordEL = document.getElementById("word-el").value
    document.getElementById("repeat-el").innerText = wordEL
    return str;*/
    
    
    /*let wordEL = document.getElementById("word-el").value
    document.getElementById("repeat-el").innerText = wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL 
*/

   /* var numberOfTimes = 21;
    for(var p = 0; p < numberOfTimes; p++){
        let wordEL = document.getElementById("word-el").value 
         document.getElementById("repeat-el").write(wordEL + "<br>" + wordEL)
   */
   
    /*    let wordEL = document.getElementById("word-el").value
    document.getElementById("repeat-el").innerText = wordEL
    console.log(wordEL)
}

}*/

function play(){
    let wordEL = document.getElementById("word-el").value
    document.getElementById("repeat-el").innerText = wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + "\n" + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + "\n" + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + "\n" + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + " " + wordEL + "\n"   
}


function remove(){
    wordEL = document.getElementById("word-el").value = ""
    document.getElementById("repeat-el").innerText = wordEL + "Word will appear here"
}

function copyFunction(){
    const copyText = document.querySelector(".myInput").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    k2button.innertext = "text copied";
    textArea.remove();
}
document.getElementById("k2button").addEventListener('click', copyFunction)