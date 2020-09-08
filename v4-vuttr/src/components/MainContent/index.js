import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';
import TopBar from '../TopBar';

import { Wrapper, Header, Container } from './MainContentStyles';


const baseUrl = "http://localhost:3000/tools"

/* O componente de conteúdo principal faz uma requisição
GET e seta o estado via hooks para que possa
exibir as informações na tela. Ele é composto de um header com a barra de busca
e um Container onde estão os cards das ferramentas. */


export default () => {
    const [ tools, setTools ] = useState([]);
    const [ filteredList, setFilteredList ] = useState([])

    useEffect(() => {
      getTools();
    }, []);

    const getTools = () => {
      axios.get(baseUrl)
      .then(result => {
        setTools(result.data)
        setFilteredList(result.data)
      }).catch(err => {
        console.log(err)
      })
    }

    const toolsCards = filteredList && filteredList.map(tool => {
      return (
          <Card key={tool.id} tool={tool} />
      )
    });

    return (
        <Wrapper>
            <Header>
                <TopBar tools={tools} setFilteredList={setFilteredList}/>
            </Header>
            <Container>
                {toolsCards}
            </Container>
        </Wrapper>
    )
}