function getSalary(){
  const basicSalary = prompt("Enter your basic salary amount");
  const yourBenefiits = prompt("Enter your Benefits");

    if(isNaN(basicSalary) || (yourBenefiits)) {
    console.log("Enter actual salary and benefits");
  }

//formula to calculate gross salary and deductions
  const grossSalary = basicSalary + yourBenefiits;

//show gross salary result
  alert("Gross salary is:" + grossSalary);


  //calculate Net Pay
 const netPay = grossSalary -(yourNssf + deductedNhifAmount + taxDeductedAmount)


//show gross salary result
 alert("Gross salary is:" + grossSalary);

}

getSalary();


//function for NSSF contributions from February 2024
function yourNssf(Tier) {
   if ( Tier1 <= 7000) {
    console.log("You are under Tier1")
   }
    elseif (Tier2 >= 7001 && Tier2 < 36000) {
          console.log(you are under Tier2);
}
}
yourNssf(14340);


//function for NSSF contributions upto January 2024
function janNssf(salary) {
  if(salary <= //function to ask for gross salary and benefits input 
    function getSalary(){
      const basicSalary = [propmt("Enter your basic salary amount")];
      const yourBenefiits = [prompt("Enter your Benefits")];
        
    
    }

    //function for NSSF contributions from February 2024
    function yourNssf(salary) {
       if (salary <= 7000) {
        console.log("you are under Tier1");
       }
        else if(salary >= 7001 && salary < 36000) {
              console.log("you are under Tier2");
    }
    }
    yourNssf(14340);
    
    
    //function for NSSF contributions upto January 2024
    function janNssf(salary) {
      if(salary<= 6000) {
        console.log("you are under Tier1");
      }
        if (salary => 18000)  {
          console.log("you are under Tier2");
    }
    janNssf(80000);
    }
    
    
    //function to determine NHIF deductions
    function deductedNhifAmount(salary) {
          if (salary <= 5999) {
            return 150;
          }
    
          else if(salary >=7999) {
            return 300;
          }
    
          else if(salary >=11999) {
            return 400;
          }
    
          else if(salary >=14999 ) {
            return 500;
          }
    
          else if(salary >=19999 ) {
            return 600;
          }
    
          else if(salary >=24999) {
            return 750;
          }
    
          else if(salary >=29999 ) {
            return 850;
          }
    
          else if(salary >=34999 ) {
            return 900;
          }
    
          else if(salary >=39999 ) {
            return 950;
          }
    
          else if(salary >=44999 ) {
            return 1000;
          }
    
          else if(salary >=49999) {
            return 1100;
          }
    
          else if(salary >=59999 ) {
            return 1200;
          }
    
          else if(salary >=69999 ) {
            return 1300;
          }
    
          else if(salary >=79999 ) {
            return 1400;
          }
    
          else if(salary >=89999 ) {
            return 1500;
          }
    
          else if(salary >=99999 ) {
            return 1600;
          }
    
          else if( salary >= 100000) {
            return 1700;
          }
    
    }
    
    //function to calculate tax deductions from 1st June 2023
    function taxDeductedAmount(tax) {
         if (tax <= 24000) {
            return tax * 0.10;
         }
    
         else if(tax <=32333 && tax > 24001) {
          return  tax * 0.25;
         }
    
         else if(tax <=500000 && tax > 32334) {
            return tax * 0.30;
         }
    
         else if(tax <=800000) { 
            return tax * 0.325; 
         }
    
               else if(tax >= 800000) {
            tax * 0.25;  }
    
    })
    elseif (salary >  6001 && salary < 18000;){
console.log(taxDeductedAmount());
}
janNssf(80000);
}


//function to determine NHIF deductions
function deductedNhifAmount(salary) {
      if (salary <= 5999) {
        return 150;
      }

      else if(salary <=7999) {
        return 300;
      }

      else if(salary <=11999 ) {
        return 400;
      }

      else if(salary <=14999) {
        return 500;
      }

      else if(salary <=19999) {
        return 600;
      }

      else if(salary <=24999) {
        return 750;
      }

      else if(salary <=29999) {
        return 850;
      }

      else if(salary <=34999) {
        return 900;
      }

      else if(salary <=39999) {
        return 950;
      }

      else if(salary <=44999) {
        return 1000;
      }

      else if(salary <=49999) {
        return 1100;
      }

      else if(salary <=59999) {
        return 1200;
      }

      else if(salary <=69999) {
        return 1300;
      }

      else if(salary <=79999) {
        return 1400;
      }

      else if(salary <=89999) {
        return 1500;
      }

      else if(salary <=99999) {
        return 1600;
      }

      else if(salary >= 100000) {
        return 1700;
      }

}

//function to calculate tax deductions from 1st June 2023
function taxDeductedAmount(tax) {
  let tax = Number;
     if (tax <= 24000) {
        tax * 0.10;
     }

     else if(tax <=32333 && tax > 24001) {
      return  tax * 0.25;
     }

     else if(tax <=500000 && tax > 32334) {
        return tax * 0.30;
     }

     else if(tax <=800000 { 
        return tax * 0.325; 
     }

           else if(tax >= 800000) {
        tax * 0.25;  }

}



