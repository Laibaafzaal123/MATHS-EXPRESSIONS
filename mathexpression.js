//Q1:Write a program that take two numbers & add them in a  new variable. Show the result in your browser. 
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

//Q2:Repeat task1 for subtraction, multiplication, division & modulus. 
//Subractation:
var num1 = 3;
var num2 = 5;
var subract = num1 -num2;
document.writeln("Subract of " + num1 + " and " + num2 + " is " + subract+ "<br>");
//Multiplication:
var num1 = 3;
var num2 = 5;
var multiply= num1 * num2;
document.writeln("Multiply of " + num1+ " and " + num2 + " is " + multiply+ "<br>");
//Division:
var num1 = 3;
var num2 = 5;
var divide = num1 / num2;
document.writeln("Divide of " + num1 + " and " + num2 + " is " + divide+ "<br>");
//Modulus:
var num1 = 3;
var num2 = 5;
var modulus = num1 % num2;
document.writeln("Modulus of " + num1 + " and " + num2 + " is " + modulus+ "<br><br>");

//Q3:Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value  by 3.  
// l. Output : “The remainder is : 0”.

// Step a: Variable declare 
var a;

// Step b: Declaration show  output is (undefined)
document.write("Value after variable declaration is: " + a + "<br>");

// Step c: initialize a variable
a = 5;

// Step d: Initialization tehn show their value
document.write("Initial value: " + a + "<br>");

// Step e: Increment (+1)
a++;

// Step f:After Increment showing their value
document.write("Value after increment is: " + a + "<br>");

// Step g: Adding 7 in above value
a += 7;

// Step h: After addition showing their value
document.write("Value after addition is: " + a + "<br>");

// Step i: Decrement (-1)
a--;

// Step j:After Decrement showing their value
document.write("Value after decrement is: " + a + "<br>");

// Step k: Remainder (value is divide by 3)
var remainder = a % 3;

// Step l:Showing their Remainder 
document.write("The remainder is: " + remainder+"<br><br>" );

//Q4: Cost of one movie ticket is 600 PKR. Write a script to  store ticket price in a variable & calculate the cost of buying 5  tickets to a movie. 
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR"+"<br><br>" );

//Q5:Write a script to display multiplication table of any  number in your browser. 
var tableNum = 9;
for (var i = 1; i <= 10; i++) {
  document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br><br>");

//Q6: The Temperature Converter: It’s hot out! Let’s make a  converter based on the steps here. 
// a. Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”. 
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>" );

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C"+ "<br>");
document.write("<br><br>");

//Q7: Write a program to implement checkout process of a  shopping cart system for an e-commerce website. Store  the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 
var priceItem1 = 650;
var QuantityItem1 = 3;

var priceItem2 = 100;
var QuantityItem2 = 7;

var shippingCharges = 100;

var totalCost = (priceItem1 * QuantityItem1) + (priceItem2 * QuantityItem2) + shippingCharges;

document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + QuantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + QuantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + " PKR");
document.write("<br><br>");

//Q8:Store total marks & marks obtained by a student in 2  variables. Compute the percentage & show the result in  your browser
var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("<br><br>");

//Q9:Assume we have 10 US dollars & 25 Saudi Riyals. Write a  script to convert the total currency to Pakistani Rupees.  Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee  and 1 Saudi Riyal = 28 Pakistani Rupee)
var usd = 10;
var riyal = 25;

var pkr = (usd * 104.80) + (riyal * 28);

document.write("<h3>Currency in PKR</h3>");
document.write("Total Currency in PKR: " + pkr);
document.write("<br><br>");

//Q10:Write a program to initialize a variable with some  number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var num = 10;
var result = ((num + 5) * 10) / 2;

document.write("<h3>Arithmetic Calculation</h3>");
document.write("Result: " + result);
document.write("<br><br>");

//Q11:The Age Calculator: Forgot how old someone is?  Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored  values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
var currentYear = 2025;
var birthYear = 2005;

var age = currentYear - birthYear;

document.write("<h3>Age Calculator</h3>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your age is: " + age + " years");
document.write("<br><br>");

//Q12:The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<h3>The Geometrizer</h3>");
document.write("Radius: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");
document.write("<br><br>");

//Q13:The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?  Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need  NNNN to last you until the ripe old age of NN”.
var snack = "Chocolate Chip";
var currentAge = 20;
var maxAge = 70;
var perDay = 2;
var totalSnacks = (maxAge - currentAge) * 365 * perDay;
document.write("<h3>The Lifetime Supply Calculator</h3>");
document.write("Favorite Snack: " + snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".");
document.write("<br><br>");















