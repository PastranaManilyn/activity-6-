function displayName(name){
    alert("Your Name is " + name);
    document.write("Your Name is " + name);
    console.log("Your Name is " + name);
}
function sumOfTwoNumbers(a, b, d){
    let c = a + b;
    document.getElementById(d).innerHTML = "The sum is: " + c;
    //document.write("The sum of 2 Number is: " + c);
}

function product(a,b,c){
   document.getElementsByClassName(c)[0].innerHTML =" The Product is: " + (a * b); 
}

function inputTwoNumbers(){
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let sum = num1 + num2;
    alert("The sum of the two number is: " + sum);
}




function CalculateGrade(){
    let name =prompt ("Enter your name");
    let totalScore = parseFloat(prompt("Enter Total Score: "));
    let totalitem =parseFloat(prompt("Enter Total Item: "));


    let compute= parseFloat(-4 *(totalScore/totalitem)+5).toFixed(2); 

    let remarks = checkRemarks(compute);
    
   return "Hello " + name + ",\n\n Your grade is:" + compute +"\n\n Remarks: "  + remarks;

}

function checkRemarks(grade){
    var remarks =(grade > 3.0)? "Failed" : "Passed";
    return remarks;
}



