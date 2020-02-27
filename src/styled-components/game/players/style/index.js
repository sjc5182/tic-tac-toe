import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vmin;
  display: flex;
  align-items: center;
  justify-content: center
`
export const Wrapper = styled.div`
  width: calc(100vw - 9rem);
  height: auto;
  text-align: center;
`

export const PlayerInputWrapper = styled.div`
  width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const PlayerInput = styled.input`
  font-size: 1.5rem;
  line-height: 1.2;
  font-family: sans-serif;
  font-weight: 300;
  appearance: none;
  border: 0.2rem solid #282c34;
  background: #FFFFFF;
  &:focus {
    outline: none;
    border-color: #CFD0D2;
  }
`

export const SubmitBtn = styled.input`
  font-size: .75rem;
  line-height: 1;
  font-family: sans-serif;
  font-weight: 600;
  text-align: center;
  color: #000000;
  padding: 0.5em 1em;
  line-height: 1;
  cursor: pointer;
  border: 0.3rem solid #FFFFFF;
  &:focus {
    outline: none;
  }
`