import React, { useState, useEffect } from 'react'
import api from '../../utils/api'
import CardCustom from '../../components/CardCustom'
import './styles.css'

export default function Home() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        loadCharactersRandom()
    }, [])

    const loadCharactersRandom = async () => {
        const page = Math.floor((Math.random() * 25) + 1)
        const response = await api.loadCharacterPage(page)
        setCharacters(response.data.results)
    }

    return(                            
        <div className="homeContainer">
            {
                characters.map(element => (
                    <CardCustom
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
