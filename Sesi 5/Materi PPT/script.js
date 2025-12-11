//Index =     0  1  2  3  4
const list = [1, 2, 3, 4, 5];

// Length = menghitung panjang/banyak isi array
console.log(list.length);

// toString = mengubah tipe data menjadi string
console.log(list.toString());

// Join = memberi pemisah di setiap jeda antar array
console.log(list.join(" - "));

// At = menunjuk sesuai index yang diinginkan (berdasarkan index) 
console.log(list.at(2));
console.log(list[4]);

// Menambah nilai di dalam array
list.push(6);
console.log(list);

// Mengeluarkan nilai di dalam array yang paling kanan/luar
list.pop();
console.log(list);

// Mengecek kehadiran nilai di dalam array
console.log(list.includes(5));
console.log(list.includes(20));

// Reverse = mengeluarkan output secara terbalik
console.log(list.reverse());


// OBJECT
const person = {
    name: {
        first: "Fidelis",
        last: "Marcelino"
    },
    age: 20,
    courses: "Front-End Development",
    isBinusian: true,
    skills: ["HTML", "CSS", "JavaScript"],
};

// Memberikan output age
console.log(person.age);
console.log(person.name);
console.log(person.name.first);

person.age = person.age + 5;
console.log(person.age);

console.log(person.nationality);
person.nationality = "Indonesian";
console.log(person.nationality);

const inputChangeHandler = (e) => {
    console.log("Input berubah!");
}

const submitHandler = (e) => {
    console.log("Submit");
    document.getElementById("text-2").innerHTML = document.getElementById("input-name").value;
}