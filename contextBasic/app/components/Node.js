import React from 'react';
import { NodeContext } from '../AppContext';

class Node extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <NodeContext.Consumer>
          {(context)=>{
            return <button onClick={()=>context.handleRemoveNote(this.props.index)}>Delete</button>
          }}
        </NodeContext.Consumer>
      </div>
    )
  }
}

export default Node;