
console.log ("========================String========================");

/*1. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda */
let myName = "Fuji Taufik";
console.log(myName, "==> Soal No. 1");


/*2. Hitung panjang nama anda menggunakan metode length */
let nameLength = myName.length;
console.log(nameLength, "==> Soal No. 2");

/*3. Ubah semua huruf dalam nama Anda menjadi huruf besar dan tampung di variable*/
let nameUppercase = myName.toUpperCase();
console.log(nameUppercase, "==> Soal No. 3");


/*5. Ambil huruf pertama dari variable "nama" */
let firstWord = myName[0];
console.log(firstWord, "==> Soal No. 5");

/*6. Ambil potongan nama anda, misalnya nama pertama anda */
let firstName = myName.substring(0,4);
console.log(firstName, "==> Soal No. 6");
console.log(myName.slice(0,5));

/*7. Gabungkan potongan nama anda dengan string "Love Javascript"*/
let loveJs = "Love Javascript";
let namePlus = myName + " " + loveJs;
console.log(namePlus, "==> Soal No. 7");

/*8. Tampilkan hasil akhir dengan console.log() */
let lastName=myName.slice(-1);
console.log(lastName, "==> Soal No. 8"); 

console.log ("========================Mengubah Tipe Data========================");

/*1. Buat variabel dengan nama umur dan isi dengan umur Anda dalam bentuk string */
let nameAge = "23";
let manipulateAge = Number (nameAge);
let nameHight = "175";
let manupalateHeight = parseFloat (nameHight);

console.log (manipulateAge);
console.log (manupalateHeight);

console.log ("========================Pengecekan Tipe Data========================");
let personalName = "Fuji Taufik ";
console.log (typeof(personalName));


console.log ("==================Penjumlahan dan Pengurangan=======================");
let num1 = 10;
let num2 = 15 ;
let plus = (num1+num2);
let minus = (num1-num2);

console.log(plus);
console.log(minus);

console.log ("==================Pembagian dan Perkalian===========================");
let num3 = 20;
let num4 = 5;
let multiplication = num3*num4;
let divided = num3/num4;

console.log(multiplication);
console.log(divided);



console.log ("==================Pangkat Bilangan===========================");

let base = 3
let exponent = 4
let result = Math.pow(base, exponent)
console.log(result)

console.log ("==================RATA-RATA DARI ARRAY===========================");

const numbers = [5, 8, 12, 4, 6];
const sum = numbers.reduce((total, num) => total + num, 0);
const average = sum / numbers.length;
console.log( average);

console.log ("==================BILANGAN GANJIL & GENAP =======================");
const num = 8;
if(num %2 == 0){
    console.log (num + " adalah bilangan genap");
}else{
    console.log (num + " adalah bilajangan ganjil");
}