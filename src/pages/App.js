import React from "react";
import People from '../assets/people.svg'
import Arrow from '../assets/arrow.svg'
import Trash from '../assets/trash.png'



import {
  Conteiner,
  Img,
  ConteinerItens,
  H1,
  Inputlabel,
  Input,
  Button,
  UsersCriados,
  ButtonTrash
} from "./style"

const users = [
  {id: Math.random(), name:"wellington", age:32},
  {id: Math.random(), name:"wellington", age:32},
  {id: Math.random(), name:"wellington", age:32},
];


function App() {


  return (
    <Conteiner>
      <Img alt="logo-imagen" src={People}/>

      <ConteinerItens>
        <H1>Olá</H1>

        <Inputlabel>Nome</Inputlabel>
        <Input  placeholder="nome" ></Input>

        <Inputlabel>Idade</Inputlabel>
        <Input  placeholder="idade"></Input>

        <Button>cadastrar <img alt="seta" src={Arrow}/></Button>

        <ul>
          {users.map((umporum) => (
            <UsersCriados key={umporum.id}>
              <p>{umporum.name}</p>  <p>{umporum.age}</p>
              <ButtonTrash><img alt="lixeira" src={Trash}/></ButtonTrash>
            </UsersCriados>
          ))}
        </ul>
      </ConteinerItens>
    </Conteiner>
  )
}

export default App