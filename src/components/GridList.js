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
    marginTop:"5%"
  },
  gridList: {
    width: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function TitlebarGridList({list}) {
  const classes = useStyles();
  if(list === undefined || Object.keys(list).length === 0){
    return <Loader></Loader>
  }
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
       { Object
          .keys(list)
          .map((key)=>(
            <Movie
              key={key}
              id={list[key].id}
              adult={list[key].adult}
              image={list[key].poster_path}
              release_date={list[key].release_date}
              titre={list[key].original_title}
              overview={list[key].overview}
              vote={list[key].vote_average}
              listUser={list[key]}
              idPresent={false}
            />
          ))
          }
      </GridList>
    </div>
  );
}

const mapStateToProps = ({list}) =>{
    return{
      list
    };
  };
  

export default connect(mapStateToProps)(TitlebarGridList)