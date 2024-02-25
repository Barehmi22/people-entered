let countEl=document.getElementById("count-el")
let count=0
function increment() {
    count+=1
    countEl.textContent=count 
}
function Desencrement() {
    count-=1
    countEl.textContent=count 
}
let saveEL=document.getElementById('save-el')

function save(){
    let msg=count + " - "
    saveEL.textContent+=msg
    countEl.textContent=0
    count=0 

}
