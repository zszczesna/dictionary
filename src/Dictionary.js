import React, {useState} from "react"
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos"
import "./Dictionary.css"

export default function Dictionary(){
    let[keyword, setKeword] = useState(" ");
    let[definition, setDefinition] = useState(null);
    let[images, setImages] = useState(null);
    
    function handleSearch(response){
        setDefinition(response.data[0]);
    }

    function handlePexelsSearch(response){
        setImages(response.data.photos);
    }

    function search(){
        //documentation https://dictionaryapi.dev/
        let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleSearch);
        let pexelsApiKey = `563492ad6f91700001000001ef31aafef25647d8b3ac26469814212d`;
        let pexelsApiUrl =   `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
        axios.get(pexelsApiUrl, {headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsSearch);
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
            <Results results={definition}/>
            <Photos images={images}/>
  
        </div>
    )
}