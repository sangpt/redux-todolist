import React from 'react';

export default class Li extends React.Component {
  render() {
    return (
      <li>
        <span style={{margin: '10px 5px'}}>{this.props.text} </span>       
        <a href='javascript:void(0)'>[delete]</a>
      </li>
    )
  }
}