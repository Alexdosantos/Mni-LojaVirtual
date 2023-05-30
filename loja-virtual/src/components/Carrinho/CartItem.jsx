import React from "react";
import { CardProduct, ImgCarrinho, SubTitle, Title } from "./Body.Style";
import { BtnQuantidade, CardBtnQuant } from "./Buttons.styles";

import { ButtonDelete } from "./ButtonDelete";



const CartItem = ({ produto, quantidade, Increase, Decrease, Delete }) => {
  

  return (
    <CardProduct key={produto.id}>
      <div>
        <ImgCarrinho src={produto.img} alt="" />
      </div>
      <div>
        <Title>{produto.name}</Title>
        <SubTitle>Valor: {produto.price}</SubTitle>
        <SubTitle>Quantidade: {quantidade}</SubTitle>

        <CardBtnQuant>
          <BtnQuantidade onClick={Increase}>+</BtnQuantidade>
          <BtnQuantidade onClick={Decrease}>-</BtnQuantidade>
        </CardBtnQuant>
        <ButtonDelete onClick={Delete} />
      </div>
    </CardProduct>
  );
};

export default CartItem;
