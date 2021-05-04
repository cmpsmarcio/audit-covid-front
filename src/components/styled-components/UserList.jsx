import styled from 'styled-components'

const UserList = styled.div`
  margin: 0 auto;
  margin-bottom: 0.8rem;
  padding: 5px;
  border-radius: 10px;
  background-color: #E2E2E2;
  display: block;
  width: 60%;
  height: 4rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 10px;
    float: left;
  }

  Label:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 5px;
    color: #ED145B;
  }

  Label {
    font-family: Comfortaa, Arial;
    font-size: 0.885rem;
    color: #3f3c3c;
  }
`

export default UserList