
let headingOne=document.querySelector(".headingOne")
let inputOne=document.querySelector(".inputOne")
let buttonOne=document.querySelector(".buttonOne")
let error=document.querySelector(".error")

let headingTwo=document.querySelector(".headingTwo")
let inputTwo=document.querySelector(".inputTwo")
let buttonTwo=document.querySelector(".buttonTwo")
let errorTwo=document.querySelector(".errorTwo")
let chance=document.querySelector(".chance")
let count=5

buttonOne.addEventListener("click",function(){
    if(!inputOne.value){
        error.innerHTML="Please Enter a Value"
        
    }else if(isNaN(inputOne.value)){
        error.innerHTML="Please Eneter a Number Only"
        
    }else if(!(inputOne.value <=10 && inputOne.value>0)){
        error.innerHTML="Please Enter 1 to 10 Only"
        
    }else{
        console.log("Game Starts From Here");

        headingTwo.style.display="block"
        inputTwo.style.display="inline-block"
        buttonTwo.style.display="inline-block"
        errorTwo.style.display="block"
        chance.innerHTML=`Chance : ${count}`

        headingOne.style.display="none"
        inputOne.style.display="none"
        buttonOne.style.display="none"
        error.style.display="none"
                
    }
})

buttonTwo.addEventListener("click", function(){
    if(!inputTwo.value){
        errorTwo.innerHTML="Please Enter a Value"        
    }else if(isNaN(inputTwo.value)){
        errorTwo.innerHTML="Please Enter a Number"
    }else if(!(inputTwo.value<=10 && inputTwo.value>0)){
        errorTwo.innerHTML="Please Enter from 1 to 10"        
    }else {
        if (count>1){
            count--
            chance.innerHTML=`Chance : ${count}`
            if(inputOne.value==inputTwo.value){
                headingTwo.innerHTML="Player Two Won"
                buttonTwo.style.display="none"            
            }
        }else{
            count=0
            chance.innerHTML=`Chance : ${count}`
            headingTwo.innerHTML="Player One Won"
                       
            buttonTwo.style.display="none"
            
        }

    }
         
})

