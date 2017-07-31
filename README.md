# Json to React - React component to display a json object

Json to React was development to display json using react. The advantage over JSON.stringify is the component can be styled using custom styling

![](https://s3-us-west-2.amazonaws.com/union25-public/json-to-react.png)

## Getting Started

````shell
npm install json-to-react
````

## Usage

import jsonToReact from 'json-to-react'

````html
<JsonToReact
  json={json}
/>
````

## Customization

````json
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
````

````html
<JsonToReact
  json={json}
  jsonStyle={jsonStyles}
/>
````
