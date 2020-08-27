import axios from 'axios'

const server = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})


const loadCharacters = () => server.get('character/')
const loadCharacterPage = (page) => server.get('character/?page=' + page )
const loadEpisode = () => server.get('episode/')

const api = {
    loadCharacters,    
    loadCharacterPage,
    loadEpisode,
}



export default api