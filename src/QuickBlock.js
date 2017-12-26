import React from 'react';

export default class QuickBlock extends React.Component {
  render() {
    return (
      <div className="quick-block col-sm-2">
        <p>{this.props.left} vs. {this.props.right}</p>
        <button className="quick-btn btn btn-success">&gt;</button>
        <button className="quick-btn btn btn-danger">&lt;</button>
        <button className="quick-btn btn btn-info">=</button>
      </div>
    );
  }
}