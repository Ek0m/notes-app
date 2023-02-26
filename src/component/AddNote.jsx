import React, { useState } from "react";

function AddNote({handleAddNote}){

    const [noteText, setNoteText] = useState('');

    function handleChange(event){
        if(characterLimt - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }

    }

    const characterLimt = 200;

    function handleClick(){
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('')
        }
        
    }

    return(
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Type a note" 
                value={noteText} 
                onChange={handleChange}>

            </textarea>
            <div className="note-footer">
                <small>{characterLimt - noteText.length} Remaining</small>
                <button className="save" onClick={handleClick}>+</button>
            </div>
        </div>
    )
}

export default AddNote;