import React from 'react';
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Movie from './Movie';
import Loader from "./Loader"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function TitlebarGridList({recommendations}) {
  const classes = useStyles();



  if(recommendations === undefined || Object.keys(recommendations).length === 0){
    return <Loader></Loader>
  }


  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {
          Object
          .keys(recommendations)
          .map((key)=>(
            <Movie
              key={key}
              id={recommendations[key].id}
              adult={recommendations[key].adult}
              image={recommendations[key].poster_path}
              release_date={recommendations[key].release_date}
              titre={recommendations[key].original_title}
              overview={recommendations[key].overview}
              vote={recommendations[key].vote_average}
              idPresent={true}
            />
          )) 
          }
      </GridList>
    </div>
  );
}

const mapStateToProps = ({recommendations}) =>{
    return{
      recommendations
    };
  };
  

export default connect(mapStateToProps)(TitlebarGridList)