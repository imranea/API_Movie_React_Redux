import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieDetails from "./components/MovieDetails"
import MyList from "./components/myList"
import NotFound from "./components/NotFound"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Provider from "./store/store"
import reportWebVitals from './reportWebVitals';


const Root = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><App/></Route>
      <Route path="/details/:id"><MovieDetails/></Route>
      <Route path="/mylist"><MyList/></Route>
      <Route><NotFound/></Route>
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
