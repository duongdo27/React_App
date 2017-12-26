import React from 'react';
import QuickBlock from './QuickBlock.js'

function generateBlock() {
    var a = Math.floor(Math.random() * 100);
    var b = Math.floor(Math.random() * 100);
    var c = Math.floor(Math.random() * 100);
    var d = Math.floor(Math.random() * 100);

    var answer = 1;
    if(a + b == c + d){
        answer = 0;
    }
    else if(a + b < c + d){
        answer = -1;
    }
    return {
        left: a + " + " + b,
        right: c + " + " + d,
        answer: answer,
    };
}


export default class QuickMath extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        message: 'Hello',
        blocks: [
            generateBlock(),
            generateBlock(),
            generateBlock(),
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