import React from 'react';
import {connect} from 'react-redux';


class NodeForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch({type: 'ADD_ITEM', item: this.refs.txt.value});
    dispatch({type : 'TOGGLE_IS_ADDING'});
  }

  toggle(){
    const { dispatch } = this.props;
    dispatch({type : 'TOGGLE_IS_ADDING'})
  }

  render(){
    if(this.props.isAdding) return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter your text" ref="txt"/>
        <br/>
        <br/>
        <button>Add</button>
      </form>
    )
    return <button onClick={this.toggle.bind(this)}>+</button>
  }
}

export default connect(function(state){
  return { isAdding: state.isAdding }
})(NodeForm);
