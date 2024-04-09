import styled from "styled-components"

export default function ExplorePage() {
  return (
    <div>
      <Wrapper>
        <Images>

          <Image>
            <img src="https://catracalivre.com.br/wp-content/uploads/2018/07/mirante-do-mangabeiras-suzana-montandon-pbh.jpg" />
            <div>
              <div>Belo Horizonte, a melhor cidade do Brasil</div>
            </div>
          </Image>

          <Image>
            <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhemlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            <div>
              <div>Rio de Janeiro, a segunda melhor cidade do Brasil</div>
            </div>
          </Image>

          <Image>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn19Sw5BGI0bAdzoGJfPB51fs2m10N-IQ0vgdTA8QtA&s" />
            <div>
              <div>Vila da Folha</div>
            </div>
          </Image>

          <Image>
            <img src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" />
            <div>
              <div>Catioro que não podia faltar</div>
            </div>
          </Image>

          <Image>
            <img src="https://c4.wallpaperflare.com/wallpaper/37/269/205/grass-cat-kitty-garden-wallpaper-preview.jpg" />
            <div>
              <div>Claro que ia ter gatíneo também</div>
            </div>
          </Image>

          <Image>
            <img src="https://cdn.checkinweb.com.br/img/161/slides/xl_pousada-e-em-cumuruxatiba-bahia-5.png" />
            <div>
              <div>Cumuruxatiba, a melhor praia do Brasil</div>
            </div>
          </Image>

          <Image>
            <img src="https://feriasnordeste.com.br/fotos/blog/2019/junho/caraiva-praia.jpg" />
            <div>
              <div>Céu estrelado na praia</div>
            </div>
          </Image>

          <Image>
            <img src="https://i.imgur.com/Lwtsg7K.jpg" />
            <div>
              <div>Girassol com fundo desfocado</div>
            </div>
          </Image>

          <Image>
            <img src="https://i.imgur.com/kNX7IIf.jpeg" />
            <div>
              <div>Bebezinhos super fofinhos</div>
            </div>
          </Image>

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
const Image = styled.div`
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
