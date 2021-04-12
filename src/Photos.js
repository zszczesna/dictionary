import React from "react";
import "./Photos.css";

export default function Photos(props){
    
    if(props.images){
    return <section className="Photos">
         <div className="container"> 
                         <div className="row">
                    {props.images.map(function(image,index){
                       
                        return(
                        
                             <div key={index}  className="col-4">
                                 <a href={image.src.original} target="_blank" rel="noreferrer">
                        <img src={image.src.landscape} alt={`Photographer: ${image.photographer}`} className="img-fluid" />
                        </a>
                        </div>
                        
                        )
        })}  
        </div>
                        </div>
    </section>
    }else return null;
}