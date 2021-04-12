import React, {useState} from "react"
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css"

export default function Dictionary(){
    let[keyword, setKeword] = useState(" ");
    let[definition, setDefinition] = useState(null);
    
    function handleSearch(response){
        setDefinition(response.data[0]);
    }

    function search(){
        //documentation https://dictionaryapi.dev/
        let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleSearch);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeword(event.target.value);
    }
    
   
    return (
        <div className="Dictionary">
            <h1>Dictionary</h1>
            <section>
            <h2>What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
                 <input type="submit" className="btn " value="🔍"/>
            </form>
                  </section>
            <Results results={definition} />
  
        </div>
    )
}