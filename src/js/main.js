import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

let form = document.querySelector("form");
let inpBtn = document.querySelector("#inp");
let ulist = document.querySelector("ul");


inpBtn.focus();

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  addItem();
})


function addItem(){

  if (inpBtn.value){
    
    let item = document.createElement("li");
    let btn = document.createElement("button");
    
    item.innerHTML = inpBtn.value
    btn.innerHTML = "delete"
    btn.style.marginLeft = "10px"
    btn.setAttribute("class", "btn btn-danger")

    btn.addEventListener("click", ()=> {
      ulist.removeChild(item)
    })

    item.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center border rounded mb-4")
    item.append(btn);
    ulist.appendChild(item);

  }  
}

