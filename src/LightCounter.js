import React, {Component} from 'react'

class LightCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        strikes: 0
      }
      this.timerTick = this.timerTick.bind(this)
    }

    timerTick = () => {
        this.setState((prevState) => {
            return {
                strikes: prevState.strikes + 100
            }
        })
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000)//calls timerTick function every second
        //increases the strikes property by 100 every sec
    }
  
    render(){
      return (
        <div>
          <h1>When lightning strikes...</h1>
          <h2 className='overlay'>{this.state.strikes}</h2>
        </div>
      );
    }
  }

  export default LightCounter