import logo from "../assets/logo.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <Container>
      <Header>
        <Logo to="/">
          <img src={logo} />
          ShutterCamp
        </Logo>

        <AddPictureButton to="/add-image" className="add-picture">+</AddPictureButton>
      </Header>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid #ddd;
`
const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled(Link)`
  font-size: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: black;
  img {
    width: 80px;
    border-radius: 50%;
    margin-right: 10px;
  }
`
const AddPictureButton = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #3da7e4;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, .2);
  &:hover {
    filter: brightness(0.9);
  }
`
