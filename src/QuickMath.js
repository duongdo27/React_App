import React from 'react';
import QuickBlock from './QuickBlock.js'

export default class QuickMath extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        message: 'Hello',
        blocks: [
            {left: "10 + 2", right: "3 + 12", answer: -1},
            {left: "9 + 5", right: "3 + 8", answer: 1},
            {left: "9 + 2", right: "3 + 8", answer: 0},
        ],
    };
  }

  render() {
    var outputRender = this.state.blocks.map((value, idx) => {
      return (<QuickBlock id={idx}
                          left={value.left}
                          right={value.right} />);
    });

    return (
      <div className="quick-math row">
        <p>{this.state.message}</p>
        {outputRender}
      </div>
    );
  }
}