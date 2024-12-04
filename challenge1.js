// prompt student to input their totals
let studentInput = prompt('Enter your total:');
let total = Number(studentInput); //input will be changed to a number




//checks that the input is not  a number and asks for a real number
   if(isNaN(total)) {
    ("Enter actual total!");
  }
  else {
    console.log(`your Grade is: ${gradeStudent(total)}`);

  }



//gradeStudent according to your total from A to E
function gradeStudent(total) {
 if (total > 79) {
    return 'A';}


else if (total  >= 60 && total  <= 79) {
    return 'B'; }


else if(total  >= 49 && total <= 59) {
    return 'C'; }



else if (total  >= 40 && total  < 49) {
            return 'D'; }

else if (total  < 40) {
                return 'E'; 
            }

else {
  return 'INVALID'
}
    
}

 
 






