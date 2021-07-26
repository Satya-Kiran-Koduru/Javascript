// const M_w = 78;
// const M_h = 1.62;
// const J_w = 92;
// const J_h = 1.76;

const M_w = 95;
const M_h = 1.88;
const J_w = 85;
const J_h = 1.76;

let BMI_M = BMI_Cal(M_w, M_h);
console.log("Mark's BMI:");
console.log(BMI_M);
let BMI_J = BMI_Cal(J_w, J_h);
console.log("John's BMI:")
console.log(BMI_J);

let markHigherBMI;
if (BMI_M > BMI_J) {
    markHigherBMI = true;
}
else {
    markHigherBMI = false;
}
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log("Mark has Higher BMI than John");
}
else {
    console.log("Mark has lower BMI");
}

function BMI_Cal(m, h) {
    let BMI = m / h ** 2;
    return BMI;
}