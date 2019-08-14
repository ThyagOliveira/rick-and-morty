import React, { Component } from 'react'
import './styles.css'

class Card extends Component {
    render() {
        return(
            <article className="cardStyle">
                <img className="image" alt="Character" src={this.props.source} />                    
                <div className="cardContainer">                                        
                    <h4><b>{this.props.name}</b></h4> 
                    <p>ID <span>{this.props.id}</span></p>                                         
                    <p>Status <span>{this.props.status}</span> </p>
                    <p>Espécie <span>{this.props.species}</span> </p>
                    <p>Gênero <span>{this.props.gender}</span> </p>
                    <p>Origem <span>{this.props.origin.split(" (Replacement Dimension)")}</span> </p>
                    <p>Última <br/> Localização <span>{this.props.location.split(" (Replacement Dimension)")}</span> </p>
                </div>                
            </article>
        )
    }
}

export default Card