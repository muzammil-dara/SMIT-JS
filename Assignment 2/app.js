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
var qty1 = prompt('How much you want to buy?')
var item2 = prompt('Item you want to buy also')
var qty2 = prompt('How much you want to buy?')
var total_price