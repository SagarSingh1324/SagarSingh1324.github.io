

document.write("Hello");

var x= window.prompt("Enter number:");

var y= window.prompt("Enter second number:");

x = parseInt(x);
y=parseInt(y);

function calc(x,y)
{
    return x+y;
}

alert("sum of both numbers is : "+calc(x,y));