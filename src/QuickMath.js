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
        score: 0,
    };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(block_id, answer) {
    var correct_answer = this.state.blocks[block_id].answer;
    var new_blocks = this.state.blocks.slice(0);
    new_blocks.splice(block_id, 1);

    if(answer == correct_answer){
        this.setState({
            score: this.state.score + 1,
            message: 'Correct',
            blocks: new_blocks,
        });
    }
    else {
        this.setState({
            message: 'Incorrect',
            blocks: new_blocks,
        });
    }
  }

  render() {
    var outputRender = this.state.blocks.map((value, idx) => {
      return (<QuickBlock id={idx}
                          left={value.left}
                          right={value.right}
                          checkAnswer={this.checkAnswer} />);
    });

    return (
      <div className="quick-math row">
        <p>{this.state.message}</p>
        <p>Score: {this.state.score}</p>
        {outputRender}
      </div>
    );
  }
}