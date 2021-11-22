import React, { Component } from "react";
import ItemsMember from "./ItemsMember";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }
  totalAdd = () => {
    this.setState({ total: this.state.total + 1 });
  };
  totalSum = () => {
    this.setState({ total: this.state.total - 1 });
  };
  render() {
    return (
      <div className="container">
        <ItemsMember
          img="/images/1.jpg"
          name="Abdullah 300g"
          sub={this.totalSum}
          add={this.totalAdd}
        />
        <ItemsMember
          img="/images/2.jpg"
          name="Sanad 550g"
          sub={this.totalSum}
          add={this.totalAdd}
        />
        <ItemsMember
          img="/images/3.jpg"
          name="Ghassan 300g"
          sub={this.totalSum}
          add={this.totalAdd}
        />
        <ItemsMember
          img="/images/4.jpg"
          name="Yaser"
          sub={this.totalSum}
          add={this.totalAdd}
        />
        <ItemsMember
          img="/images/5.jpg"
          name="Ryahnh"
          sub={this.totalSum}
          add={this.totalAdd}
        />
        <ItemsMember
          img="/images/6.jpg"
          name="Fatima"
          sub={this.totalSum}
          add={this.totalAdd}
        />

        <h1>Your Total is: {this.state.total}</h1>
      </div>
    );
  }
}

export default Items;
