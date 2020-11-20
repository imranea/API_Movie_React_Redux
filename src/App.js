import React,{useEffect}from 'react';
//import axios from 'axios';
import GridList from './components/GridList'
import {connect} from "react-redux";
import fetchList from "./store/fetchList"
import AppBar from "./components/Appbar"

const App = ({fetchListFilm}) =>{

  useEffect(()=>{
    fetchListFilm()
  },[fetchListFilm])

    return (
      <>
      <AppBar/>
      <div>
        <GridList/> 
      </div>
      </>
    );
  }


const mapDispatchtoProps = dispatch =>{
  return{
    fetchListFilm : () => dispatch(fetchList())
  }
}

export default connect(null,mapDispatchtoProps)(App);