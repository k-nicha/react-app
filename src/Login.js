import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    checkInput = (event) => {
        const inputValue = event.target.value
        if (inputValue.indexOf('@') <= 0) {
            console.log('imas greska u mejlo')
        }
        this.saveInput(event)
    }

    submit = () => {
        alert(this.state.username + ' ' + this.state.password)
    }

    saveInput = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    render () {
        return <React.Fragment>
            <input id='username'
                placeholder='Username'
                onChange={this.checkInput}
            />
            <input id='password'
                placeholder='Password' 
                onChange={this.saveInput}
            />
            <button id='submit' onClick={this.submit}>Log In!</button>
        </React.Fragment>
    }
}

export default Login