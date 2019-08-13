import React, { Component } from 'react'
import api from '../../utils/api'
import Card from '../../components/Card'
import './styles.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }
    componentDidMount() {
        this.loadCharacterPerPage()
    }
    
    loadCharacters = async () => {
        const response = await api.loadCharacters()
        this.setState({ characters: response.data.results })        
    }

    loadCharacterPerPage = async () => {
        let page = Math.floor((Math.random() * 25) + 1)
        const response = await api.loadCharacterPerPage(page)
        this.setState({ characters: response.data.results })
    }
    render() {
        return(                            
            <div className="homeContainer">
                {
                    this.state.characters.map(element => (
                        <Card
                            key={element.id}
                            source={element.image}
                            name={element.name}
                            id={element.id}
                            status={element.status}
                            species={element.species}
                            gender={element.gender}
                            origin={element.origin.name}
                            location={element.location.name}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Home