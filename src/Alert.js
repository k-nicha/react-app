import React from 'react'
import { connect } from 'react-redux'

class Alert extends React.Component {
    render () {
        return (
            <div>
                {this.props.user.username}
                <br />
                {this.props.user.password}
                <br />
                {this.props.user.address}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Alert) 