/* reset-btn :- it remove btn innerTxt 
 We have some problem in this code. 
problem :- when we press multiple time check btn then button is moving toward down side.

*/


let body = document.querySelector("body");

function printH2() {

    let createH2 =  document.createElement("h2");
    createH2.innerText = 'Bhai Thoda wait karle mil jayega Job, Tu abhi just Fill kiya hai form. \nSubmit hogaya abb Job lekar manega kya??';
    createH2.style.fontSize = '24px';
    createH2.style.justifyContent = "center";
    createH2.style.display = 'flex';
    let showH2 = document.querySelector("h1");
    showH2.after(createH2); 
}

let btn = document.querySelector(".btn1");
btn.addEventListener("click",()=>{
    printH2();
    
});

let reset = document.querySelector(".reset-btn");
reset.addEventListener("click",()=>{
    document.querySelector("h2").innerHTML = "";
    console.log(reset);
});

    

