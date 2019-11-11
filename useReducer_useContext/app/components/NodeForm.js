import React, { useContext } from 'react';
import { NodeContext } from '../Context';

const NodeForm = ()=> {
  const {state, dispatch} = useContext(NodeContext);
  let textInput = React.createRef();

  if(state.isAdding) 
    return (
      <form onSubmit={(e)=>{e.preventDefault();dispatch({type: 'ADD_ITEM', item: textInput.current.value});dispatch({type: 'TOGGLE_IS_ADDING'})}}>
        <input type="text" placeholder="Enter your text" ref={textInput} />
        <br/>
        <br/>
        <button>Add</button>
      </form>
    )
  return <button onClick={()=>dispatch({type: 'TOGGLE_IS_ADDING'})}>+</button>
}

export default NodeForm;
