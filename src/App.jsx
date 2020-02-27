import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import UserData from './UserData'

export class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Link to="/"><button type="button">Home</button></Link>
                    
                    <Switch>
                        <Route exact path = '/' component = {Home}/>
                        <Route exact path = '/user/:id' component ={UserData}/>                       
                    </Switch>
                </>
            </Router>
        )
    }
}

export default App
