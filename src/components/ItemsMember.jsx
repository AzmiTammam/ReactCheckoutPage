import React, { Component } from "react";


class ItemsMember extends Component {
      state = {
            num: 0,
            total: 0
      }

      add = () => {

            this.setState({num: this.state.num + 1})
            this.props.add();
      }
      sum = () => {
            if (this.state.num) {
                  this.setState({num: this.state.num - 1})
                  this.props.sub();
            }

      }
      render() {
            return (
                  <div className="row" >
                  <div className="customRow col-12" >
                  <img className="customImg" src={this.props.img} alt="." />
                  <span className="customName" >{this.props.name}</span>
                  <div className="custombtn" >
                  <button className=" btn-primary btn" onClick={this.sum} >
                        -
                  </button>
      
                  <span className="mx-2" >{this.state.num}</span>
                  <button className=" btn-primary btn" onClick={this.add} >
                        +
                  </button>
                  </div>
                  
                  </div>
                  
                  </div>
            )
      }

}

export default ItemsMember;