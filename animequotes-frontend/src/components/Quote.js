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

    return (
      <div>
        <div className="quoteStyle">
          <div className="quoteStyleText">
            <p>“{quo}”</p>
          </div> 
        </div> 
        <p className="align-text-bottom bottom-character"><strong>{character}</strong> - {anime}</p> 
      </div>
    )
  }
}

export default Quote
