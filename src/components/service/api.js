import FormtDTO from '../helper/FormDTO'

const baseUrl = 'http://localhost:8080'

const getFormData = async () => {
  try {
    return await fetch(`${baseUrl}/v1/person`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      return data
    })
  }
  catch {
    alert('Erro buscar os registros')
  }
}

const postFormData = async (formData) => {
  let data = new FormtDTO().transformData(formData)

  try {
    await fetch(`${baseUrl}/v1/person`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then()
    return true
  }
  catch {
    alert('Erro ao inserir os registro')
    return false
  }
}

export {
  postFormData,
  getFormData
}