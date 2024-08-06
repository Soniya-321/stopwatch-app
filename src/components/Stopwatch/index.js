// Write your code here
import {Component} from 'react'
import './index.css'
class Stopwatch extends Component {
  state = {
    startClock: false, time: 0
  }
  
  onStartButton = () => {
    const {startClock, time} = this.state
    if (!startClock) {
      this.timerId = setInterval(() => {
        this.setState(prevState => ({
          time: prevState.time + 1,
          startClock: true,
        }));
      }, 1000);
    }
  }

  onStopButton = () =>{
    clearInterval(this.timerId);
    this.setState({ startClock: false });
  } 

  onResetButton = () => {
    clearInterval(this.timerId);
    this.setState({
      time: 0,
      startClock: false,
    });
  }
  formatTime = () => {
    const {time} = this.state
    const mins = Math.floor(time / 60)
    const secs = time % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="timer-img"
              alt="stopwatch"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="timer-count">
            {this.formatTime()}
          </h1>
          <div className="btn-container">
            <button className="button button-1" type="button" onClick={this.onStartButton}>
              Start
            </button>
            <button className="button button-2" type="button" onClick={this.onStopButton}>
              Stop
            </button>
            <button className="button button-3" type="button" onClick={this.onResetButton}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
