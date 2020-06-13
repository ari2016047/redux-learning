import React, { Component } from 'react';
//The connect() function connects a React component to a Redux store.
//It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.
//It does not modify the component class passed to it; instead, 
//it returns a new, connected component class that wraps the component you passed in.
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub}  />
            </div>
        );
    }
}

//state comes from redux 
const mapStateToProps = (state) =>{
    console.log(state);
    return {
        ctr: state.counter 
    };
};

//react-redux gives dispatch helper which will call store.dispatch in background
//onIncrementCounter holds the reference to dispatch method which will bw called onClick
const mapDispatchToProps = (dispatch)=>{
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: () => dispatch({type: 'SUBTRACT'})
    };
};

//connect() returns hoc which takes component as an arguement
export default connect(mapStateToProps, mapDispatchToProps)(Counter);