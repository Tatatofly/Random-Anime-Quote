import React from 'react'

class Quote extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  render() {
    const { quo, character, anime } = this.props

    const quoteStyle = {
      // Nothing yet
    }

    return (
      <div style={quoteStyle}>
        <p>"{quo}" - {character} @ {anime}</p>
      </div>  
    )
  }
}

export default Quote
