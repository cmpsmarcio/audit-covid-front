import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const InputDate = styled(DatePicker)`
  height: 37px;
  font-size: 13px;
  margin: 8px 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-left: 3px solid #ED145B;
  display: block;
`

export default InputDate