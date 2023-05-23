import { ButtonDados } from "./Buttons"
import { useLocation } from "react-router-dom"
import { Infotext } from "../BodyTopo/BodyTop.Style"
import { Infotexth3 } from "../BodyTopo/BodyTop.Style"
import { Infotexth2 } from "../BodyTopo/BodyTop.Style"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
export const CarrinhoCompra = () => {
  const location = useLocation()
  console.log(location)
  return (
    <>
   
    <Header/>
    <Infotext>
        <Infotexth2>Carrinho</Infotexth2>
        <Infotexth3>{2}</Infotexth3>
     </Infotext>

      <div>
        <div>
          <img src="" alt="" />
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

        <div>
          <p>Total:R$20,00</p>
        </div>
        <div>
          <ButtonDados />
        </div>
        <Footer />

      </div>

 
    
    
    
    
    </>
    
    
  )
}

