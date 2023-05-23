import { Infotext ,Infotexth2,Infotexth3,CapaGamer,ImgGamer,BoxPrice,Checkoutbox,TextValor } from "./BodyTop.Style"
import Bf from '../../assets/CapaGames/bf.png'
import Cod from '../../assets/CapaGames/cod.png'
import Dark from '../../assets/CapaGames/Dark.png'
import God from '../../assets/CapaGames/God.png'
import Horizon from '../../assets/CapaGames/Horizon.png'
import Resident from '../../assets/CapaGames/resident.png'
import { Button } from "../Buybutton/Button"
import { useState } from "react"
import { useParams, useNavigat } from 'react-router-dom';


 export const Body = () => {
    const produtos = [
        {id: 1 , nome:'Battlefield' , price: 'R$10,00' , img: Bf},
        {id: 2 , nome:'Call of Duty' , price: 'R$10,00' , img: Cod},
        {id: 3 , nome:'Dark Souls' , price: 'R$10,00', img: Dark},
        {id: 4 , nome:'Resident Evil 3' , price: 'R$10,00', img: God},
        {id: 5 , nome:'God of War Ragnarok' , price: 'R$10,00', img: Horizon},
        {id: 6 , nome:'Horizon' , price: 'R$10,00', img: Resident},
        
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

