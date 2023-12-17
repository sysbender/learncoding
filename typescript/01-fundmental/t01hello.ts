console.log("hellollll abc")

// variable declaration & inference
let age = 6
const c = 6   // type 6 is a literal type


// declare a 
// between 500 

const random_wait_time = Math.round(Math.random() * 500) + 500

let startTime = new Date()
let endTime : Date      // type annotation

setTimeout(() => {
    //endTime =0
    endTime = new Date()
}, random_wait_time);


function add(a :number, b: number){
    return a + b
}

