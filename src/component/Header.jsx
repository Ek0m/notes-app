import React from "react";

function Header({handleDarkMode}){
    return(
        <div className="header">
            <h1>My Notes</h1>
            <button onClick={() => handleDarkMode(
                (previousDarkMode) => !previousDarkMode
            )} className="save">Modes</button>
        </div>
    )
}

export default Header;