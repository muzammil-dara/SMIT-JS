//Question 1 and 2
var num1 = +prompt('Enter the value')
var num2 = +prompt('Enter the value')
var num3 = num1 + num2
var num4 = num1 - num2
var num5 = num1 * num2
var num6 = num1 / num2
var num7 = num1 % num2
alert('Sum  of ' + num1 + ' and ' + num2 + ' is ' + num3)
alert('Result  of subraction of ' + num1 + ' and ' + num2 + ' is ' + num4)
alert('Result  of multiplication of ' + num1 + ' and ' + num2 + ' is ' + num5)
alert('Result  of division of ' + num1 + ' and ' + num2 + ' is ' + num6)
alert('Result  of reminder of ' + num1 + ' and ' + num2 + ' is ' + num7)


//Question 3
var variable = '??'
document.write('Value after variable declaration is: ' + variable + '<br>')
var initial = 3
document.write('Initial Value: ' + initial + '<br>')
var initial2 = 4
document.write('Value after increment is: ' + initial2 + '<br>')
var add = 11
document.write('Value after addition is: ' + add + '<br>')
var dec = 10
document.write('Value after decrement is: ' + dec + '<br>')
var reminder = 1
document.write('The reminder is: ' + reminder + '<br><br><br>')


//Question 4
var price = 600
var tickets = 5
var total = price * tickets
document.write('Total cost to buy ' + tickets + ' tickets to a movie is ' + total + ' PKR' + '<br><br><br>')


//Question 5
var number = parseInt(4)

for (let i = 1; i <= 10; i++) {
    var result = number * i;

    document.write(number + " x " + i + " = " + result + "<br>");
}
document.write('<br><br><br>')


//Question 6
var celsius = 12
var farenheit = 68
var ftoC = (farenheit - 32) * 5 / 9
var ctoF = (celsius * 9 / 5) + 32
document.write('<h3>Temperature Converter</h3>')
document.write(celsius + '°C is ' + ctoF + '°F <br>')
document.write(farenheit + '°F is ' + ftoC + '°F<br><br><br>')


//Question 7
var price1 = 560
var qty = 2
var price2 = 200
var qty2 = 5
var ship = 150
var total = price1 * qty + price2 * qty2 + ship

document.write('<h3>Shopping Cart</h3>')
document.write('Price of item 1 is ' + price1 + '<br>' + 'Quantity of item 1 is ' + qty + '<br>' + 'Price of item 2 is ' + price2 + '<br>' + 'Quantity of item 2 is ' + qty2 + '<br><br>' + 'Shipping Charges ' + ship + '<br><br>' + 'Total cost of your order is ' + total + ' PKR<br><br>')


//Question 8
var totalMarks = 1200
var marksObtained = 900
var percentage = marksObtained*100/totalMarks

document.write('<h3>Marks Sheet</h3>')
document.write('Total marks : '+totalMarks+'<br>'+'Marks obtained : '+marksObtained+'<br>'+'Perentage : '+percentage+'%<br><br>')


//Question 9
var usd = 10
var sr = 25
var pkr = usd*275+sr*73

document.write('<h3>Currency in PKR</h3>')
document.write('Total currency in PKR : '+pkr+'<sub>(according to current exchange rate)</sub><br><br>')


//Question 10
var no = 2
alert(no+5*10/2)


//Question 11
var currentYear = 2023
var birthYear = 2002
var age = currentYear-birthYear

document.write('<h3>The Age Calculator</h3>Current Year : '+currentYear+'<br>'+'Birth Year : '+birthYear+'<br><br>'+'I am '+age+' years old<br><br>')


//Question 12
var radius = 12
var pi = 3.142
var circumference = 2*pi*radius
var area = pi*radius*radius

document.write('<h3>The Geometrizer</h3>Radius of a circle : '+radius+'<br>'+'The circumference is : '+circumference+'<br>'+'The area is : '+area+'<br><br><br>')


//Question 13
var A = 10
document.write('The value of a is : '+A+'<br><br>'+'The value of ++a is : '+11+'<br>'+'Now the value of a is : '+11+'<br><br>'+'The value of a++ is : 11<br>Now the value of a is : 12<br><br>The value of --a is : 11<br>Now the value of a is : 11<br><br>The value of a-- is : 11<br>Now the value of a is : 10<br><br><br>')


//Question 14
var a = 2
var b = 1
var result4 = --a - --b + ++b + b--

document.write('a is '+a+'<br>'+'b is '+b+'<br>'+'result is '+result+'<br><br><br>')


//Question 15
var favSnacks = 'Oreo Biscuits'
var currentAge = 21
var maxAge = 85
var amount = 2
var totalBiscuits = maxAge-currentAge*amount

document.write('You will need '+totalBiscuits+' '+favSnacks+' to last you until the ripe old age of '+maxAge)