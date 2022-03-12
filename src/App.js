import React,{useState} from "react";
import "./style.css";
import Form from "./Form"

export default function App() {
  var id;
  const [input,setInput] = useState('');
  const [user,setUser] = useState([
    {id : 1,name : "prasanth"},{id : 2,name : "Jegan"}
  ])
  const [error,setError] = useState('')

  //for getting input
  const handleChange = (e) => {
    setInput(e.target.value)
    
  }
  
  //for Add button
  const handleClick = (e) => {
    e.preventDefault();
    
    
    if((input.length === 0)){
         setError("Please Enter the Name ....");
         
         

    }
    else{
      if(user.length == 0){
        id = 1;
        setUser([...user,{id:id,name : input}])
      }
      else{
        id = user.length + 1;
        setUser([...user,{id:id,name : input}])
      }
      
      
    }
    setInput("")
    
  }
  
  //for deleteAll button
  const handleDelete = () => {
    setUser([])
  }

  //for red cancel button
  const handleCancel = (id) => {
    const newArr = user.filter(e => {
      return(
        e.id !== id
      )
     
       
     })
     
     setUser(newArr);
     
     
    
     //setUser();
     
  }
  return (
    <>
      <Form 
      input = {input}
      onchange = {handleChange}
      onclick = {handleClick}
      ondelete = {handleDelete}
      />
       <div className="card">
         
      {user.length > 0 ? user.map(item => {
        return(
          <div className="card-display">
            <h3>
            {item.id}
            </h3>
            <h3>
            {item.name}
            </h3>
            <button 
            className = "cancel" 
            type="button"
            onClick={() => {
              handleCancel(item.id)
            }
            }>X</button>
          </div>
        )
      
      }) : <h1>No users ...</h1>}

      </div>

      <div className="errormsg">
         {error}
      </div>

    </>

    
  );
}
