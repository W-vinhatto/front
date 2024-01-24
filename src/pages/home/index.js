import React, { useState, useRef } from "react";
import axios from "axios";


import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'



import {
  Conteiner,
  Img,
  ConteinerItens,
  H1,
  Inputlabel,
  Input,
  Button,
} from "./style"


function App() {

  const [users, setUsersCadastrados] = useState([]);
  // const [ name, setName ] = useState();  // estado criadopara coletar valor digitado no input
  // const [ age, setAge ] = useState(); 

  const inputname = useRef()
  const inputage = useRef()


  async function cadastar() {
    //setUsersCadastrados( [ ...users, {id: Math.random(), name: inputname.current.value, age: inputage.current.value}])
    //essa forma comentada é para inserir um item de usuarios dentro do array - e a outra forma -e manda isso para back end

    const {data: usersRetunBackEnd } = await axios.post("http://localhost:3001/users", { name: inputname.current.value, age: inputage.current.value})
   
     setUsersCadastrados([...users, usersRetunBackEnd]);

  }

  return (
    <Conteiner>
      <Img alt="logo-imagen" src={People} />

      <ConteinerItens>
        <H1>Olá</H1>

        <Inputlabel>Nome</Inputlabel>
        <Input ref={inputname} placeholder="nome" ></Input>

        <Inputlabel>Idade</Inputlabel>
        <Input ref={inputage} placeholder="idade"></Input>

        <Button onClick={cadastar} >cadastrar <img alt="seta" src={Arrow} /></Button>
      </ConteinerItens>
    </Conteiner>
  )
}

export default App