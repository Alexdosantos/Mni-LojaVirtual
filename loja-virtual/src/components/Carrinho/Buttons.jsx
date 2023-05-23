import { Link } from "react-router-dom"
import { BntDados, BtnFinalizar, CardFinalizar } from "./Buttons.styles"



export const ButtonDados = () => {
  
    return (
      <>  
        <CardFinalizar>
            <Link to={'/checkout'}>
                <BtnFinalizar>Finalizar Compra </BtnFinalizar>
            </Link>
            
            
            <BntDados>Carregar dados selecionados </BntDados>
        </CardFinalizar>
      
      
      </>
    )
  }
  