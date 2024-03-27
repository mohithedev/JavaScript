// chapter 04 => class-30:  while loop


/**
 *  while() {
 *      
 *     }
 */



// var i = 0
// while (i <= 10) {
//     console.log( i, 'Mohi');
//     i++
// }



var isRunning = true

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 6) {
        console.log('Yahooo cokka match win!!!');
        isRunning = false
    } else {
        console.log('You have got ' + rand);
    }
}