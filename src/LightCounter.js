import React, {Component} from 'react'

class LightCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        strikes: 0
      };
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

  export default LightCounter;