import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Text, Button1, Button2 } from './text'; 

class Render extends React.Component{
  constructor(props) {
    super(props);

    this.state = { first: 'friend', second: 'bro' };
    this.changeFirst = this.changeFirst.bind(this);
    this.changeSecond = this.changeSecond.bind(this);
  }

  changeFirst(newFirst) {
    this.setState({
      first: newFirst
    });
  }

  changeSecond(newSecond) {
    this.setState({
      second: newSecond
    });
  }

  render() {
    return [
      <Text first={this.state.first}   second={this.state.second}/>,
      <Button1 onClick={this.changeFirst}/>,
      <Button2 onClick={this.changeSecond}/>
    ]
  }
} 

ReactDOM.render(
  <Render />,
  document.getElementById('root')
);