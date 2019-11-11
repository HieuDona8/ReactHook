import React, {useReducer, useContext} from 'react';
import { NodeContext } from '../Context';

const Node = (props) => {
  const {state, dispatch} = useContext(NodeContext);

  return (
    <div>
      <p>{props.children}</p>
      <button onClick={() => dispatch({type: 'REMOVE_ITEM', index: props.index})}>Delete</button>
    </div>
  )

}

export default Node;
