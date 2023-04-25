import React,{useState} from 'react'

export default function TextForm(props) {

    const hendleOnChange = (event) =>{
       setText(event.target.value)
    }
    const onUpperCaseText = () =>{
         let newText = text.toUpperCase();
         setText(newText)
         props.showAlert("Uppercase has to be converted","success");
    }

    const onClearText = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared","success");
   }

    const onLowerCaseText = () =>{
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Lowercase has to be converted","success");
    }

    const onCopyText = () =>{
      let newText = document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Copied to Clipboard","success");
    }

    const removeExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space removed","success");
    }

    const [text, setText] = useState("")
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={hendleOnChange} style={{backgroundColor:props.mode === 'dark'?'gray':'white',
           color:props.mode === 'dark'?'white':'#042743',cursor: "pointer"}}rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={onUpperCaseText}>Covert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={onLowerCaseText}>Covert To Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={onClearText}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={onCopyText}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={removeExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} workds and {text.length} words</p>
        <p>{0.008 * text.split(" ").length} minute to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
    </>
  )
}
