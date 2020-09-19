console.log("Welcome to Magic Notes");
shownotes();
let addBtn=document.getElementById("addbtn");
addBtn.addEventListener("click",function(){
    let addTxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    shownotes();
});
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    Array.from(notesObj).forEach(function (element,index){
        html+=` <div class="noteCard card my-3 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
    });
let notesElem=document.getElementById("notes");
if(notesObj.length!=0){
    notesElem.innerHTML=html;
}
else{
    notesElem.innerHTML=`Nothing To Show! Please Click on Add a Note To Create It.`;
}
}
function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}

let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
let noteCards=document.getElementsByClassName("noteCard");
Array.from(noteCards).forEach(function(element){
    let cardTxt=document.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
    element.style.display="block";
    }
    else{
        element.style.display="none";
    }
})
});