// ISO Date --> menampilkan date lokal (GMT +7, karena kita di WIB)
const isoDate = new Date("2023-05-31");
console.log(isoDate);

// T -> time separator, pemisah antara tanggal dan waktu
// Z -> Zulu time, GMT + 0
const isoDateTime = new Date("2023-05-31T14:30:00Z");
console.log(isoDateTime);

// Short Date --> menampilkan beradasarkan waktu lokal US
const shortDateUS = new Date("05/31/2023");
console.log(shortDateUS);

// Longdate
const longDate = new Date("May 31, 2023");
console.log(longDate);


// Spread

// Update
const originalOrganization = {
    name: "BNCC", 
    age: 35
};

console.log(originalOrganization);

const updateOrganization = {
    name: "Bina Nusantara Computer Club",
}

const myUpdateOrganization = {
    ...originalOrganization,
    ...updateOrganization,
};

console.log(myUpdateOrganization);


// Gabungin 2 properti
const frontEnd = ["HTML", "CSS", "JS"];
const backEnd = ["PHP", "Node", "Express"];

const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

// Nambah data/properti
const user = {
    username: "admin",
};

console.log(user);

const userWithRole = {
    ...user,
    role: "superadmin",
};

console.log(userWithRole.role);
console.log(userWithRole.username);

// Ambil properti tertentu
const color = ["Red", "Blue", "Green", "Yellow"];
const [first, second, ...others] = color;

console.log(first);
console.log(second);
console.log(others);


// Rest Operator
function jumlahkan(...angka){
    return angka.reduce((total, nilai) => total + nilai, 0);
}

console.log(jumlahkan(2,4,6));


const angka = [1,2,3,4,5];
const kuadrat = angka.map(n => n * n);
console.log(kuadrat);

// Filter
const genap = angka.filter(n => n % 2 == 0);
console.log(genap);

const users = [{id: 1}, {id: 2}, {id: 3}];
const find = users.find(u => u.id == 2);
const cari = users.find(u => u.id == 7);
console.log(find);
console.log(cari);

// Buat user
function buatUser(username, email, ...roles){
    return{
        username,
        email,
        roles,
    };
};

console.log(buatUser("admin", "admin@gmail.com", "editor", "moderator"));

// Exception Handling
try {
    //Kode yang mungkin menimbulkan error
    console.log("Halo");
} catch (error) {
    // Kode yang menangani error
    console.log("Error")
} finally{
    // Kode yang selalu dijalankan
    console.log("Regis sukses");
}


// Async and Await
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome to BNCC!");
        }, 2000);
    });
};
// 1s == 1000

async function getWelcomeMessage(){
    try {
        console.log("Fetching Message...");
        const response = await fetchData();
        console.log(response);
    } catch (error) {
        console.log("Error");
    }
}

getWelcomeMessage();