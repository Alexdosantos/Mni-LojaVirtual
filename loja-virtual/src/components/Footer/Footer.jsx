import { BoxPayment,CardPayments,TextPayment } from './Footer.style'
import Visa from '../../assets/Pagamento/visa.svg'
import Mastercard from '../../assets/Pagamento/mastercard.svg'
import Boleto from '../../assets/Pagamento/boleto.svg'
import Hipercard from '../../assets/Pagamento/hipercard.svg'

export const Footer = () => {
  return (
    <>
      <CardPayments>
        <TextPayment>Meios de pagamentos</TextPayment>
        <BoxPayment>
          
            <img src={Visa} alt="" />
            <img src={Mastercard} alt="" />
            <img src={Boleto} alt="" />
            <img src={Hipercard} alt="" />

        </BoxPayment>



      </CardPayments>
    
    
    </>
  )
}

