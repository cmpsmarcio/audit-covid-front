import React, { useState } from 'react'
import Bunner from './Bunner.jsx'
import { Button, Form, Input, Select, Label, InputNumber, InputDate } from './styled-components/index.js'

export default function QuestionForm () {
  const [form, setForm] = useState({})

  function validateMaxLength(event, maxLength) {
    if (event.target.value.length >= maxLength) {
      event.preventDefault()
    }
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(form)
  }

  return (
     <Form onSubmit={e => handleSubmit(e)}>
      <Bunner />
      <Label htmlFor="registration">Matrícula</Label>
      <InputNumber id="registration" name="register" type="text" placeholder="Digite sua matrícula" onBeforeInput={(e) => validateMaxLength(e, 6)} onChange={e => handleChange(e)} required></InputNumber>
      <Label htmlFor="document">CPF</Label>
      <InputNumber id="document" name="document" placeholder="Digite seu CPF" onBeforeInput={(e) => validateMaxLength(e, 11)}  onChange={e => handleChange(e)} required></InputNumber>
      <Label htmlFor="name">Nome completo</Label>
      <Input id="name" name="name" type="text" placeholder="Digite seu nome completo" maxLength="130"  onChange={e => handleChange(e)} required></Input>
      <Label htmlFor="age">Data de nascimento</Label>
      <InputDate id="birth" name="birthday" onChange={e => handleChange(e)} required></InputDate>    
      <Label htmlFor="alreadyInfected">Já teve Covid-19?</Label>
      <Select id="alreadyInfected" name="alreadyInfected" onChange={e => handleChange(e)}>
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="symptomsSeverity">Como foram os sintomas?</Label>
      <Select id="symptomsSeverity" name="symptomsSeverity" onChange={e => handleChange(e)}>
        <option value="ASYMPTOMATIC">Não se aplica</option>
        <option value="LIGHT">Leves</option>
        <option value="SERIOUS">Graves</option>
      </Select>
      <Label htmlFor="symptoms">Quais foram sintomas:</Label>
      <Input id="symptoms" name="symptoms" placeholder="febre, dor de cabeça..." onChange={e => handleChange(e)} ></Input>
      <Label htmlFor="symptomsRemained">Os sintomas permaneceram após a recuperação?</Label>
      <Select id="symptomsRemained" name="symptomsRemained" onChange={e => handleChange(e)}>
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="contactWithInfected">Teve contato com alguém infectado recentemente?</Label>
      <Select id="contactWithInfected" name="contactWithInfectedRecently" onChange={e => handleChange(e)}>
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="aleadyVacinated">Já foi vacinado?</Label>
      <Select id="aleadyVacinated" name="alreadyVaccinated" onChange={e => handleChange(e)}>
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </Select>
      <Label htmlFor="vaccinatedDate">Data da 1ª dose</Label>
      <InputDate id="firstVaccinatedDate" name="firstVaccinatedDate" onChange={e => handleChange(e)} ></InputDate>
      <Label htmlFor="vaccinatedDate">Data da 2ª dose</Label>
      <InputDate id="secondVaccinatedDate" name="secondVaccinatedDate" onChange={e => handleChange(e)}></InputDate>
      <Button type="submit">Enviar</Button>
    </Form>
  )
}