import React from 'react'
import Error from './Error'
import axios from 'axios'

class Wrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [],
            error: null,
            loading: false
        }
    }

    componentDidMount () {
        this.setState({ loading: true })
        axios({
            method: this.props.methodType,
            url: this.props.url
        }).then((response) => {
            this.setState({ data: response.data, loading: false })
        })
        .catch((error) => {
            this.setState({ error: <Error />, loading: false })
        })
    }
    
    render () {
        return (
            <React.Fragment>
                <this.props.component data={this.state.data} />
                {this.state.error}
                {this.state.loading && <div>LOADING...</div>}
            </React.Fragment>
        )
    }
}

export default Wrapper