import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was Clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLowerClick = () => {
        console.log("Lowercase was Clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleReverseClick = () => {

        // Step 1. Create an empty string that will host the new created string
        var newString = "";
 
        // Step 2. Create the FOR loop
        /* The starting point of the loop will be (str.length - 1) which corresponds to the 
        last character of the string, "o"
        As long as i is greater than or equals 0, the loop will go on
        We decrement i after each iteration */
            for (var i = text.length - 1; i >= 0; i--) { 
            newString += text[i]; // or newString = newString + str[i];
        }
        /* Here hello's length equals 5
            For each iteration: i = str.length - 1 and newString = newString + str[i]
            First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
            Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
            Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
            Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
            Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
        End of the FOR Loop*/
    
        // Step 3. Return the reversed string
        setText(newString); // "olleh"
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const[text, setText] = useState("");

    /*text = "afvsfdy"; //Wrong way to change the state/text */ 
    /*setText = ("absdtfg"); // Correct way to change the state/text */

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='form-control' value={text} onChange={handleOnChange} id='mybox' rows={6}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleReverseClick}>Reverse the text</button>
    </div>
    <div className='container'>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } minutes to read</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
    </div>
    </>    
  );
}
