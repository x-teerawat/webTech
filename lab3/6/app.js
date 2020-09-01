function random(){
    let myNum;
    myNum = Math.random()*1000000;
    myNum = Math.floor(myNum);
    let count1 = " ";
    let count = 6 - myNum.toString().length;
    if(myNum.toString().length < 6){
        for(let i = 0; i < count; i++){
            count1 += "0";
        }
        count1 += myNum.toString()
        document.getElementById('six').innerHTML = count1;
    }
    else{
        document.getElementById('six').innerHTML = myNum;
        
    }
    
    let num;
    num = Math.random()*1000;
    num = Math.floor(num);
    let count2 = " ";
    let count3 = 3 - num.toString().length;
    if(num.toString().length < 3){
        for(let i = 0; i < count3; i++){
            count2 += "0";
        }
        count2 += num.toString()
        document.getElementById('three').innerHTML = count2;  
    }
    else{
        document.getElementById('three').innerHTML = num;  
        
    }
    
    
    let num1;
    num1 = Math.random()*1000;
    num1 = Math.floor(num1);
    let count5 = " ";
    let count6 = 3 - num1.toString().length;
    if(num1.toString().length < 3){
        for(let i = 0; i < count6; i++){
            count5 += "0";
        }
        count5 += num1.toString()
        document.getElementById('three2').innerHTML = count5;  
    }
    else{
        document.getElementById('three2').innerHTML = num1;  
        
    }
    let num2;
    num2 = Math.random()*100;
    num2 = Math.floor(num2);
    let count7 = " ";
    let count8 = 2 - num2.toString().length;
    if(num2.toString().length < 2){
        for(let i = 0; i < count8; i++){
            count7 += "0";
        }
        count7 += num2.toString()
        document.getElementById('two').innerHTML = count7;  
    }
    else{
        document.getElementById('two').innerHTML = num2;  
        
    }
    
}