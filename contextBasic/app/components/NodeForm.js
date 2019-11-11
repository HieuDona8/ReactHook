import React from 'react';
import { NodeContext } from '../AppContext';


class NodeForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (<NodeContext.Consumer>
      {(context)=>{ 
        if(context.isAdding)
          return(<form onSubmit={(e)=>{e.preventDefault();context.handleAddNode(this.inputRef.value)}}>
              <input type="text" placeholder="Enter your text" ref={el => this.inputRef = el}/>
              <br/>
              <br/>
              <button>Add</button>
            </form>)
        return <button onClick={()=>context.toggle()}>+</button>
      }}
    </NodeContext.Consumer>
      
    )
  }
}

export default NodeForm;
