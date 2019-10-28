import React from 'react'
import axios from 'axios'
import { writeUsersToStore } from './redux/actions/writeUsersToStore'
import { connect } from 'react-redux'
import './style.css'

class Table extends React.Component {
    constructor () {
        super()
        this.state = {
            showModal: null
        }
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            // zapisi vo redux
            this.props.writeUsersToStore(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    addUser = () => {
        this.setState({ showModal:
            <div className='my-modal'>
                <input type='text' className='form-control' placeholder='name' />
                <input type='text' className='form-control' placeholder='username' />
                <input type='text' className='form-control' placeholder='email' />
                <input type='text' className='form-control' placeholder='address' />
            </div>
        })
    }

    editUser = (user) => {
        this.setState({ showModal:
            <div className='my-modal'>
                <input type='text' className='form-control' defaultValue={user.name} />
                <input type='text' className='form-control' defaultValue={user.username} />
                <input type='text' className='form-control' defaultValue={user.email} />
                <input type='text' className='form-control' defaultValue={
                    user.address.city + ' ' + user.address.street} />
            </div>
        })
    }

    render () {
        let header = null
        let usersList = null
        if (this.props.users) {
             /* header = this.props.users.map((user) => {
                return <td></td>
            }) */
            usersList = this.props.users.map((user) => {
                return <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        {`${user.address.street} ${user.address.suite}`}
                    </td>
                    <td>
                        <button id='edit' className='btn btn-light' onClick={() => this.editUser(user)}>
                            Edit
                        </button>
                    </td>
                </tr>
            })
        }
        return (
            <table className='table table-dark'>
                {this.state.showModal}
                <thead>
                    <tr>
                        <th>
                            <button id='add' className='btn btn-success' onClick={this.addUser}>
                                Add new user
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        )
    }    
}

function mapStateToProps (state) {
    return {
        users: state.usersTableReducer.users
    }
}

function mapDispatchToProps (dispatch) {
    return {
        writeUsersToStore: (data) => dispatch(writeUsersToStore(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)