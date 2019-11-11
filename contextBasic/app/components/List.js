import React from 'react';
import Node from './Node'
import NodeForm from './NodeForm';
import { NodeContext, AppContext } from '../AppContext';


export default class List extends React.Component{
  render(){
    return (
      <AppContext>
        <div className="list">
          <NodeForm />
        </div>
        <div className="list">
          <NodeContext.Consumer>
            {(context) =>{
              return context.array.map((node, index) =>
                {return (<Node key={index} index={index}>{node}</Node>)}
              )
            }}
          </NodeContext.Consumer>
        </div>
      </AppContext>
    )
  }
}

