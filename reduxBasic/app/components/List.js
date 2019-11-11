import React from 'react';
import Node from './Node'
import NodeForm from './NodeForm';
import {connect} from 'react-redux';

class List extends React.Component{
  render(){
    return (
      <div>
        <NodeForm/>
        {this.props.mang.map((item,index) =><Node index={index} key={index}>{item}</Node>)}
      </div>
    )
  }
}

export default connect(function(state){
  return {mang: state.mang}
})(List);
 