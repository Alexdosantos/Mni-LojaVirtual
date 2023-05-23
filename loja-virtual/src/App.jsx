import { Body } from "./components/BodyTopo/Body"
import { Header } from "./components/Header/Header"

import { Footer } from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"



const App = () => {
  return (
    <>
   
    <Header />
    <Body />  
    <Outlet />
    <Footer />
    
    
       
    </>
  )
}

export default App