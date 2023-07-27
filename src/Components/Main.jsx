import { useState } from "react"


export default function Main(){
    const[ text, setText] = useState("")

    function toUpperCase(){
        setText(text.toUpperCase())
    }

    function onChange(e){
        setText(e.target.value)
    }
    return (<>
    <h1 className ="mx-5 my-5">Change Your Text Into Uppercase</h1>
<div className="input-group container my-3">
  
  <textarea className="form-floating mb-0 " placeholder="Type Your Text" aria-label="With textarea" rows = "6" value={text} 
        onChange={onChange}         
                 
                 
                 >{text}</textarea>


</div>

  <button type="button" className="btn btn-primary mx-5 py-3 px-3"onClick={toUpperCase}>Change to UpperCase</button>
</>
    )}