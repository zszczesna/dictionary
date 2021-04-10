import React, {useState} from "react"


export default function Dictionary(){
    let[keyword, setKeword] = useState(" ");
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function handleKeywordChange(event){
        setKeword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}