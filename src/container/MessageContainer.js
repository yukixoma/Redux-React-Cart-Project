import React, { Component } from 'react';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';

class MessageContainer extends Component {
    render() {
        let { message } = this.props;
        return(
            <Message message = { message }/>
        )
    }
}

MessageContainer.protoTypes = {
    message: PropTypes.string.isRequired
}


const mapStatetoProps = state => {
    return {
        message: state.message
    }
}



export default connect(mapStatetoProps,null)(MessageContainer);