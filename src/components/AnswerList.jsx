import { UserList, Label } from './styled-components/index.js'
import styled from 'styled-components'

const H1 = styled.h1`
  text-align: center;
  color: #4a4c4d;
`

export default function AnswerList() {
  return (
    <>
      <H1>Questionário - Lista</H1>
      <UserList>
        <img src="https://cdn2.iconfinder.com/data/icons/shopping-elements-6/64/27-Account_and_Personal-128.png" alt="Foto principal" />
        <Label>Fulano de tal</Label>
        <Label>Resultado: liberado</Label>
      </UserList>
      <UserList>
        <img src="https://cdn2.iconfinder.com/data/icons/shopping-elements-6/64/27-Account_and_Personal-128.png" alt="Foto principal" />
        <Label>Fulano de tal</Label>
        <Label>Resultado: liberado</Label>
      </UserList>
    </>
  )
}