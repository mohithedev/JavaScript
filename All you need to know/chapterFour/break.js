// 33 Break Statement 

while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 6) {
        console.log('Yahooo cokka match win!!!');
        break
    } else {
        console.log('You have got ' + rand);
    }
}

for (let i = 1; i < 10; i++){
    if(i % 5 === 0) {
        break
    } else {
        console.log(i);
    }
}