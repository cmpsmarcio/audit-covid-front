import { Button } from './styled-components/index'
import { useHistory } from 'react-router-dom'

export default function MessagePage() {
  const history = useHistory();
  return (
    <div>
      <h1>Cadastrado com sucesso</h1>
      <Button onClick={() => history.push("/")}>Voltar</Button>
    </div>
  )

}