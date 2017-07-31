# Json to React - React component to display a json object

Json to React was development to display json using react. The advantage over JSON.stringify is the component can be styled using custom styling

![](https://s3-us-west-2.amazonaws.com/union25-public/json-to-react.png)

## Getting Started

````
npm install json-to-react
````

## Usage

import jsonToReact from 'json-to-react'

````
<div className="App">
  {jsonToReact(json)}
</div>
````

## Cusomization

````
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

<div className="App">
  {jsonToReact(json, styles)}
</div>
````
