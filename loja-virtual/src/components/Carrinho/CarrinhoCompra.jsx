import { ButtonDados } from "./Buttons"
import { useLocation } from "react-router-dom"
import { Infotext } from "../BodyTopo/BodyTop.Style"
import { Infotexth3 } from "../BodyTopo/BodyTop.Style"
import { Infotexth2 } from "../BodyTopo/BodyTop.Style"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

import Bf from '../../assets/CapaGames/bf.png'
import Cod from '../../assets/CapaGames/cod.png'
import { CardProduct } from "./Body.Style"



export const CarrinhoCompra = () => {
  const selectProduct = [
    {id: 1 , nome:'Battlefield' , price: 'R$10,00' , img: Bf},
    {id: 2 , nome:'Call of Duty' , price: 'R$10,00' , img: Cod},
    
    
]
  const location = useLocation()
  console.log(location)
  return (
    <>
   
    <Header/>
    <Infotext>
        <Infotexth2>Carrinho</Infotexth2>
        <Infotexth3>{2}</Infotexth3>
     </Infotext>
    {selectProduct.map((produtos) => (

        <CardProduct>
            <div>
              <img src={produtos.img} alt="" />
            </div>

            <div>
                <h3>Battlefield</h3>
                <p>Valor: R$10,00</p>
                <p>Quantidade:1</p>
            
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
            
                   

        </CardProduct>

 ))}

          <div>
            <p>Total:R$20,00</p>
          </div>
          <div>
            <ButtonDados />
          </div>
          <Footer />
      
    
    
    
    
    </>
    
    
  )
}
