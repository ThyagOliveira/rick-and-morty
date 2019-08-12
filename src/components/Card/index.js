import React, { Component } from 'react'
import './styles.css'

class Card extends Component {
    render() {
        return(
            <div className="cardStyle">
                <img className="image" alt="Character" src={this.props.source} />                    
                <div className="cardContainer">                                        
                    <h4><b>{this.props.name}</b></h4> 
                    <p>ID: {this.props.id}</p>                                         
                    <p>Status: {this.props.status}</p>
                    <p>Espécie: {this.props.species}</p>
                    <p>Gênero: {this.props.gender}</p>
                    <p>Origem: {this.props.origin}</p>
                    <p>Última Localização: {this.props.location}</p>
                </div>                
            </div>
        )
    }
}

export default Card