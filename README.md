# Json to React - React component to display a json object

Json to React was development to display json using react. The advantage over JSON.stringify is the component can be styled using custom styling

![](https://s3-us-west-2.amazonaws.com/union25-public/json-to-react.png)

## Getting Started

````shell
npm install json-to-react
````

## Usage

````javascript
import JsonToReact from 'json-to-react'

<JsonToReact
  json={json}
/>
````

## Customize Styles

````javascript
import JsonToReact from 'json-to-react'

const jsonStyles = {
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
<JsonToReact
  json={json}
  jsonStyle={jsonStyles}
/>
````
