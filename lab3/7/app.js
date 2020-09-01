function create() {
    let inputName = document.getElementById(`inputName`).value;
    let inputPhone = document.getElementById(`inputPhone`).value;
    let inputMail = document.getElementById(`inputMail`).value;
    let inputCompany = document.getElementById(`inputCompany`).value;
     
   document.getElementById(`outputName`).innerHTML = inputName; 
   document.getElementById(`outputPhone`).innerHTML = inputPhone; 
   document.getElementById(`outputMail`).innerHTML = inputMail; 
   document.getElementById(`outputCompany`).innerHTML = inputCompany; 
}