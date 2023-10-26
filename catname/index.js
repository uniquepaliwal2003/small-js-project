console.log("jell"
);
const form = document.querySelector("form");
const inputi = document.querySelector("input");
const list = document.querySelector("ul");
form.addEventListener("submit",function(e){
    e.preventDefault(); //this will stop u to go on the action place of the form 
    console.log("Submitted the form ");
    const lii = document.createElement("LI");
    lii.append(`${inputi.value}`);
    list.append(lii);
    inputi.value="";
});