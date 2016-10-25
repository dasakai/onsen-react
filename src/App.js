import React from 'react';
import { connect } from 'react-redux';
import { updateActionCreator, setdataActionCreator } from './actions/actionCreators';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        handleUpdate: () => { dispatch(updateActionCreator()},
        handleSetData: (e, data) => { dispatch(setdataActionCreator(data))}
    }
}

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.handleUpdate();
    }

    render() {
        return (
            
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
