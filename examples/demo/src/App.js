import React, { Component } from 'react';
import './App.css';
import jsonToReact from 'json-to-react'

let json = {
  myValue: 'json-to-react',
  myObject: {
    key1: 'key1',
    key2: 'key2',
    key3: 'key3',
    myInnerArray: [
      { key4: 'key4'},
      { key5: 'key5'},
      { key6: 'key6'}
    ]
  },
  myArray: [
    {
      a: 'a',
      b: 'b',
      c: 'c',
      myInnerObject: {
        d: 'd',
        e: 'e'
      }
    }    
  ]
}

const styles = {
  value: {
    color: 'rgb(0,255,0)'
  },
  key: {
    color: 'rgb(255,255,255)'
  },
  item: {
  },
  child: {
    margin: '0px 16px'
  },
  parent: {
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {jsonToReact(json, styles)}
      </div>
    );
  }
}

export default App;
