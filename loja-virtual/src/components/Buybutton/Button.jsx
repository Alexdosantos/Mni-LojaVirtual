
import { BuyButton,CardButton,StyledLink} from "./Button.style"




export const Button = ({state}) => {
  
  return (
    <>  
    <CardButton>
      <StyledLink to= '/carrinho' state={{cart:state}} >
        <BuyButton >Ir para o carrinho</BuyButton >
      </StyledLink>
      
      

    </CardButton>
        
    
    
    </>
  )
}

