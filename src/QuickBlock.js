import React from 'react';

export default class QuickBlock extends React.Component {
  render() {
    return (
      <div className="quick-block col-sm-2">
        <p>{this.props.left} vs. {this.props.right}</p>
        <button className="quick-btn btn btn-success"
                onClick={() => this.props.checkAnswer(this.props.id, 1)}>
           &gt;
        </button>
        <button className="quick-btn btn btn-danger"
                onClick={() => this.props.checkAnswer(this.props.id, -1)}>
           &lt;
        </button>
        <button className="quick-btn btn btn-info"
                onClick={() => this.props.checkAnswer(this.props.id, 0)}>
           =
        </button>
      </div>
    );
  }
}