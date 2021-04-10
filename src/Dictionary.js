import React, {useState} from "react"
import axios from "axios";
import Results from "./Results.js"

export default function Dictionary(){
    let[keyword, setKeword] = useState(" ");
    let[definition, setDefinition] = useState(null);
    
    function handleSearch(response){
        setDefinition(response.data[0]);
    }
    
    function search(event){
        event.preventDefault();
        //documentation https://dictionaryapi.dev/
        let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleSearch);
    }

    function handleKeywordChange(event){
        setKeword(event.target.value);
    }
    
   
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            <Results results={definition} />
        </div>
    )
}