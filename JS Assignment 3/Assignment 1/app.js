//Question 1
var name = prompt('please input your name')
alert('Hi '+ name)

//Question 2
var table = +prompt('Enter a number to print its table')
var sum;
for(i=1; i<=10; i++)
{
    sum = table*i
    document.write(table+' x'+i+' ='+sum+'<br>')
}

//Question 3
var city = prompt('Please enter your city')
if(city=='Karachi'||'karachi'){
    alert('Welcome to city of lights')
}

//Question 4
var gender = prompt('Gender')
if(gender=='male'){
    alert('Good morning Sir')
}
else{
    alert('Good morning mam')
}

//Question 5
var signal = prompt('Please input traffic signal color')
if(signal=='red')
{
    alert('vehicals must stop')
}
else if(signal=='yellow')
{
    alert('vehicals should ready to go')
}
else if(signal=='green')
{
    alert('vehicals can move now')
}
else{
    alert('Invalid Color')
}

//Question 6
var max_age = prompt('Input max age')
var age = prompt('Input current age')
if(age <= max_age)
{
    alert('You are welcome')
}
else{
    alert('You are too old')
}

//Question 7
var fuel = prompt('Enter current amount of fuel in litres')
if(fuel < 0.25)
{
    alert('Please refill the fuel in your car')
}
else{
    alert('You are good to go')
}

//Question 8
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//Question 9
var total = +prompt('Enter total marks')
var marks = +prompt('Enter obtained marks')
var per = (marks * 100) / total

document.write('<h3>Marks Sheet</h3>')
if(per >= 80){
    document.write(
        'Total marks : '+total+'<br>'+
        'Marks obtained : '+marks+'<br>'+
        'Percentage : '+per+'%<br>'+
        'Grade : A-one <br>'+
        'Remarks : Excellent'
    )
}
else if(per >=70){
    document.write(
        'Total marks : '+total+'<br>'+
        'Marks obtained : '+marks+'<br>'+
        'Percentage : '+per+'%<br>'+
        'Grade : A <br>'+
        'Remarks : Good'
    )
}
else if( per >=60){
    document.write(
        'Total marks : '+total+'<br>'+
        'Marks obtained : '+marks+'<br>'+
        'Percentage : '+per+'%<br>'+
        'Grade : B <br>'+
        'Remarks : You need to improve'
    )
}
else if(per < 60){
    document.write(
        'Total marks : '+total+'<br>'+
        'Marks obtained : '+marks+'<br>'+
        'Percentage : '+per+'%<br>'+
        'Grade : Fail <br>'+
        'Remarks : Sorry'
    )
}

//Question 10
var item1 = prompt('Item you want to buy')
var price1 = +prompt('Enter the price of this '+item1)
var qty1 = +prompt('How much you want to buy?')
var item2 = prompt('Item you want to buy also')
var price2 = +prompt('Enter the price of this '+item2)
var qty2 = +prompt('How much you want to buy?')
var total = (price1 * qty1) + (price2 * qty2) + 250
var discount =  total - (total / 10)
if(total >= 2000){
    document.write(
        `<h3>Shopping Cart</h3>
        
        Price of ${item1} is ${price1} <br>
        Quantity of ${item1} is ${qty1} <br>
        Price of ${item2} is ${price2} <br>
        Quantity of ${item2} is ${qty2} <br>
        Shipping Charges 250<br>
        Total cost of your order is ${total} PKR<br>
        Discounted Price is ${discount}`
    )
}
else{
    document.write(
        `<h3>Shopping Cart</h3>
        
        Price of ${item1} is ${price1}<br>
        Quantity of ${item1} is ${qty1}<br>
        Price of ${item2} is ${price2}<br>
        Quantity of ${item2} is ${qty2}<br>
        
        Shipping Charges 250<br>
        Total cost of your order is ${total} PKR`
    )
}

//Question 11
var secret = 3
var guess = +prompt('Guess the secret number')
if(guess == secret){
    alert('Bingo! Correct answer')
}
else if(guess +- secret){
    alert('Close enough to correct answer')
}
else{
    alert('Wrong answer')
}

//Question 12
var numcheck = +prompt('Enter a number')
if(numcheck %3 == 0){
    alert(`${numcheck} is divisible by 3`)
}
else{
    alert(`${numcheck} is not divisible by 3`)
}

//Question 13
var team1 = prompt('Name of first team')
var score1 = +prompt('Score of first team')
var team2 = prompt('Name of second team')
var score2 = +prompt('Score of second team')
if(score1 > score2){
    alert(`${team1} has won the match`)
}
else if(score1 < score2){
    alert(`${team2} has won the match`)
}
else{
    alert('match is tie')
}

//Question 14
var string = 'Pakistan'
var integer = 9
var bolean = true
alert(string + ' is a '+typeof 'Pakistan')
alert(integer + ' is a '+typeof 9)
alert(bolean + ' is a '+typeof true)

//Question 15
var inttype = +prompt('Enter any number')
if(inttype %2 == 0){
    alert(`${inttype} is an even number`)
}
else{
    alert(`${inttype} is an odd number`)
}

//Question 16
var temp = +prompt('Enter the temperature of city')
if(temp > 40){
    alert('It is too hot outside')
}
else if(temp > 30){
    alert('The weather today is Normal')
}
else if(temp > 20){
    alert('Today weather is cool')
}
else if(temp > 10){
    alert('OMG! Today weather is soo Cool')
}
else{
    alert('Temperature to likh chaman')
}

//Question 17
var num1 = +prompt('Enter a number')
var num2 = +prompt('Enter another number')
var operator = prompt('Enter an operator')
if(operator == '+'){
    alert(`${num1} + ${num2} is ${num1 + num2}`)
}
else if(operator == '-'){
    alert(`${num1} - ${num2} is ${num1 - num2}`)
}
else if(operator == '*'){
    alert(`${num1} * ${num2} is ${num1 * num2}`)
}
else if(operator == '/'){
    alert(`${num1} / ${num2} is ${num1 / num2}`)
}
else{
    alert('Syntax Error')
}

//Question 18
var dayName = prompt('Enter a day name')
if(dayName == 'Monday'||'Tuesday'||'Wednesday'||'Thursday'||'Friday'){
    alert('It is a week day')
}
else if(dayName == 'Saturday'){
    alert('It is weekend')
}
else if(dayName == "Sunday"){
    alert('Yay! its a holiday')
}
else{
    alert('Syntax Error')
}

//Question 19
var score = +prompt('Enter your score')
if(score > 50){
    alert('You are passed')
}
else{
    alert('Try again')
}

//Question 20
var number1 = +prompt('Enter a number')
var number2 = +prompt('Enter another number')
if(number1 > number2){
    alert(`${number1} is greater than ${number2}`)
}
else if(number1 < number2){
    alert(`${number2} is greater than ${number1}`)
}
else if(number1 == number2){
    alert('Both nummbers are equal')
}
else{
    alert('Syntax Error')
}

//Question 21
var userInput = prompt('Enter a language code')
if(userInput == 'en'){
    alert('Hello world')
}
else if(userInput == 'es'){
    alert('Saluton mondo')
}
else if(userInput == 'ds'){
    alert('Hej Verden')
}

//Question 22
var num = +prompt('Enter a number')
if(num > 0){
    alert('The number is Positive')
}
else if(num < 0){
    alert('The  number is negative')
}
else{
    alert('The number is either negative or positive')
}

//Question 23
var amount = +prompt('Enter any number')
var noun = prompt('Enter any noun')
if(amount > 1){
    alert(`${amount} ${noun}s`)
}
else{
    alert(`${amount} ${noun}`)
}