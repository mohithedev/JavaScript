// 35 Infinity For Loop

for(; ;){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 6) {
        console.log('Yahooo cokka match win!!!');
        break
    } else {
        console.log('You have got ' + rand);
    }
}