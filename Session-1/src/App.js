import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Greeting extends Component {

  render() {
    return <div style={{ color: this.props.color }}>
      {this.props.message}
      <button onClick={() => this.props.deleteCallBack()} style={{ width: "50px", height: "50px", fontSize: "15px" }} >X</button>
    </div>
  }
};


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      names: ['remya', 'nandini', 'pradeep', 'srini'],
      name: ''
    }

    this.onChange = this.onChange.bind(this);
    this.addClicked = this.addClicked.bind(this);

    console.log("constructor");
  }

  onChange(event) {
    console.log(event.target.value)
    this.setState({ name: event.target.value });
  }

  addClicked() {
    console.log("add Clicked.")
    let { names, name } = this.state;

    names.push(name);

    this.setState({
      names, name: ""
    })
  }

  delete(i) {
    let { names } = this.state;
    names.splice(i, 1);
    this.setState({ names })
  }

  render() {

    console.log("rendering app..");

    return (
      <div className="App">
        {this.state.names.map((name, i) => <Greeting deleteCallBack={() => this.delete(i)} color={i % 2 ? "red" : 'green'} message={name} />)}
        <span>
          <label>Enter name</label>
          <input value={this.state.name} onChange={this.onChange} type="text" />
        </span>
        <button onClick={this.addClicked}>ADD</button>
      </div>
    );
  }
}

export default App;
