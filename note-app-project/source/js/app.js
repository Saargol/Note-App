let $ = document
let container = $.querySelector(".container")
let saveButton = $.getElementById("btn-save")
let deleteButton = $.getElementById("btn-delete")
let inputField = $.getElementById("input-field")
let noteList = $.getElementById("listed")
let bodyElem = $.querySelector("body")
let colorsBox= $.querySelectorAll(".color-box")

function saveNewElem (){
    if(inputField.value){
    let newP = $.createElement("p")
    newP.innerHTML = inputField.value
    newP.setAttribute("class","card-text p-3")
    let newDiv = $.createElement("div")
    newDiv.setAttribute("class","card shadow-sm rounded")
    newDiv.addEventListener("click", removeNote)
    newDiv.append(newP)
    noteList.append(newDiv)
    let inputBg = inputField.style.backgroundColor
    newDiv.style.backgroundColor = inputBg
    inputField.value = ""
    inputField.style.backgroundColor = "#fff"
    }
}

function addNewElemByEnter (event){
    if(event.keyCode === 13){
        if(inputField.value){
            saveNewElem()
        }
    }
}
function removeElem (){
    inputField.value = " "
    inputField.style.backgroundColor = "#fff"
}
function removeNote (event){
    event.target.parentElement.remove()
    alert("Are you sure you want to delete?")

}

saveButton.addEventListener("click", saveNewElem);
inputField.addEventListener("keyup", addNewElemByEnter);
deleteButton.addEventListener("click",removeElem)
colorsBox.forEach(function(colorBox){
    colorBox.addEventListener("click",function(event){
        let mainColor = event.target.style.backgroundColor
        inputField.style.backgroundColor = mainColor
    })
})




