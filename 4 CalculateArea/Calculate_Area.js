let length;
let width;

function CalculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
   let area = length * width; 
   document.getElementById("result").innerText = `The area of your rectange is: ${area}`;
}
