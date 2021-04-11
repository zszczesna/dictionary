import React from "react";
import ReactAudioPlayer from 'react-audio-player';


export default function Phonetic(props){
   return <div className="Phonetic">
    
      <h4> {props.phonetic.text}</h4>
       <ReactAudioPlayer
  src={props.phonetic.audio}
  controls
/>
      
    </div>
}