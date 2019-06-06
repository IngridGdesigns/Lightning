import React, {Component} from 'react'

class LightCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        strikes: 0
      };
    }

    timerTick() {
        this.setState({
            strikes: this.state.strikes + 100        })
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000)//calls timerTick function every second
        //increases the strikes property by 100 every sec
    }
  
    render(){
      return (
        <div>
          <h1>Hello!</h1>
          <h1>{this.state.strikes}</h1>
        </div>
      );
    }
  }

  export default LightCounter