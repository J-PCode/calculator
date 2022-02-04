
let x = "0"; //previous number
let y = "0"; //current number
let operator;
const button = document.querySelectorAll("button");


function add(x,y){
    return x = x + y;
    }
function subtract(x,y){
    return x = x - y;
}
function multiply(x,y){
    return x = x * y;
}
function divide(x,y){
    return x = x / y;
}
function operateClear(){
    x= "0";
    y = "0";
    operator ="";
}

function operate(button){
    if(x === "0"){
        x = y;
        operator = button.innerText;
     }

//calculations start
      else {
        x = Number(x)
        y = Number(y)
    if(operator ==="+"){
        x = Math.round(add(x,y)*100) / 100;   
    }
    else if(operator ==="-"){
        x = Math.round(subtract(x,y)*100) / 100;
        }
    else if(operator ==="*"){
        x = Math.round(multiply(x,y)*100) / 100;
      }
    else if(operator ==="/"){
            if(operator === "/" && y == "0"){
                console.log("you cant divide with zero")
                document.getElementById("screen").innerText = "ERROR";
                return "";
            }  
            else{
        x = Math.round(divide(x,y) * 100) / 100;
            }
    }
    if(operator != "=")
    operator = button.innerText;
}
    document.getElementById("screen").innerText = x;
    y = "";
   if(button.id == "operate"){
       operateClear()
   }
   if(button.id == "clear"){
   operateClear()
   document.getElementById("screen").innerText = "0";
}}
//calculations end

function getNumber(button){
if(y === "0"){
y = button.innerText;
return y;
}
    y += button.innerText;
    return y;
};

// root starts here
button.forEach(button => {
    button.addEventListener("click", () =>{
        if(button.classList == "number"){
        document.getElementById("screen").innerText = getNumber(button)
        }
        else if(button.className == "operator" || "operator1"){
            operate(button) 
    }
});
});
