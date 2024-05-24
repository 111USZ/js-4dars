const num = +prompt("Случайное число");
if (num % 3 == 0 && num % 5 ==0 ){
    alert("FizzBuzz")
}else if(num % 5 == 0){
    alert("Buzz");
}else if(num % 3 == 0){
   alert("Fizz");
}
else{
    alert("Введенный вами номер не является ни Fizz, ни Buzz")
}