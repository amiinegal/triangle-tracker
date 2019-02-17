function triangle() {
 var sides = [];
 sides.push(document.getElementById("side1").value);
 sides.push(document.getElementById("side2").value);
 sides.push(document.getElementById("side3").value);

 var [a,b,c] = sides;
 if(a.length === 0 || b.length === 0 || c.length === 0 ) {
 } else {
   side(a,b,c);
 }
}
function side(a,b,c) {
if(a === b && b === c && c === a) {
alert("equilateral triangle")
}
else if (a + b > c && b + c > a && c + a > b) {
alert("scalene triangle")
}
else if(a === b || b === c || c === a) {
alert("isosceles triangle")
}
else {
alert("not a triangle")
}

}

 function reset() {
   location.reload();
}
function submit() {
  location.reload();
}
