
function receive(){
    let text = document.getElementById('input-string').value;
    let process = text.toLowerCase()
    
    // for(let i = 0 ; i < process.length ; i++){
    //     if(process[i] == '_'){
    //         process[i+1].toUpperCase();    // problem because it creat new string
    //         process.length --;
    //         i--;
    //         continue;
    //     }
    // }
    console.log(process);
}