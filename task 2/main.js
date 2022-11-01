
// task 2: 
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
// Example: [17, 21, 23] will print in console "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."



let display = (array, n) => {
    let result = "";
    for(let i = 0 ; i< n ; i++){
        result += array[i] + "ºC in " + ++i + " days ... ";
        i--;
    }
    return result;
}
// Tự khởi tạo array    
let main = () =>{
    let n = 3;   // Số lượng phần tử của mảng
    let array = [17,21,23];
    let result = display(array, 3);
    console.log(result);
}
main();


// Muốn cho người dùng nhập một chuỗi rồi xử lý chuỗi về mảng
function inputNumber(){
    // let n = document.getElementById('input').value;
    let text = document.getElementById('input-string').value;
    text = text.trim();
    console.log(text);
    let array = [], k = 0, first = 0, last = 0;
    for(let i = 0; i< text.length ; i++){
        if(text[i] != ' ' && text[i-1] == ' '){
            first = i;
        }
        if(text[i] != ' ' && text[i+1] == ' '){
            last = i+1;
            array[k] = Number(text.substring(first, last));
            k++;
        }
        if(text[i] != ' ' && text[i+1] == null){
            last = i+1;
            array[k] = Number(text.substring(first, last));
            k++;
        }
    }
    let result = display(array,k);
    document.getElementById('display').innerHTML = result;
}
