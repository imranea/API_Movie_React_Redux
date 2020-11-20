import axios from 'axios';
import {fetchListFilm} from "./action" // fichier séparer où réalise la fonction souhaité et on appelle l'action


export default () => {
    return dispatch =>{
        axios.get(`https://api.themoviedb.org/4/list/1?page=1&api_key=26af30f322fe5573368b06d5c6479f7a`,{
            headers:{Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmFmMzBmMzIyZmU1NTczMzY4YjA2ZDVjNjQ3OWY3YSIsInN1YiI6IjVmYTQxOTgxMzRlMTUyMDA0MjczNDVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BTqqsVtRjyZWXYy8dpVh9-C8Rlo46fKptXyRpVDEdFQ"}
        })
        .then(response => {
            dispatch(fetchListFilm(response.data.results))
        });
    }
}