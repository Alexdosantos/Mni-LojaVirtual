import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Infotext, Infotexth2, Infotexth3 } from "../BodyTopo/BodyTop.Style";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Total } from "./Body.Style";
import { ButtonDados } from "./Buttons";
import CartItem from "./CartItem";

import ImgCapaGames from "./ImgCapaGames";

export const CarrinhoCompra = () => {
  const location = useLocation();
  console.log(location);
  const { state } = location;

  const produtos = [
    { id: 1, nome: "Battlefield", price: "R$10,00", img:ImgCapaGames.Bf },
    { id: 2, nome: "Call of Duty", price: "R$10,00", img: ImgCapaGames.Cod },
    { id: 3, nome: "Dark Souls", price: "R$10,00", img: ImgCapaGames.Dark },
    { id: 4, nome: "God of War Ragnarok", price: "R$10,00", img:ImgCapaGames.God },
    { id: 5, nome: "Horizon", price: "R$10,00", img: ImgCapaGames.Horizon },
    { id: 6, nome: "Resindent Evil", price: "R$10,00", img: ImgCapaGames.Resident },
  ];

  const cartItems = state?.cart || [];

  const [quantidades, setQuantidades] = useState(
    cartItems.reduce((acc, itemId) => {
      acc[itemId] = 1; // Inicializa a quantidade de cada item como 1
      return acc;
    }, {})
  );

  const [total, setTotal] = useState(cartItems.length * 10);

  const Increase = (itemId) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [itemId]: prevQuantidades[itemId] + 1
    }));

    setTotal((prevTotal) => prevTotal + 10);
  };

  const Decrease = (itemId) => {
    if (quantidades[itemId] > 1) {
      setQuantidades((prevQuantidades) => ({
        ...prevQuantidades,
        [itemId]: prevQuantidades[itemId] - 1
      }));

      setTotal((prevTotal) => prevTotal - 10);
    }
  };

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
            <CartItem
              key={produto.id}
              produto={produto}
              quantidade={quantidades[itemId]}
              Increase={() => Increase(itemId)}
              Decrease={() => Decrease(itemId)}
            />
          );
        }
        return null;
      })}
      <div>
        <Total>Total: R${total},00</Total>
      </div>
      <ButtonDados />
      <Footer />
    </>
  );
};
