import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {connect} from "react-redux"
import {useParams} from "react-router-dom";
import fetchFilm from "../store/fetchFilm"
import Loader from "./Loader"
import AppBar from "./Appbar"
import {NavLink} from "react-router-dom"
import GridListRecommendation from "./GridListRecommendation"

const useStyles = makeStyles({
  root: {
    maxWidth:500,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin:'auto',
    marginTop:"5%"
  },
  media: {
    height: 140,
  },
});




const FilmDetails = ({fetchFilm,film})=> {

    const classes = useStyles();
    const {id} = useParams();

    useEffect(()=>{
        fetchFilm(id)
    },[fetchFilm]) 
  
    if(film === undefined || Object.keys(film).length === 0){
      return <Loader></Loader>
    }

    const genreFilm = Object
    .keys(film.genres)
    .map(key =>(
      <Chip
        key={key}
        avatar={<Avatar>{film.genres[key].name.charAt(0)}</Avatar>}
        label={film.genres[key].name}
        color="primary"
      />
    ))


  return (
    <>
    <AppBar/>
    <div>
      <NavLink style={{textDecoration:"none"}} to="/">
        <Button variant="contained" color="secondary">
          Return to the home page
        </Button>
      </NavLink>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://image.tmdb.org/t/p/w220_and_h330_face${film.poster_path}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {film.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {film.overview} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {genreFilm}
        </CardActions>
      </Card>
      <h1 style={{textAlign:'center'}}>Suggestions</h1>
      <GridListRecommendation idPresent={true} style={{textAlign:'center'}}></GridListRecommendation>
    </div>
    </>
  );
}

const mapStateToProps = ({film,pending,click}) =>{
    return{
      film,
      pending
    };
  };
  


const mapDispatchToProps = dispatch =>{
    return{
        fetchFilm : (id) => dispatch(fetchFilm(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilmDetails);