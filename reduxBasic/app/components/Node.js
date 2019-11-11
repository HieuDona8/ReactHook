import React from 'react';
import {connect} from 'react-redux';

class Node extends React.Component{
  removeNote(){
    const { index , dispatch } = this.props;
    dispatch({type: 'REMOVE_ITEM', index });
  }

  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.removeNote.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default connect()(Node);
