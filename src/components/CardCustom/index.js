import React from 'react'
import './styles.css'

export default function CardCustom({ source, name, id, status, species, gender, origin, location }) {
    return(
        <article className="cardStyle">
            <img className="image" alt="Character" src={source} />                    
            <div className="cardContainer">                                        
                <h4><b>{name}</b></h4> 
                <p>ID <span>{id}</span></p>                                         
                <p>Status <span>{status}</span> </p>
                <p>Espécie <span>{species}</span> </p>
                <p>Gênero <span>{gender}</span> </p>
                <p>Origem <span style={{ textAlign: "right" }}>{origin}</span> </p>
                <p style={{ borderBottom: "transparent" }}>
                    Última <br/> Localização 
                    <span style={{ textAlign: "right" }}>{location}</span> 
                </p>
            </div>                
        </article>
    )
}