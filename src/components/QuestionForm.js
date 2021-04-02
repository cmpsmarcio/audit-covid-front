import React from 'react'
import Bunner from './Bunner.js'
import { Button, Form, Input, Select, Label, InputNumber } from './styled-components/index.js'

export default function QuestionForm () {
  function validateMaxLength(event, maxLength) {
    if (event.target.value.length >= maxLength) {
      event.preventDefault()
    }
  }

  return (
     <Form>
      <Bunner />
      <Label htmlFor="document">CPF</Label>
      <InputNumber id="document" placeholder="Digite seu CPF" onBeforeInput={(e) => validateMaxLength(e, 11)}></InputNumber>
      <Label htmlFor="registration">Matrícula</Label>
      <InputNumber id="registration" type="text" placeholder="Digite sua matrícula" onBeforeInput={(e) => validateMaxLength(e, 6)}></InputNumber>
      <Label htmlFor="name">Nome</Label>
      <Input id="name" type="text" placeholder="Digite seu nome completo" maxLength="130"></Input>
      <Label htmlFor="age">Idade</Label>
      <InputNumber id="age" type="text" placeholder="Digite sua idade" onBeforeInput={(e) => validateMaxLength(e, 3)}></InputNumber>
      <Label htmlFor="alreadyInfected">Já teve Covid-19?</Label>
      <Select id="alreadyInfected">
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="symptomsRemained">Os sintomas permaneceram após a recuperação?</Label>
      <Select id="symptomsRemained">
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="symptoms">Quais sintomas:</Label>
      <Input id="symptoms" placeholder="frebre, dor de cabeça..."></Input>
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
      <Button>Enviar</Button>
    </Form>
  )
}