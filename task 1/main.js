// 1) Hầu hết các bạn đều có kiến thức cơ bản về ngôn ngữ lập trình nên 
// trong 2 tuần đầu mọi người sẽ tìm hiểu về số,hàm ,chuỗi, mảng cách sử dụng console.log trong js 

// bt:

// task 1:
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// ex:
// underscore_case => underscoreCase
// my_first_name => myFirstName
// Some_Variable => someVariable 
// calculate_AGE => calculateAge 
// delayed_departure => delayedDeparture 

// task 2: 
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
// Example: [17, 21, 23] will print in console "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
function isUpperCase(character){

}
function reverse(){
    let text = document.getElementById('input-string').value;
    let i, result="";
    for(i=0;i<text.length;i++){
        if(text[i] == '_'){
            if(text[i+1]==null){
                break;
            }      
            if(text[i+1]!='_'){
                result += text[i+1].toUpperCase();
                i++;
            }         
            continue;
        }  
        result += text[i].toLowerCase();

    }
    let resultMain="";
    resultMain += result[0].toLowerCase() + result.substring(1);
    document.getElementById('input-string').value = resultMain;
}

//____NGuyEn__KHaNh__TOÀn___

   