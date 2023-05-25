import { Infotext, Infotexth2 } from "../BodyTopo/BodyTop.Style";
import { Header } from "../Header/Header";
import { CardImgCheck, TextP, ImageTamanho, CardDiv } from "./Check.Style";
import Bf from "../../assets/CapaGames/bf.png";
import Cod from "../../assets/CapaGames/cod.png";
import { Footer } from "../Footer/Footer";
import { ButtonFinaly } from "./ButtonFinaly";

export const Check = () => {
  const selectProduct = [
    { id: 1, nome: "Battlefield", price: "R$10,00", img: Bf },
    { id: 2, nome: "Call of Duty", price: "R$10,00", img: Cod }
  ];

  return (
    <>
      <Header />

      <Infotext>
        <Infotexth2>Checkout</Infotexth2>
      </Infotext>

      <TextP>Produtos Escolhidos</TextP>

      <CardDiv >
        {selectProduct.map((produto) => (
          <CardImgCheck key={produto.id}>
            <ImageTamanho src={produto.img} alt="" />
          </CardImgCheck>
        ))}
      </CardDiv>

      <TextP>Total Produtos: 2</TextP>
      <TextP>Total: R$20,00</TextP>

      <ButtonFinaly />
      <Footer />
    </>
  );
};
