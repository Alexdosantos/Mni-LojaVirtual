import { Infotext ,Infotexth2,Infotexth3,CapaGamer,ImgGamer,BoxPrice,Checkoutbox,TextValor } from "./BodyTop.Style"
import ImgCapaGames from "../Carrinho/ImgCapaGames"
import { Button } from "../Buybutton/Button"
import { useState } from "react"




 export const Body = () => {
    const produtos = [
    { id: 1, name: "Battlefield", price: "R$10,00", img:ImgCapaGames.Bf },
    { id: 2, name: "Call of Duty", price: "R$10,00", img: ImgCapaGames.Cod },
    { id: 3, name: "Dark Souls", price: "R$10,00", img: ImgCapaGames.Dark },
    { id: 4, name: "God of War Ragnarok", price: "R$10,00", img:ImgCapaGames. God },
    { id: 5, name: "Horizon", price: "R$10,00", img: ImgCapaGames.Horizon },
    { id: 6, name: "Resindent Evil", price: "R$10,00", img: ImgCapaGames.Resident },
        
    ]

    const [selectProduct , setselectProduct] = useState([])
    

  

    const productSelect = (produtoId)=> {
      const selecionado = selectProduct.includes(produtoId)
      if(selecionado){
        setselectProduct(selectProduct.filter((id) => id !== produtoId))
        console.log(`Produto ${produtoId} desselecionado.`)
        
      } else {
        setselectProduct([...selectProduct, produtoId])
        console.log(`Produto ${produtoId} selecionado.`)
      }
    }

  


  return (
    <>
     <Infotext>
        <Infotexth2>Produtos</Infotexth2>
        <Infotexth3>{selectProduct.length}</Infotexth3>
     </Infotext>

     <div style={{ display: 'flex', flexWrap: 'wrap', margin:'0 auto', width:'650px' }}>
        {produtos.map((produto) => (
          <CapaGamer key={produto.id}>
            <ImgGamer src={produto.img} alt="" />
            <BoxPrice>
              <Checkoutbox 
              type="checkbox" 
              checked={selectProduct.includes(produto.id)}
              onChange ={() => productSelect(produto.id)}
              
              />
              
              <TextValor>Valor R$: {produto.price}</TextValor>
              
            </BoxPrice>
          </CapaGamer>
          
          
        ))}
        < Button state= {selectProduct} />
        
      </div>
    
    
   
    
    </>
  )
}
