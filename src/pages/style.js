import styled from "styled-components";
import Bacgroud from "../assets/bacgroud1.svg"



export const Conteiner = styled.div`
    background: url("${Bacgroud}");
    width: 100%;
    height: 100vh;
    background-size: cover ;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`
export const Img = styled.img`
    margin-top: 30px;
`

export const ConteinerItens = styled.div`
    width: 414px;
    height: 645px;
    top: 251px;
    border-radius: 60px 60px 0 0;
    padding: 50px 36px;

    background: 
        linear-gradient(157.44deg, 
            rgba(255, 255, 255, 0.6) 0.84%, 
            rgba(255, 255, 255, 0.6) 0.85%, 
            rgba(255, 255, 255, 0.15) 100%
        );
    
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    
    font-size: 34px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    margin-bottom: 80px;
    `

export const Inputlabel = styled.p`

    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: #EEEEEE;
    padding-left: 25px;
`

export const Input = styled.input`
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
            border: none;
    width: 342px;
    height: 58px;
    padding: 15px 20px 15px 25px;
    border-radius: 14px;
    margin: 5px 0 30px;

    font-size: 24px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;

`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: #000000CC;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    margin-top: 40px;

    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;

    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    color: #ffffff;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.7;
    }
`


export const UsersCriados = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
            border: none;
    width: 342px;
    height: 58px;
    padding: 15px 20px 15px 25px;
    border-radius: 14px;
    margin-top: 20px;

    font-size: 24px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;

`;

export const ButtonTrash = styled.button`
    background: none;
    border: none;
`
