import React, { useEffect, useState } from "react";
import {nanoid} from "nanoid"
import NoteList from "./component/NoteList";
import Search from "./component/Search";
import Header from "./component/Header";

function App(){

    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "This is my first note",
            date: "15/04/2022",

        },

        {
            id: nanoid(),
            text: "This is my second note",
            date: "30/04/2022",

        },

        {
            id: nanoid(),
            text: "This is my third note",
            date: "21/03/2022",

        }
    ]);

    const [searchNote, setSearchNote] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if(savedNotes){
            setNotes(savedNotes)
        }    

    }, [])

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        )
    }, [notes])

    function addNote(text){
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    function deleteNote(id){
       const newNotes =  notes.filter((note) => note.id !== id);
       setNotes(newNotes)
    }

    return(
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSearchNote} />
                <NoteList 
                    notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote))} 
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote} />
            </div>
        </div>

    )
}

export default App;