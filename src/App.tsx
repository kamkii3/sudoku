import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cell from './Cell';
import Board from './Board';


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board></Board>
      </div>
    );
  }
}
