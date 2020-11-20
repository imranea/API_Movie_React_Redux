import React from "react";
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import Movie from './Movie';
import AppBar from "./Appbar"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop:"5%"
    },
    gridList: {
      width: '100%'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const MyList = () =>{
    const classes = useStyles();
    const myListFilm = JSON.parse(localStorage.getItem('filmList'))
    if(myListFilm == null){
      return(
        <>
                <AppBar/>
                <h1>No movies in your personal list</h1>
        </>
      )
    }else if(typeof myListFilm === "object" && !Array.isArray(myListFilm)){
      return(
        <>
          <AppBar/>
          <Movie
              id={myListFilm.id}
              adult={myListFilm.adult}
              image={myListFilm.poster_path}
              release_date={myListFilm.release_date}
              titre={myListFilm.original_title}
              overview={myListFilm.overview}
              vote={myListFilm.vote_average}
              idPresent={true}
          />
        </>
      )
    }
    return(
        <>
              <AppBar/>
                <GridList cellHeight={180} className={classes.gridList}>
                    {
                        Object
                        .keys(myListFilm)
                        .map((key)=>(
                            <Movie
                            key={key}
                            id={myListFilm[key].id}
                            adult={myListFilm[key].adult}
                            image={myListFilm[key].poster_path}
                            release_date={myListFilm[key].release_date}
                            titre={myListFilm[key].original_title}
                            overview={myListFilm[key].overview}
                            vote={myListFilm[key].vote_average}
                            idPresent={true}
                            />
                        )) 
                    } 
            </GridList>
      </>
    );
}


export default MyList;