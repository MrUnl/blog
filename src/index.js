import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route 
            path="/(ig|instagram)" 
            render={() => {
              window.location.href = "https://instagram.com/mr_unl";
              return null;
            }}
            exact
          />
          <Route 
            path="/github" 
            render={() => {
              window.location.href = "https://github.com/MrUnl";
              return null;
            }}
            exact
          />
          <Route 
            path="/(tt|twitter)" 
            render={() => {
              window.location.href = "https://twitter.com/mr_unl";
              return null;
            }}
            exact
          />
          <Route path="/" exact>
            <App/>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// GENERATE_SOURCEMAP=false
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
