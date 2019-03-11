import React from 'react'
import './App.css';
import Quote from './components/Quote'
import quoteService from './services/quote'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quo: '',
      character: '', 
      anime: ''
    }
  }

  componentWillMount() {
    quoteService.getRandom().then(quote =>
      this.setState({ 
        quo: quote.quo,
        character: quote.character,
        anime: quote.anime
       })
    )
  } 

  render() {
    const Quotes = () => (
      <div>
        <h2>Quote</h2>
        <Quote quo={this.state.quo} character={this.state.character} anime={this.state.anime} />
      </div>
    )

    return (
      <div className="App">
        <Quotes />
      </div>
    );
  }
}

export default App;
