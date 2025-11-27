// Arithmetic operator 
document.writeln('<hr><b><br> Arithmetic Operator </b>');

let a = parseInt(prompt('Enter value of A:'));
let b = parseInt(prompt('Enter value of B:'));

document.writeln('<br> Add : ', a + b);
document.writeln('<br> Sub : ', a - b);
document.writeln('<br> Mul : ', a * b);
document.writeln('<br> Div : ', a / b);

// Modulus and Increment-Decrement
let c = 25;
document.writeln('<br> c is : ', c);

let d = c++;  // postfix
document.writeln('<br> After c++ => c is : ', c);
document.writeln('<br> d is : ', d);

d = ++c; // prefix
document.writeln('<br> After ++c => c is : ', c);
document.writeln('<br> d is : ', d);

// Assignment operator
document.writeln('<hr><b><br> Assignment Operator </b>');

let e = 10;
document.writeln('<br> E is : ', e);

e+=10;
document.writeln('<br> E += 10 : ', e);

e**= 10;
document.writeln('<br> E **= 10 : ', e);

e %= 10;
document.writeln('<br> E %= 10 : ', e);

// Relational operator
document.writeln('<hr><b><br> Relational Operator </b>');

e = 25;
let f = "25";

document.writeln('<br> E > F : ', (e > f));
document.writeln('<br> E < F : ', (e < f));
document.writeln('<br> E >= F : ', (e >= f));
document.writeln('<br> E <= F : ', (e <= f));
document.writeln('<br> E == F : ', (e == f));
document.writeln('<br> E != F : ', (e != f));
document.writeln('<br> E === F : ', (e === f)); 
document.writeln('<br> E !== F : ', (e !== f));

// Logical operator
document.writeln('<hr><b><br> Logical Operator </b>');

let x = 10;
let y = 20;
let o = 30;

document.writeln("<br> X > Y AND Y > O : ", (x > y && y > o));
document.writeln("<br> X > Y OR Y > O : ", (x > y || y > o));
document.writeln("<br> !(X > Y) : ", !(x > y));
document.writeln("<br> X > Y : ", (x > y));

// Ternary operator   ( ? :  )
document.writeln('<hr><b><br> Ternary Operator </b>');

let age = 15 
document.writeln((age>=20) ? "<br>you'r eligible for vote" : "<br>you'r not eligible for vote")

let no = 25
document.writeln((no%2 == 0) ? "<br>Number is odd": "<br>Number is evan")
