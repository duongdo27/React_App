import React from 'react';
import MultiplyBlock from './MultiplyBlock.js'

export default class MultiplyTable extends React.Component {
  render() {
    var arr = [1,2,3,4,5,6,7,8,9];
    var outputRender = arr.map((value) => {
      return (<MultiplyBlock base={value} />);
    });

    return (
      <div className="multiply-table row">
        {outputRender}
      </div>
    );
  }
}