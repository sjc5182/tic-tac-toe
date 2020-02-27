import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GetPlayers from './players'
import GetNewBoard from './board'
import { Container } from '../../styled-components/game'


class Game extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      players: [],
      value: '',
      squares: Array(9).fill(null),
      move: '',
      winner: ''
    }
    this.baseState = this.state 
  }

  handlePlayerName = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmitPlayer = () => {
    this.setState({
      players: [...this.state.players, this.state.value],
      value: ''
    })
  }

  handleBoardReset = () => {
    this.setState(this.baseState)
  }

  handleWinner = () => {
    const { squares, players } = this.state
    let calculateWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    calculateWinner.forEach(subArr => {
      const [a, b, c] = subArr
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        this.setState({
          winner: squares[a] === 'X' ? players[0] : players[1]
        })
      }
    })
  }

  // handleUserClick takes in index to update corresponding array element, and function function check if square has been clicked or not
  handleUserClick = (index) => {
    let squares = this.state.squares.slice()
    let move = this.state.move === 'X' ? 'O': 'X'
    // Check if element is null which is not clicked yet
    if(!squares[index] && !this.state.winner){
      squares[index] = move
      this.setState({
        move,
        squares
      }, () => { // setState second parameter takes callback function, therefore, we can immediately compute for the winner after each move
        this.handleWinner()
      })
    } 
  }

  render(){
    const { value, players } = this.state
    return(
        <Container>
          <Router>
            <Route exact path='/' 
              render={() => <GetPlayers  
                players = {players} 
                value = {value}
                handlePlayerName = {this.handlePlayerName}
                handleSubmitPlayer = {this.handleSubmitPlayer}
                /> }
            />
            <Route exact path='/Game' 
              render = {() => 
                <GetNewBoard 
                  {...this.state}
                  handleUserClick = {this.handleUserClick}
                  handleBoardReset = {this.handleBoardReset}
                />
              }
            />
          </Router>
        </Container>
    )
  }
    
}

export default Game