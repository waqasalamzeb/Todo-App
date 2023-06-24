// ----------function to addtak -----------

function addtask(){
   let box=document.getElementById("box")
    let todoinput=document.getElementById("todo-input")
    if(todoinput.value==""){
        Swal.fire(
            'You Must Write Something'
          )
          saveData()
          

    }
    else{
        let list=document.getElementById("list")
    let li=document.createElement("li") 
    li.innerHTML=(`${todoinput.value } <img src="./edit.png" width="25px" id="edit" onclick="edittask(this)" > 
    <img src="./update.png" width="0px" id="update" onclick="updatetask(this)" >
    <img src="./delete.png" width="25px" id="delete" onclick="deltask(this)" >`  )   
    list.appendChild(li)
    saveData()
    todoinput.value=""
    saveData()
    }
}

    
    


function edittask(e){
    console.log(e.parentElement.firstChild)
    let todoinput=document.getElementById("todo-input")
    todoinput.value=e.parentElement.firstChild.nodeValue
    saveData()
}
function deltask(e){
    let del=document.getElementById("delete")
    let list=document.getElementById("list")
    let li=document.getElementById("li")
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
   e.parentElement.remove()
   saveData()

  }
})


}
function updatetask(e){
    console.log(e.parentElement.firstChild)
    let todoinput=document.getElementById("todo-input")
    e.parentElement.firstChild.nodeValue=todoinput.value
    todoinput.value=""
    saveData()
}
function saveData(){
  localStorage.setItem("data",list.innerHTML)
}

showData()
 function showData(){
  list.innerHTML=localStorage.getItem("data")
 }
 showData()
 