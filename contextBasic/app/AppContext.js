import React, { Component } from 'react';

export const NodeContext = React.createContext();
export class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {          
      array: ['Androi','Ios','Nodejs'],
      isAdding: false,
      toggle: ()=>{
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
      },
      handleAddNode: (node)=>{
        this.state.array.push(node);
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
      },
      handleRemoveNote: (index)=>{
        this.state.array.splice(index, 1);
        this.setState(this.state);
      },
    }
  }
  
  render() {
    return <NodeContext.Provider value={this.state}>
      {this.props.children}
    </NodeContext.Provider>
  }
}