import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = ()=>{
    // alert("Uppercase was clicked "+text);
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleclearClick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText="";
    setText(newText);
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>
        {text.split(" ").length} words and {text.length} characters 
        <p>{0.008*text.split(" ").length} minutes read</p>
      </p>
      <h2>
        Preview
      </h2>
      <p>
        {text}
      </p>
    </div>
    </> 
  )
}
