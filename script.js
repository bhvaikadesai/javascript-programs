// alert("hello world!");
    
// let js = "good";
// if(js === 'good') alert('confirm query');   

// console.log(40 + 8 +23 -10);
// console.log("jonas");
// console.log(23);
// var firstname = "jonas";
// console.log(firstname);

// let fistjob = "programmer";
// let currentjob = "teacher";


// let job1 = "program";
// let job2 = "teacher";

// console.log(fistjob , job2);


// console.log(population / 2);
//     population++;
//     console.log(population);
//     console.log(population > 6);
//     console.log(population < 33);
//     const description1 =
//     country +
//     ' is in ' +
//     continent +
//     ', and its ' +
//     population +
//     ' million people speak ' +
//     language;
//     console.log(description1);

// let age = 30;
// age = 31;

// const birthyear = 1991;

// var job = "programmers"
// job1 = "teacher"



// const birthyear = 2000;
// const birthyear2 = 1998;
// console.log(birthyear - '' - birthyear2);

const massmask = 78;
const heightmask = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

// const massmask = 95;
// const heightmask = 1.88;
// const massjohn = 85;
// const heightjohn = 1.76;

const BMImask = massmask / heightmask ** 2;
const BMIjohn = massjohn / (heightjohn * heightjohn);

console.log(BMImask, BMIjohn);

if(BMImask > BMIjohn){
    console.log(`mark's BMI (${BMImask}) is higher then john's (${BMIjohn})!`)
}else{
    console.log(`john's BMI (${BMIjohn}) is higher then mask's! (${BMImask})`)
}




