import React from 'react';
import QuickBlock from './QuickBlock.js'

function generateBlock(score) {
    var scale = 10;
    if(score) {
        scale += 10 * score;
    }

    var a = Math.floor(Math.random() * scale);
    var b = Math.floor(Math.random() * scale);
    var c = Math.floor(Math.random() * scale);
    var d = Math.floor(Math.random() * scale);

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
        screen: "start",
        message: '',
        blocks: [
            generateBlock(),
            generateBlock(),
            generateBlock(),
        ],
        score: 0,
        counter: 5,
        wrongs: 0,
    };

    this.tick = this.tick.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  startGame(){
    this.setState({
        screen: "play",
        message: '',
        blocks: [
            generateBlock(),
            generateBlock(),
            generateBlock(),
        ],
        score: 0,
        counter: 5,
        wrongs: 0,
    });
  }

  tick() {
    if(this.state.counter > 0 && this.state.blocks.length > 0){
       this.setState({
            counter: this.state.counter - 1,
       });
       return;
    }

    var new_blocks = this.state.blocks.slice(0);
    new_blocks.push(generateBlock(this.state.score));
    this.setState({
        counter: 5,
        blocks: new_blocks,
    });
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
    else if (this.state.wrongs == 4) {
        this.setState({
            screen: "restart",
        });
    }
    else {
        this.setState({
            message: 'Incorrect',
            blocks: new_blocks,
            wrongs: this.state.wrongs + 1,
        });
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    if(this.state.screen == "start") {
        return (
            <div className="quick-math row">
                <button className="quick-btn btn btn-success"
                        onClick={this.startGame}>
                    Start
                </button>
            </div>
        );
    }

    if(this.state.screen == "restart") {
        return (
            <div className="quick-math row">
                <p>Score: {this.state.score}</p>
                <p>High score: </p>
                <button className="quick-btn btn btn-success"
                        onClick={this.startGame}>
                    Restart
                </button>
            </div>
        );
    }

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
        <p>Wrongs: {this.state.wrongs}</p>
        {outputRender}
      </div>
    );
  }
}