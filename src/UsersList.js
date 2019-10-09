import React from 'react'
import User from './User'

const UsersList = (props) => {
    return props.data.map((element) => {
        return <User
            key={element.id}
            name={element.name}
            email={element.email}
        />
    })
}

export default UsersList