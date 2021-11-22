import React, { Component } from "react";


class Counter extends Component {
      
      state = {
            num:0
      }

      add = () => {
            this.setState( {num: this.state.num + 1} )
      }

      sub = () => {
            this.setState( { num: this.state.num > 0 ? this.state.num - 1 : this.state.num = 0 } )
      }

      render() {
            return <div className='mt-5' >
                        <h1 className="text-white mt-5" >Number is: { this.state.num } </h1>
                        <button className='btn' onClick={ this.add }> ADD </button>
                        <button className='btn' onClick={ this.sub } > SUB </button>
                        <button className='btn' onClick={ ()=> { this.setState( {num: this.state.num = 0} )} } >Reset</button>
                  </div>
            
      };
};

export default Counter;