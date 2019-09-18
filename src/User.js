import React from 'react'
import './style.css'

class User extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div id='greeting'
                    style={{border: '1px solid black', marginBottom: '2px'}}
                    className='text'
                >
                    {this.props.name}
                    <br />
                    {this.props.email}
                    <button style={{float: 'right'}}>Edit</button>
                </div>
            </React.Fragment>
        )
    }
}

export default User