// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num=Number(prompt("Enter a No."))
if (num%2===0){
  alert("Number is Even")
} else{
  alert("Number is Odd")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=Number(prompt("Enter Number 1"))
let num2=Number(prompt("Enter Number 2"))
if (num1>num2){
  alert((num1)+" " +"is Max")
} else{ 
  alert((num2)+" "+ "is Max")
}


// 3. Convert the above code using`?` terniary operator
num1=Number(prompt("Enter Number 1"))
num2=Number(prompt("Enter Number 2"))
num1>num2 ? alert(`${num1} is max`):alert(`${num2} is max`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName=prompt(`Enter the Name of your House`)
if (houseName==="stark"){
  alert(`Winter is coming`)
}
else if(houseName==="lannister"){
  alert(`A lannister always pays his debt`)
}
else{
  alert(`All men must die`)
}

// 5. Convert the above code using`?` terniary operator
houseName=prompt(`Enter the Name of your House`)
houseName==="stark" ? 
  alert(`Winter is coming`):

houseName==="lannister" ?
  alert(`A lannister always pays his debt`)
:
  alert(`All men must die`)

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber=Number(prompt(`Enter month no.`))

switch(monthNumber){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`This month has 31 days`)
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(`This month has 30 days`)
    break;
  case 2:
    alert(`This month has 28 days`)
    break;
  default:
    alert(`Please enter proper month no.`)
    break;

}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery=Number(prompt(`Enter Your Total salary`))
switch(true){
  case salery<=20000:
    alert(`Your inhand salary is ${(salery)-(10/100*(salery))}`)
    break;
  case  salery<=40000:
    alert(`Your inhand salary is ${(salery)-(20/100*(salery))}`)
    break;
  case salery>50000:
    alert(`Your inhand salary is ${(salery)-(30/100*(salery))}`)
    break;
  default:
    alert(`Enter proper salary amount`)
    break;
  }

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt(`Enter Your marks`))
if (marks > 100){
 alert("Marks can't be greater than 100")
} else if(marks > 80 && marks <= 100){
  alert("Grade A")
} else if(marks > 50 && marks <= 80){
  alert("Grade B")
} else if(marks > 30 && marks <= 50){
  alert("Grade C")
} else if(marks>0){
  alert("Grade D")
} else{
  alert(`Enter Proper Marks`)
}

switch(true){
  case marks > 100:
    alert("Marks can't be greater than 100")
    break;
  case marks > 80 && marks <= 100:
    alert("Grade A")
    break;
  case marks > 50 && marks <= 80:
    alert("Grade B")
    break;
  case marks > 30 && marks <= 50:
    alert("Grade C")
    break;
  case marks>0:
    alert("Grade D")
    break;
  default:
    alert(`Enter Proper Marks`)
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weatherCondition=prompt(`What is the weather like outside?`)
switch(true){
  case (weatherCondition==="sunny"):
    alert(`Wear a T-shirt`)
    break;
  case (weatherCondition==="rainy"):
    alert(`Don't forget to take your raincoat`)
    break;
  case (weatherCondition==="hot"):
    alert(`Get a hanky`)
    break;
    case (weatherCondition==="freezing"):
      alert(`Get your sweeter on`)
      break;   
    default:
      alert(`Not a valid input`)
}
