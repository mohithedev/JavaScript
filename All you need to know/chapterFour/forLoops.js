// chapter 04 => class-29:  for loop


/**
 *  for (initializer, condition, increment) {
 *  
 *      }
 **/
for (i = 0; i < 100; i++) {
    // console.log(i ,'Hello form js');
}


for (i = 0; i <= 100; i++) {
    // console.log(i);
}


for (i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        // console.log(i);
    }
}


for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log(i);
    }
}



var sum = 0;
for (i = 1; i <= 10; i++) {
    // console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i;
}
// console.log('Result = ' + sum);




// tasks 
var addNum = 0;
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(addNum + ' + ' + i + ' = ' + (addNum + i));
        addNum += i;
    }
}