import React from 'react'
import User from './User'
import Error from './Error'
import axios from 'axios'

class Wrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data.map((element) => {
                    return <User
                        key={element.id}
                        name={element.name}
                        email={element.email}
                    />
                })
                this.setState({ data: users })
            })
            .catch((error) => {
                this.setState({ data: <Error /> })
            })
    }
    
    render () {
        return (
            <React.Fragment>
                {this.props.children}
                {
                    !this.state.data
                    ? <h6> LOADING... </h6>
                    : this.state.data
                }
            </React.Fragment>
        )
    }
}

export default Wrapper