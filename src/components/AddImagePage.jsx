import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AddImagePage() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const navigate = useNavigate()

  function submitForm(event) {
    event.preventDefault()
    const body = { name, description, url }

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images", body)
      .then(res => navigate("/"))
      .catch(err => console.log(err.response.data))
  }

  return (
    <div>
      <Wrapper>
        <form onSubmit={submitForm}>
          <InputGroup>
            <Title htmlFor="name">Nome</Title>
            <input
              id="name"
              required
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Title htmlFor="description">Descrição</Title>
            <input
              id="description"
              required
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Title htmlFor="url">URL da Imagem</Title>
            <input
              id="url"
              required
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </InputGroup>

          <SaveButton type="submit">Adicionar Imagem</SaveButton>
        </form>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`
const SaveButton = styled.button`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 5px;
  background-color: #3da7e4;
  color: white;
  cursor: pointer;
  font-size: 20px;;
  &:hover {
    filter: brightness(0.9);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  input {
    padding: 8px;
    border: 1px solid #bbb;
    border-radius: 5px;
  }
`
const Title = styled.label`
  margin-bottom: 5px;
  font-size: 22px;
`
