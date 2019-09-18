import React from 'react'
import User from './User'
import data from './data.js'

const Wrapper = (props) => {
    let users = []
    users = data.map(element => {
        return <User key={element.id} name={element.name} email={element.email} /> 
    })
    return (
        <React.Fragment>
            {props.children}
            {users}
        </React.Fragment>
    )
}

export default Wrapper