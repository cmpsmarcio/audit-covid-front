import React, { useState } from 'react'
import Bunner from './Bunner.jsx'
import { Button, Form, Input, Select, Label, InputNumber, InputDate } from './styled-components/index.js'

export default function QuestionForm () {

  const [firstDose, setFirstDose] = useState(null)
  const [secondDose, setSecondDose] = useState(null)
  const [birthDate, setBirthDate] = useState(null)

  function validateMaxLength(event, maxLength) {
    if (event.target.value.length >= maxLength) {
      event.preventDefault()
    }
  }

  return (
     <Form>
      <Bunner />
      <Label htmlFor="registration">Matrícula</Label>
      <InputNumber id="registration" type="text" placeholder="Digite sua matrícula" onBeforeInput={(e) => validateMaxLength(e, 6)}></InputNumber>
      <Label htmlFor="document">CPF</Label>
      <InputNumber id="document" placeholder="Digite seu CPF" onBeforeInput={(e) => validateMaxLength(e, 11)}></InputNumber>
      <Label htmlFor="name">Nome completo</Label>
      <Input id="name" type="text" placeholder="Digite seu nome completo" maxLength="130"></Input>
      <Label htmlFor="age">Data de nascimento</Label>
      <InputDate id="birth" dateFormat="dd/MM/yyyy" selected={birthDate} onChange={date => setBirthDate(date)}></InputDate>
      <Label htmlFor="alreadyInfected">Já teve Covid-19?</Label>
      <Select id="alreadyInfected">
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="symptomsSeverity">Como foram os sintomas?</Label>
      <Select id="symptomsSeverity">
        <option value="none">Não se aplica</option>
        <option value="light">Leves</option>
        <option value="severe">Graves</option>
      </Select>
      <Label htmlFor="symptoms">Quais foram sintomas:</Label>
      <Input id="symptoms" placeholder="febre, dor de cabeça..."></Input>
      <Label htmlFor="symptomsRemained">Os sintomas permaneceram após a recuperação?</Label>
      <Select id="symptomsRemained">
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="contactWithInfected">Teve contato com alguém infectado recentemente?</Label>
      <Select id="contactWithInfected">
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="aleadyVacinated">Já foi vacinado?</Label>
      <Select id="aleadyVacinated">
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="vaccinatedDate">Data da 1ª dose</Label>
      <InputDate id="vaccinatedDate" dateFormat="dd/MM/yyyy" selected={firstDose} onChange={date => setFirstDose(date)}></InputDate>
      <Label htmlFor="vaccinatedDate">Data da 2ª dose</Label>
      <InputDate id="vaccinatedDate" dateFormat="dd/MM/yyyy" selected={secondDose} onChange={date => setSecondDose(date)}></InputDate>
      <Button>Enviar</Button>
    </Form>
  )
}