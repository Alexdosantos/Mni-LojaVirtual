import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const CardFinalizar = styled.div `
    display: flex;
    gap: 95px;
    justify-content: space-between;
    margin: 0 auto;
    width: 595px;
    height: 86px;
    left: 0px;
    top: 0px;


`

export const BtnFinalizar = styled.button`
    box-sizing: border-box; 
    width: 211px;
    height: 43px; 
    margin: 0 auto;   

    padding:5px 0px 0px 1px;

    background: #6950A1;
    border: 1px solid #6950A1;
    border-radius: 9px;
    color: #ffffff;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */


    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
    &:hover {
    background: #693ec4;
    transition: .3s;
    }
    


`
export const BntDados = styled.button`

    box-sizing: border-box; 
    width: 211px;
    height: 43px; 
    margin: 0 auto;   

    padding:1px 0px 0px 1px;

    background: #6950A1;
    border: 1px solid #6950A1;
    border-radius: 9px;
    color: #ffffff;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 30px;
    /* identical to box height */


    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;

    &:hover {
    background: #693ec4;
    transition: .3s;
    
    
  }


`
export const CardBtnQuant = styled.div`
    display: flex;
    gap: 5px;

`
export const BtnQuantidade = styled.div`
    box-sizing: border-box;
 
    width: 49px;
    height: 44px;
    padding: 0px 13px;
    
    color: #FFFFFF;
    background: #6950A1;
    border: 1px solid #6950A1;
    border-radius: 9px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    cursor: pointer;
    


    


`