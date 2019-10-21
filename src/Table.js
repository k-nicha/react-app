import React from 'react'
import axios from 'axios'
import { writeUsersToStore } from './redux/actions/writeUsersToStore'
import { connect } from 'react-redux'

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
            <div>
                <input placeholder='name' />
                <input placeholder='username' />
                <input placeholder='email' />
                <input placeholder='address' />
            </div>
        })
    }

    editUser = (user) => {
        this.setState({ showModal:
            <div>
                <input defaultValue={user.name} />
                <input defaultValue={user.username} />
                <input defaultValue={user.email} />
                <input defaultValue={user.address} />
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
                        <button id='edit' onClick={() => this.editUser(user)}>
                            Edit
                        </button>
                    </td>
                </tr>
            })
        }
        return (
            <table>
                <thead>
                    <td>
                        <button id='add' onClick={this.addUser}>
                            Add new user
                        </button>
                    </td>
                    
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