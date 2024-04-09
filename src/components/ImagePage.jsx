import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ImagePage() {
  const [image, setImage] = useState(null)
  const { imageId } = useParams()

  useEffect(() => {
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images/${imageId}`)
      .then(res => setImage(res.data))
      .catch(err => console.log(err.response.data))
  }, [])

  if (image === null) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <Wrapper>
        <TopSection>
          <Image>
            <img src={image.url} />
          </Image>

          <Info>
            <Title>{image.name}</Title>
          </Info>
        </TopSection>
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
const TopSection = styled.div`
  display: flex;
  flex: 0;
`
const Image = styled.div`
  width: 800px;
  max-height: 600px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, .2);
`
const Info = styled.div`
  padding: 0 20px;
  width: 400px;
`
const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`
