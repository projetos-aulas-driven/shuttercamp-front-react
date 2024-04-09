import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images");

    promise.then((response) => setImages(response.data));

    promise.catch((error) => console.log(error.response.data));
  }, []);

  if (images === null) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <Wrapper>
        <Images>
          {images.map(img => (
            <Image key={img.id} to={`/image/${img.id}`}>
              <img src={img.url} />
              <div>
                <div>{img.name}</div>
              </div>
            </Image>
          ))}
        </Images>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Images = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  a {
    width: 100%;
    max-width: 380px;
  }
`
const Image = styled(Link)`
  width: 100%;
  max-width: 380px;
  height: 216px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, .2);
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover{
    opacity: 1;
  }
  div {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, .2) 40%);
    padding: 20px;
    color: white;
    display: flex;
    align-items: flex-end;
    div {
      margin-bottom: -10px;
      text-shadow: 1px 1px 4px 3px rgba(0, 0, 0, 1);
    }
    &:hover{
      opacity: 1;
    }
  }
`
