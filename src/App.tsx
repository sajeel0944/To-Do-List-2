import { useState } from "react"
import "./App.css"


function App(){
  let [todolist,setTodoList]=useState<string[]>([]);
  
  let saveTodoList=(event:any)=>{

    let toname =event.target.toname.value;

    if(!todolist.includes(toname)){
      let finalDolist:any=[...todolist,toname]
      setTodoList(finalDolist) 
    }
    else{
      alert("Todo Name Allready Exists...");
    }

    event.preventDefault();
  }
  

  let list=todolist.map((value,index)=>{
    return(
      <Todolistitem value={value} key={index}  indexNumber={index} 
      todolist={todolist}
      setTodoList={setTodoList}
      />
    )

  })

  return(
    <div className="App">
      <h1>Todo List</h1>
     <form  onSubmit={saveTodoList}>
        <input type="text" name="toname" className="input" /> <button className="button">save</button> 
     </form>

    <div className="outerDiv">
      <ul>
        <li>
          {list}
          </li>
      </ul>
    </div>

    </div>
  )
}

export default App

function Todolistitem({value,indexNumber,todolist,setTodoList}:any){

  let [status,setStatus]=useState(false)

  let deletRow=()=>{
    let finaldata=todolist.filter((v:any,i:any)=> i!=indexNumber && v!=indexNumber)
    setTodoList(finaldata)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }

  return(
    <div className="div-2">
    <li className={(status)? "completetodo":""} onClick={checkStatus}> {indexNumber+1}:&nbsp;{value} <span onClick={deletRow}> &times;</span></li>
    </div>
  )
}






