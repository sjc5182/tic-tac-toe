import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Wrapper, PlayerInputWrapper, PlayerInput, SubmitBtn } from '../../../styled-components/game/players/style'
const getPlayers = (props) => {
  const { value, players, handlePlayerName, handleSubmitPlayer  } = props
  const playerHeader = players.filter(p => p).join(' vs. ')
  const message = `${players.length === 1 ? 'Next, e' : 'E'}nter a name for player number ${players.length + 1}`
  return (
    <Container>
      <Wrapper>
      <h1>Let's Play Tic-Tac-Toe</h1>
      {
        playerHeader.length > 0
          ? (
            <h3>
              { playerHeader }
            </h3>
          )
          : null
      }
      {
        players.length < 2
          ? (
              <PlayerInputWrapper>
                <div>{message}</div>
                <PlayerInput 
                  type = 'text'
                  value = {value}
                  placeholder = 'Player Name'
                  onKeyPress = {(event) => {
                    if(event.key === 'Enter' && value){ handleSubmitPlayer() }
                  }}
                  onChange = {(event) => {handlePlayerName(event) } }
                />
                <SubmitBtn
                  type = 'submit'
                  value = "Submit"
                  onClick = {() => { 
                    if(value)
                      handleSubmitPlayer()
                  }}
                />
              </PlayerInputWrapper>
            ) 
          : (
            <Link to = '/Game'>
              <SubmitBtn
                type = 'submit'
                value = "Start the Game"
              />
            </Link>
          )
      }
      </Wrapper>
    </Container>


  )
}

export default getPlayers