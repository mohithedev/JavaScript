// 46: Search Data

var arr = [4, 7, 3, 5, 10, 4, 9, 2, 8] 

var find = 3
var isFound = false

for(var i = 0 ; i < arr.length; i++) {
    if(arr[i] === find) {
        console.log('Data Found at Index ' + i); 
        isFound = true
        break;
    }
}

if(!isFound){
    console.log('Data Not Found!');
}