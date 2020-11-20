import {FETCH_LIST_FILM,FETCH_FILM,FETCH_FILM_PENDING,FETCH_FILM_GENRE,FETCH_FILM_RECOMMENDATIONS,FILM_PERSONNAL} from "./action"

const reducer = (state,action) =>{
    switch(action.type){
        case FETCH_LIST_FILM:{
            return{
                ...state,
                list:action.list
            }
        }
        case FETCH_FILM:{
            return{
                ...state,
                film:action.film,
                pending:false
            }
        }
        case FETCH_FILM_PENDING:{
            return{
                pending:true
            }
        }
        case FETCH_FILM_GENRE:{
            return{
                ...state,
                genre: action.genre
            }
        }
        case FILM_PERSONNAL:{
            return{
                ...state,
                personnalList:action.personnalList
            }
        }
        case FETCH_FILM_RECOMMENDATIONS:{
            return{
                ...state,
                recommendations: action.recommendations
            }
        }
        default:
            return state;
    }
};

export default reducer;