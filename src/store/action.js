export const FETCH_LIST_FILM = "FETCH_LIST_FILM"
export const FETCH_FILM_PENDING = "FETCH_FILM_PENDING"
export const FETCH_FILM = "FETCH_FILM"
export const FETCH_FILM_GENRE = "FETCH_FILM_GENRE"
export const FETCH_FILM_RECOMMENDATIONS = "FETCH_FILM_RECOMMENDATIONS"
export const FILM_PERSONNAL = "FILM_PERSONNAL"

export const fetchListFilm = (list) =>({
    type: FETCH_LIST_FILM,
    list
})


export const fetchFilm = (film) =>({
    type: FETCH_FILM,
    film
})

export const fetchFilmGenre = (genre) =>({
    type: FETCH_FILM_GENRE,
    genre
})

export const fetchFilmRecommendation = (recommendations) =>({
    type: FETCH_FILM_RECOMMENDATIONS,
    recommendations
})

export const fetchFilmPending = () =>({
    type:FETCH_FILM_PENDING
})

export const fetchFilmPersonnal = (personnalList) =>{
    return dispatch =>{
        dispatch({type:FILM_PERSONNAL,personnalList})
    } 
}
