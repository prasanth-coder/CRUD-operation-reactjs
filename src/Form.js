import React from "react"
const Form = ({input,onchange,onclick,ondelete}) => {

  return(
      <>
      <form className="form">
        <div>
           <input
            type="text" 
            placeholder="Enter the name .."
            onChange = {onchange}
            value = {input}
            />
        </div>
        <div>
           <button 
           type="submit"
           onClick={onclick}
           >Add</button>
        </div>
      

      </form>

      <div className="deletebtn"> 
          <button

          type="button"
          onClick={ondelete}
          >
            Delete All
          </button>

        </div>

      </>
  )
}

export default Form;