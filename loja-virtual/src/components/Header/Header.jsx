import ImgLogo from '../../assets/Logo.svg'
import { CardBox ,CardHead , TextCard,CardLogo} from './Styles'




export const Header = () => {
  return (
    <CardBox >
        <CardHead>
          <CardLogo><img src={ImgLogo} alt="" /></CardLogo>
          
          <TextCard>Loja Virtual</TextCard>
          
        </CardHead>
        

    </CardBox >
  )
}

