const num = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10]
num.push(6, "Alicja")
console.log(num)


// const liczbyDo100 = new Array() 
// for(i=2;i<=10; ++i) {
//     liczbyDo100.push(i)
// } 
// console.log(liczbyDo100)

let fibon = [1, 2];
function listfibonacci(num) {
    for ( let i = 1; i < num; i++) {
        fibon.push(fibon[i] + fibon[i - 1]);
    }
    console.log(fibon);
}

listfibonacci(11)


const fibo = new Array(0,1);

if(fibo[fibo.length - 1] < 100 && fibo[fibo.length - 1]> 1){
    let next = fibo[fibo.length - 1] + fibo[fibo.length - 2]
    fibo.push(next)
}
console.log(fibo)


const tablica = new Array
for(let i = 1; i < 10; i++){
    tablica.push("Tsuki" + 1)
}
console.log(tablica)


const imiona = ["Tsuki", "Bakuś", "Kiri", "Artur", "Szczoto"]
console.log(imiona)


const liczbyDo100 = new Array() 
for(let i = 0;i < 100; i++) {
    liczbyDo100.push(i + 1)
    liczbyDo100.pop()
}
console.log(liczbyDo100)


