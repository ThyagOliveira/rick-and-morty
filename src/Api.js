import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})


export const loadCharacters = () => api.get('character')
export const loadPage = () => apis.loadCharacters(api.get('/'))
export const loadEpisode = () => api.get('episode/')

const apis = {
    loadCharacters,
    loadEpisode,
    loadPage
}



export default apis