import React, { Component } from "react";

interface INumber {
  number? : any;
  isInitial? : boolean;
  onChange: (e: number) => void;
}

class Cell extends Component<INumber>{
  render() {
    return (
      <div 
        onClick={e => {
          if(this.props.isInitial){
            return;
          }
          this.props.onChange((this.props.number + 1) % 5 )
        }} 
        className={`cell ${this.props.isInitial ? 'initial' : ''}`}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}

export default Cell