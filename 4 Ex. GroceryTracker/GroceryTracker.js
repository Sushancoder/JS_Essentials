let g1;
let g2;
let g3;

function total() {

    let g1 = parseFloat(document.getElementById("groc1").value)
    let g2 = parseFloat(document.getElementById("groc2").value)
    let g3 = parseFloat(document.getElementById("groc3").value)

    result = g1 + g2 + g3;
    document.getElementById("result").innerHTML = "Your total amount is: $" + result;
};
