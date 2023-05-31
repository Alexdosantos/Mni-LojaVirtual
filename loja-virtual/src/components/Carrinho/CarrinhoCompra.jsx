import React, { useState } from "react";
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
  const { state } = location;

  const produtos = [
    { id: 1, name: "Battlefield", price: "R$10,00", img: ImgCapaGames.Bf },
    { id: 2, name: "Call of Duty", price: "R$10,00", img: ImgCapaGames.Cod },
    { id: 3, name: "Dark Souls", price: "R$10,00", img: ImgCapaGames.Dark },
    { id: 4, name: "God of War Ragnarok", price: "R$10,00", img: ImgCapaGames.God },
    { id: 5, name: "Horizon", price: "R$10,00", img: ImgCapaGames.Horizon },
    { id: 6, name: "Resindent Evil", price: "R$10,00", img: ImgCapaGames.Resident },
  ];

  const initialCartItems = state?.cart || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [quantidades, setQuantidades] = useState(
    initialCartItems.reduce((acc, itemId) => {
      acc[itemId] = 1;
      return acc;
    }, {})
  );
  const [total, setTotal] = useState(initialCartItems.length * 10);

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item !== itemId);
    const updatedQuantidades = { ...quantidades };
    delete updatedQuantidades[itemId];
    const updatedTotal = total - 10;

    setCartItems(updatedCartItems);
    setQuantidades(updatedQuantidades);
    setTotal(updatedTotal);
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
              Increase={() => setQuantidades((prevQuantidades) => ({
                ...prevQuantidades,
                [itemId]: prevQuantidades[itemId] + 1,
              }))}
              Decrease={() => {
                if (quantidades[itemId] > 1) {
                  setQuantidades((prevQuantidades) => ({
                    ...prevQuantidades,
                    [itemId]: prevQuantidades[itemId] - 1,
                  }));
                  setTotal((prevTotal) => prevTotal - 10);
                }
              }}
              Delete={() => handleDelete(itemId)}
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
