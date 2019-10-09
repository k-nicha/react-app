import ReactDOM from 'react-dom'
import React from 'react'
import Wrapper from './Wrapper'
import UsersList from './UsersList'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const app = document.getElementById('app')

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About us</Link>
            </li>
            <li>
                <Link to='/contact'>Contact us</Link>
            </li>
            <li>
                <Link to='/login'>Log in</Link>
            </li>
            <li>
                <Link to='/user'>User</Link>
            </li>
        </ul>
    )
}

const About = () => {
    return (<h1>Welcome to my about page!</h1>)
}

const Contact = () => {
    return (<h1>Welcome to my contact page!</h1>)
}

const Routes = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
                <Route
                    exact
                    path='/user'
                    render={ () =>
                        <Wrapper
                            component={UsersList}
                            methodType='GET'
                            url='https://jsonplaceholder.typicode.com/users'
                        />
                    }
                />
            </Switch>
        </Router>
    )
}

/* const Container = () => {
    return  (
        <React.Fragment>
            <User />
            <Heading />
        </React.Fragment>
    )
} */

ReactDOM.render(<Routes />, app)