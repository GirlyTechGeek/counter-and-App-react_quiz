import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        <button onClick={this.IncrementItem}>-</button>
        <button onClick={this.DecreaseItem}>+</button>
        
      </div>
    );
  }
}

class Total extends Component{
  render() {
    let sum = this.props;
    return(
      <div>
        {<h2>Toatl value is: {sum}</h2>}
      </div>
    )
  }
}



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      sum:[],
      
   data : [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0},
  ]

    }
  }

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }

}



export default App;
