
/*
fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6")
.then(response=>response.json())
.then(data=>{
    let hexArray=data.colors;
    
    for(let i=0;i<hexArray.length; i++){
        console.log(hexArray[i].hex.value)
    }
    
    
})
*/

let hexEl=document.getElementById("hexpicker")
let schemeEl=document.getElementById("schemePicker");
let btnEl=document.getElementById("btn-getscheme");

let hexvalue=''
let schemevalue=''

hexEl.addEventListener("change", selectHex)
schemeEl.addEventListener("change", selectScheme)
btnEl.addEventListener("click", getcolorscheme)

function selectHex(e){
    hexvalue=e.target.value.replace("#", "");;
    //console.log(e.target.value);
}

function selectScheme(e){
    schemevalue=e.target.value.toLowerCase();
   
}

function getcolorscheme(){
    
     let url=`https://www.thecolorapi.com/scheme?hex=${hexvalue}&mode=${schemevalue}&count=6`;
    //console.log(url);
    let sectionEl=document.getElementById("section-displaycolours");
    
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        let hexArray=data.colors;
        let divhtml=''
        for(let i=0;i<hexArray.length; i++){
            divhtml+=`<div id="color${i}"></div>`;
        }
        for(let i=0;i<hexArray.length; i++){
            divhtml+=`<div class='div-colour' id="color-text${i}">${hexArray[i].hex.value}</div>`;
        }
        sectionEl.innerHTML=divhtml;
        
        for(let i=0;i<hexArray.length; i++){
            let eachdiv=document.getElementById(`color${i}`);
            eachdiv.style.backgroundColor=hexArray[i].hex.value;
        
        }

           
      
        
    
    })
}