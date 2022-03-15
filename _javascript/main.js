const toogle = document.querySelector("#toogle");
let keyboard = document.querySelectorAll('.button-calc');
let areaCalc = document.querySelector("#keyboard")
let del = document.querySelector("#del")
let h3 = document.querySelector("h3");        
let equal = document.querySelector("#equal");
let reset = document.querySelector("#reset");
let result = document.querySelector("#area-result");
let themeLabels = document.querySelector("#theme-labels");

let theme = 0;



toogle.addEventListener('click', ()=>{


    switch(theme)
    {
        case 0:
            theme++;
            changeTheme();
            
        break;

        case 1:
            theme++;
            changeTheme();


        break;

        case 2:
            theme = 0;
            changeTheme();
        break;
    }
       


});




const changeTheme = ()=>
{
   switch(theme)
   {
       case 0:

        let circle1 = document.querySelector('#theme01');
        let circles1 = document.querySelectorAll('.circle-theme');
 
 
 
        circles1.forEach(element => {element.style.background = '#131926'});
 
 
        
        circle1.style.background = "#DC3934";
        
 
 
     document.body.style.background = "#364159";

        
 
 
         
         logo.style.color = "#FEFFF8";
         keyboard.forEach(element =>{
 
             element.style.color = "#464C58";
             element.style.background = "#E5E4E2";
             element.style.boxShadow = "0px 4px 1px #ADA799";
 
         })
         h3.style.color = "#FEFFF8";
         del.style.background = "#647299";
        del.style.boxShadow = "0px 4px 1px #414E70";
        del.style.color = "#FEFFF8"
         equal.style.background = "#D13F30";
         equal.style.boxShadow = "0px 4px 1px #902217";
         equal.style.color = "#fff";
         reset.style.background = "#647299";
         reset.style.boxShadow = "0px 4px 1px #414E70";
         reset.style.color = "#fff";
         result.style.color = "#fff";
         result.style.background = "#181F32";
         areaCalc.style.background = "#252D44";
         themeLabels.style.color = "#fff";
        break;

        case 1:
            
            let circle2 = document.querySelector('#theme02');
            let circles2 = document.querySelectorAll('.circle-theme');
            
     
     
            circles2.forEach(element => {element.style.background = '#131926'});
     
     
            
            circle2.style.background = "#D05100";
            
     
     
         document.body.style.background = "#E6E6E6";
    
            
     
     
             
             logo.style.color = "#2F3028";
             keyboard.forEach(element =>{
     
                 element.style.color = "#313129";
                 element.style.background = "#E5E4E0";
                 element.style.boxShadow = "0px 4px 1px #A69F8F";
     
             })
             h3.style.color = "#2F3028";
             del.style.background = "#388187";
            del.style.boxShadow = "0px 4px 1px #1F626B";
            del.style.color = "#FEFFF8"
             equal.style.background = "#D13F30";
             equal.style.boxShadow = "0px 4px 1px #902217";
             equal.style.color = "#fff";
             reset.style.background = "#388187";
             reset.style.boxShadow = "0px 4px 1px #1F626B";
             reset.style.color = "#fff";
             result.style.color = "#34342C";
             result.style.background = "#EEEEEE";
             areaCalc.style.background = "#D3CDCF";
             themeLabels.style.color = "#383735";
             label02.style.color = "#4C4B49";
           break;


           case 2:
    
           let circle3 = document.querySelector('#theme03');
           let circles3 = document.querySelectorAll('.circle-theme');

    
    
           circles3.forEach(element => {element.style.background = '#131926'});
    
    
           
           circle3.style.background = "#1AB2B3";
           
    
    
        document.body.style.background = "#17062A";
            
          
          
    
    
            
            logo.style.color = "#F9E224";
            keyboard.forEach(element =>{
    
                element.style.color = "#F9E224";
                element.style.background = "#331B4D";
                element.style.boxShadow = "0px 4px 1px #BE14F3";
    
            })
            h3.style.color = "#F9E224";
            equal.style.background = "#00DECF";
            equal.style.boxShadow = "0px 4px 1px #6FF8F0";
            equal.style.color = "#000";
            reset.style.background = "#56077C";
            reset.style.color = "#fff";
            result.style.color = "#FFEA2E";
            result.style.background = "#1E0836";
            areaCalc.style.background = "#1E0836";
            themeLabels.style.color = "#FAE87C";
            
           break;
    
       
   
   

   
};


}


//script calc
const buttonCalc = document.querySelectorAll(".button-calc");
const areaResult = document.querySelector("#area-result");



buttonCalc.forEach(button =>{


    button.addEventListener("click",()=>{
        
        

        if(button.innerHTML.toLocaleLowerCase() === "del")
        {
           const screenContent = areaResult.innerHTML.substring(0, areaResult.innerHTML.length-1);
            areaResult.innerHTML = screenContent;
        }
        else if(button.innerHTML.toLocaleLowerCase() === "reset")
        {
            areaResult.innerHTML = "";
        }
        else if(button.id === "equal"){

            areaResult.innerHTML  = eval(areaResult.innerHTML.replace("X", "*"));
        }
        else{
            areaResult.innerHTML += button.textContent;
        }
       

    })

})