import React, {useReducer} from 'react';
import Node from './Node'
import NodeForm from './NodeForm';
import {reducer, initState} from '../Reducer';
import { NodeContext } from '../Context';

const List = () =>{
  const [state, dispatch] = useReducer(reducer, initState);  
  return (
    <NodeContext.Provider value={{state, dispatch}}>
      <NodeForm/>
      {state.array.map((value,index) =><Node index={index} key={index}>{value}</Node>)}
    </NodeContext.Provider>
  )
}

export default List;
