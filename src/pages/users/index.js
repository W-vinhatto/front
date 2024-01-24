import React, { useState, useEffect } from "react";
import axios from "axios";


import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.png'



import {
  Conteiner,
  Img,
  ConteinerItens,
  H1,
  Button,
  UsersCriados,
  ButtonTrash
} from "./style"




function App() {

  const [users, setUsersCadastrados] = useState([]);
  // const [ name, setName ] = useState();  // estado criadopara coletar valor digitado no input
  // const [ age, setAge ] = useState(); 

 
  useEffect(() => {
    async function asyncFunction() {
      const { data: retur } = await axios.get("http://localhost:3001/users");

      setUsersCadastrados(retur); // esse é um efeito colateral q inicia junto a aplicação ou quando o estado listado no final dela for alterado
    }
    asyncFunction()// se precisar coloca uma função asincrona no useefect cria se uma função dentro e chama em seguida
  },[users])


  async function delet(iddelet) {
    await axios.delete(`http://localhost:3001/users/${iddelet}`)

    const userDeletado = users.filter(usuario => usuario.id !== iddelet)
    setUsersCadastrados(userDeletado)
    console.log(iddelet)
  }


  return (
    <Conteiner>
      <Img alt="logo-imagen" src={Avatar} />

      <ConteinerItens>
        <H1>usuários</H1>


        <ul>
          {users.map((umporum) => (
            <UsersCriados key={umporum.id}>
              <p>{umporum.name}</p>  <p>{umporum.age}</p>

              <ButtonTrash onClick={() => delet(umporum.id)}>
                <img alt="lixeira" src={Trash} />
              </ButtonTrash>
            </UsersCriados>
          ))}
        </ul>

        <Button > <img alt="seta" src={Arrow} /> voltar </Button>
      </ConteinerItens>
    </Conteiner>
  )
}

export default App