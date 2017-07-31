import React, { Component } from 'react';
import './App.css';
import JsonToReact from 'json-to-react'

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

const jsonStyles = {
  value: {
    color: 'rgb(0,255,255)'
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
        <JsonToReact
          json={json}
          jsonStyle={jsonStyles}
        />
      </div>
    );
  }
}

export default App;
