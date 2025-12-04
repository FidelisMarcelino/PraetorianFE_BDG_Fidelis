function external(){
    alert("Halo saya dari External JS");
}

var a = 10;
console.log(a);
var a = 20;
console.log(a);

let b = 30;
console.log(b)
b = 35;
console.log(b)

const c = 40;
console.log(c)
// const c = 45;
// console.log(c)

let name = "Budi"; //string
let age = 20; //number
let DOB = new Date("2020-05-29");
let isMale = true;
let information = {
    hobby : ["playing", "reading"],
    nationality: "Indonesia",
}

console.log(name)
console.log(age)
console.log(DOB)
console.log(isMale)
console.log(information)

// Arithmetics
console.log(3 + 3);
console.log(3 - 3);
console.log(3 * 3);
console.log(3 / 3);
console.log(20 % 3); //modulo 
console.log(3 ** 3); //pangkat


// Assignment
let x = 6;
x += 3;
console.log(x);

console.log(x -= 3);
console.log(x *= 3);
console.log(x /= 3);


//Comparison / Perbandingan
console.log(1 == "1");
console.log(1 === "1");
console.log(3 <= 5);
console.log(3 > 5);


// String
console.log("Hello " + "Worlds");
let s = "Hi, "
s+= "you"
console.log(s)


//Logical (&&, ||, !)
// && --> AND
// T && T = T
// T && F = F
// F && T = F
// F & F = F

// || --> OR
// T || T = T
// T || F = T
// F || T = T
// F || F = F

// ! --> Not
console.log(true && false);
console.log(true || false);
console.log(!true);


//Bitwise 101010001

// 0101 & 0011 = 0001 --> 7
console.log(5 & 3)

// 0101 | 0011 = 0111 --> 7
console.log(5 | 3)


// Ternary
let ages = 18;
if(ages < 18){
    console.log("Masih muda");
} else {
    console.log("Sudah tua");
}

let status = ages < 18 ? "Masih muda2" : "Sudah tua2";
console.log(status);

typeof 1 //number
typeof "a" //string


// SELECTION
let y = 10;

if(y < 10){
    console.log("Child");
} else {
    console.log("Adult");
}


print("1. Main")
print("2. Settings")
print("3. Exit")
print(">> ")

let menu;
switch(menu){
    case 1: 
        //main
        break;

    case 2:
        //isi ulang
        break;

    case 3:
        //Exit
        break;

    default:
        console.log("Input yang bener");
        break;
}

let p = 11;
while(p <= 10){
    console.log(p);
    p += 1;
}

p = 11;
do {
    console.log(p)
    p += 1;
} while (p <= 10);

let q = 20;
// ++ -> increment : akan nambah 1 setiap looping
// -- -> decrement : akan kurang 1 setiap looping
for(q = 0; q <= 30; q++){
    console.log(q)
}

const fruit = ["Apple", "Banana", "Grape"];
fruit.forEach(function(buah){
    console.log(buah);
})

function printName(name){
    console.log(name);
}

printName("Budi");


function operation(a, b, operator){
    switch(operator){
        case "+":
            console.log(a + b);
            break;
        
        case "-":
            console.log(a - b);
            break;

        case "*":
            console.log(a * b);
            break;

        case "/":
            console.log(a / b);
            break;

        default:
            console.log("Operator tidak dikenal!");
    }
}

operation(5, 5, "+");
operation(5, 5, "-");
operation(5, 5, "*");
operation(5, 5, "/");
operation(5, 5, "=");