import { useLocation } from "react-router-dom";
import { Infotext, Infotexth2, Infotexth3 } from "../BodyTopo/BodyTop.Style";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { CardProduct, ImgCarrinho, SubTitle, Title, Total } from "./Body.Style";
import { BtnQuantidade, CardBtnQuant } from "./Buttons.styles";
import { ButtonDados } from "./Buttons"


import Bf from "../../assets/CapaGames/bf.png";
import Cod from "../../assets/CapaGames/cod.png";
import Dark from "../../assets/CapaGames/Dark.png";
import God from "../../assets/CapaGames/God.png";
import Horizon from "../../assets/CapaGames/Horizon.png";
import Resident from "../../assets/CapaGames/resident.png";

export const CarrinhoCompra = () => {
  const location = useLocation();
  console.log(location);
  const {state } = location;

  const produtos = [
    { id: 1, nome: "Battlefield", price: "R$10,00", img: Bf },
    { id: 2, nome: "Call of Duty", price: "R$10,00", img: Cod },
    { id: 3, nome: "Dark Souls", price: "R$10,00", img: Dark },
    { id: 4, nome: "God of War Ragnarok", price: "R$10,00", img: God },
    { id: 5, nome: "Horizon", price: "R$10,00", img: Horizon },
    { id: 6, nome: "Resindent Evil", price: "R$10,00", img: Resident },
  ];

  const cartItems = state?.cart || [];

  return (
    <>
      <Header />
      <Infotext>
        <Infotexth2>Carrinho</Infotexth2>
        <Infotexth3>{cartItems.length}</Infotexth3>
      </Infotext>
      {cartItems.map((itemId) => {
        const produto = produtos.find((p) => p.id === itemId);
        if (produto) {
          return (
            <CardProduct key={produto.id}>
              <div>
                <ImgCarrinho src={produto.img} alt="" />
              </div>
              <div>
                <Title>{produto.nome}</Title>
                
                <SubTitle>Valor: {produto.price}</SubTitle>
                <SubTitle>Quantidade: 1</SubTitle>
                <CardBtnQuant>
                  <BtnQuantidade>+</BtnQuantidade>
                  <BtnQuantidade>-</BtnQuantidade>
                </CardBtnQuant>
              </div>
            </CardProduct>
          );
        }
        return null;
      })}
      <div>
        <Total>Total: R${cartItems.length * 10},00</Total>
      </div>
      < ButtonDados />
      <Footer />
    </>
  );
};
