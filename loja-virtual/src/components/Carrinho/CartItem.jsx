import React from "react";
import { CardProduct, ImgCarrinho, SubTitle, Title } from "./Body.Style";
import { BtnQuantidade, CardBtnQuant } from "./Buttons.styles";

const CartItem = ({ produto, quantidade, Increase, Decrease }) => {
  return (
    <CardProduct key={produto.id}>
      <div>
        <ImgCarrinho src={produto.img} alt="" />
      </div>
      <div>
        <Title>{produto.nome}</Title>

        <SubTitle>Valor: {produto.price}</SubTitle>
        <SubTitle>Quantidade: {quantidade}</SubTitle>

        <CardBtnQuant>
          <BtnQuantidade onClick={Increase}>+</BtnQuantidade>
          <BtnQuantidade onClick={Decrease}>-</BtnQuantidade>
        </CardBtnQuant>
      </div>
    </CardProduct>
  );
};

export default CartItem;
