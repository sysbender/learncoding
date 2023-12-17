//let d = Date.now();
let d = new Date();

const day = `${d.getDate()}`.padStart(2, "0");
const month = `${d.getMonth() + 1}`.padStart(2, "0");
const year = `${d.getFullYear()}`;
const hour = `${d.getHours()}`.padStart(2, "0");
const minute = `${d.getMinutes()}`.padStart(2, "0");

console.log(`${day}/${month}/${year}, ${hour}:${minute}`);
