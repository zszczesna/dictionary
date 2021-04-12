import React from "react"
import Synonyms from "./Synonyms";
import "./Meaning.css"
export default function Meaning(props){
    return (
    <div className="Meaning">
        <section>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">
              {definition.definition}
              </div>
              <div className="example">
              {definition.example}
              </div>
            </p>
 
                          <Synonyms synonyms={definition.synonyms} />

          </div>
        );
      })}
      </section>
      
    </div>
  );
}