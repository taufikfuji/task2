function myName() {
    let myName = "Fuji Taufik"
    return myName
}
console.log(myName());

/* ===========Length==================== */
function getNameLength(name) {
    return name.length;
}

let myName = "Fuji Taufik";
let length = getNameLength(myName);

console.log(length);




/*================Huruf Besar Semua ======================== */
let myName = " fuji taufik";
function capitalString(upper) {
    return upper.toUpperCase();
}
let capital = capitalString(myName);
console.log(capital);