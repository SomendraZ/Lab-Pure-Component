import React, { PureComponent } from "react";

export class PureCounterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isToggled: false,
    };
  }

  increase = () => {
    if (this.state.isToggled) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  toggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    console.log("This is Pure Component");

    return (
      <div>
        <h1>Pure Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.increase}>count++</button>
      </div>
    );
  }
}

export default PureCounterComponent;
