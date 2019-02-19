import React from 'react'
import Button from './Button'


export default class Stopwatch extends React.Component{

  state = {
    running: false,
    time: 0
  }

  componentDidMount(){
    //this._interval = setInterval(this.tick, 1000);
  }

  tick(){
    console.log(Date.now());
  }

  handlePauseClick = () => {    
    this.setState({ running: false });
  }

  handleStartClick = () => {    
    this.setState({ running: true });
  }

  handleStopClick = () => {
    this.setState({ running: false });
  }

  render(){

    const { running, time } = this.state;

    return(
      <section className="stopwatch">
        <div className="stopwatch-time">{time}</div>
        <div className="stopwatch-controls">
          {
            running ?
            <Button className="icon" icon="pause" onClick={this.handlePauseClick}/>
            :
            <Button className="icon" icon="play_arrow" onClick={this.handleStartClick}/>
          }
          <Button className="icon" icon="stop" onClick={this.handleStopClick}/>
        </div>
      </section>
    )
  }
}