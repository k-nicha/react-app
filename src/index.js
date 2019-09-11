import ReactDOM from 'react-dom'
import React from 'react'
import User from './User'
import Heading from './Heading'

const app = document.getElementById('app')

const Container = () => {
    return  (
        <React.Fragment>
            <User />
            <Heading />
        </React.Fragment>
    )
}

ReactDOM.render(<Container />, app)