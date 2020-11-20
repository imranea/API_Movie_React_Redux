import axios from 'axios';
import {fetchFilm,fetchFilmPending,fetchFilmRecommendation} from "./action" // fichier séparer où réalise la fonction souhaité et on appelle l'action


export default id => {
    return dispatch =>{
        dispatch(fetchFilmPending())
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=26af30f322fe5573368b06d5c6479f7a`)
        .then(response => {
            dispatch(fetchFilm(response.data))
        })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=26af30f322fe5573368b06d5c6479f7a`)
        .then(response => {
            dispatch(fetchFilmRecommendation(response.data.results)) //
        })
    }
}