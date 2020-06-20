function countdownattempt(num){
    for (let i = num; i>0;i--){
        num--
        if (num === 0){
            console.log('DONE!'); //this is my first attempt before seeing the solution, I thought I could use a for loop and set the timer for that but after thinking
            break;                //about it I realized the timer would always run the loop in its first attempt making the timer useless, then I checked the solution
        }
        console.log(num) 
    } 
};

//countdownattempt(5);



function countdown (num){
        let timer = setInterval(function (){
        num--;
        if (num === 0){
            clearInterval(timer);                //this is my attempt at it after glancing at the solution and seeing the logic
            console.log('DONE!')                 // trying to understand though why after each interval the timer doesn't just start at the original number again
        }else{                                   // for example "4,4,4,4,4,4,4,4..." how does it know to pull back the returned value from the last loop
            console.log(num);                    // hopefully my mentor can explain this to me
        }

    },1000)
}



function randomGameAttempt(){
    let count = 0;
    let y = 0
    do {
        let x = Math.random();    // first attempt at randomGame before seeing solution, same issue of using timer on a loop as first function
        x;
        y = x;
        count++;
        count;
    } while (y<=0.75);
    console.log(count)
}

//randomGameAttempt();

function randomGame(){
    let count = 0;
    let random = setInterval(function () { // attempt after glancing at solution logic, have the same question about the timer as first function, is it a loop function basically? Hopefully mentor can answer
        let x = Math.random();
        x;
        console.log(x);
        count++;
        if (x > 0.75){
            clearInterval(random);
            console.log(`it took ${count} tries`)
        }
    },1000)
}
randomGame();