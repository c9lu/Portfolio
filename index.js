import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import BlogLayout from './components/BlogLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'




ReactDOM.render(
    (<BrowserRouter>
        <Switch>
      
                <Route exact path="/" component={Home}/> 
                <Route path="/BlogLayout" component={BlogLayout}/>
       
        </Switch>
      </BrowserRouter>
     
    )

    , document.getElementById('root')
);