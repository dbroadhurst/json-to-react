import React from 'react'

const defaultStyles = {
  value: {
    color: 'rgb(0,255,0)'
  },
  key: {
    color: 'rgb(255,255,255)'
  },
  item: {
    // border: '1px solid red'
  },
  child: {
    // border: '1px solid red',
    margin: '0px 16px'
  },
  parent: {
    // border: '1px solid red'
  }
}

const jsonToReact = (json, _styles = defaultStyles) => {
  let index = 0
  let styles = Object.assign({}, defaultStyles, _styles)

  const getKey = key => {
    if (isNaN(key)) {
      return (
        <span style={styles.key}>{key}:</span>
      )
    } else {
      return (
        <span style={styles.key}>[{key}]</span>
      )
    }
  }

  const getValue = value => {
    return (
      <span style={styles.value}>
        {value ? value.toString() : 'null'}
      </span>
    )
  }

  const scan = (parent, info) => {
    return Object.keys(info).map(key => {
      let value = info[key]
      if (typeof value === 'object' && value !== null) {
        return (
          <div style={styles.parent} key={index++}>
            <div style={styles.value}>{getKey(key)}
              <div style={styles.child}>{scan(key, value)}</div>
            </div>
          </div>
        )
      } else if (Array.isArray(value)) {
        return (
          <div style={styles.parent} key={index++}>
            <div style={styles.value}>{getKey(key)}
              <div style={styles.child}>{scan(key, value)}</div>
            </div>
          </div>
        )
      }
      return (
        <div style={styles.item} key={index++}>
          {getKey(key)} {getValue(value)}
        </div>)
    })
  }
  return scan('root', json)
}

const JsonToReact = (props) => {
  return (
      <div>
        {jsonToReact(props.json, props.jsonStyle)}
      </div>
  )
}

export default JsonToReact
