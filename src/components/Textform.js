import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        console.log("uppercase btn was clicked")

        setText("UPPERCASE clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLoClick = () => {
        console.log("uppercase btn was clicked")

        setText("lowercase clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)

    }
    const clearText = () => {
        console.log("clearText was called")
        setText("")


    }

    const countVowels = () => {
        console.log("countVowels was called")
        for (count = 0; count <= text.length; count++) {
            if (text.charAt(count).match(/[aeiouAEIOU]/)) {
                countV++;
                setVoCount(countV);
            }
        }

    }
    const countConso = () => {
        console.log("countConsonents was called");
        for (cCount = 0; cCount <= text.length; cCount++) {
            if (text.charAt(cCount).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
                countC++;
                setCoCount(countC);
            }
        }
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const copyText = () => {
        var copytext = document.getElementById("mybox")
        copytext.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.write(copytext.value);
    }
    const handleOnchange = (e) => {
        // console.log(e)
        console.log("on change")
        setText(e.target.value);
    }
    const [text, setText] = useState('Enter your Text');
    let [count, setVoCount] = useState(0);
    let [cCount, setCoCount] = useState(0);
    let countV = 0;
    let countC = 0;

    return (
        <>
            <div className="mode-toggle-container" style={{color: props.mode==="dark"?"white":"black"}}>
                <div className="container" >
                    <h1>{props.heading}</h1>
                    <div className="mb-3 my-1" >
                        <textarea className="form-control" id="mybox" rows="5" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode==='dark'? 'white':'black' }}>  </textarea>
                    </div>
                    <button type="button" className="btn btn-primary " onClick={handleUpClick}>Convert to UpperCase</button>
                    <button type="button" className="btn btn-primary mx-1  my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={countVowels}>Count Vowels</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={countConso}>Count Consonents</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                    <button type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak </button>
                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear text</button>


                </div>

                <div className="container my-2">
                    <h2 className='my-1'>Your Text Summary: </h2>
                    <p> {text.split(" ").length} words and {text.length} characters</p>
                    <p> {0.008 * text.split(" ").length} Minutes read</p>
                    <h2 className='my-1'>Preview</h2>
                    <p>{text.length>0?text:"Enter some text in the text area to Preview"}</p>
                    <p>You have Used: </p>
                    <p>{count} Number of vowels </p>
                    <p>{cCount} Number of consonents </p>
                </div>
            </div>
        </>
    )
}
