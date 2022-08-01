const addButton = document.querySelector("#add");

const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];
    console.log(textAreaData);
    textAreaData.forEach((note)=>{

        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}


const addNewNote = (text ='')=>{
             
    const note =document.createElement("div");
    note.classList.add("note");

    const htmlData= `<div class="operation">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
</div>

<div class="main" ${text? "" : "hidden"}"></div>
<textarea class="${text? "hidden" : ""}" ></textarea> `;

note.insertAdjacentHTML('afterbegin',htmlData);
// console.log(note);
const editButton = note.querySelector(".edit");
const deleteButton = note.querySelector(".delete");
const mainDiv = note.querySelector(".main");
const textArea = note.querySelector("textarea");




deleteButton.addEventListener('click',()=>{
    note.remove();
    updateLSData();
}) 

textArea.value=text;
mainDiv.innerHTML=text;

editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})

textArea.addEventListener('change',(event)=>{
    const value=event.target.value;
    // console.log(value);
    mainDiv.innerHTML=value;

    updateLSData();
});
document.body.appendChild(note);
}
const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>addNewNote(note))
};


addButton.addEventListener('click',()=>addNewNote());