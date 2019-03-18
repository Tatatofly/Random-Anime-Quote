import React from 'react'
import './App.css';
import Quote from './components/Quote'
import quoteService from './services/quote'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quo: 'No matter where you go, everyone\'s connected.',
      character: 'Lain Iwakura', 
      anime: 'Serial Experiments Lain'
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
    const getNewQuote = (event) => {
      event.preventDefault();
      this.setState({ quo: "..." })
      quoteService.getRandom().then(quote =>
        this.setState({ 
          quo: quote.quo,
          character: quote.character,
          anime: quote.anime
         })
      )
    }

    const Quotes = () => (
      <div className="raq-header">
        <h1>Random Anime Quote</h1>
        <Quote quo={this.state.quo} character={this.state.character} anime={this.state.anime} />
        <button onClick={getNewQuote} className="btn btn-outline-success raq-button">Get another!</button>
      </div>
    )

    return (
      <div className="container">
        <Quotes />
        <div className="rightCornerLinqs">
          <a href="https://github.com/Tatatofly/Random-Anime-Quote" target="blank">Tatatofly</a> 👺
      </div>
      </div>
    );
  }
}

export default App;
