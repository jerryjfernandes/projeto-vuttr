import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

import { Container } from './HomeStyles';

/* Um componente home bem simples que recebe o cabeçalho 
e o conteúdo principal da aplicação. */


export default () => {
    return (
        <Container>
            <Header />
            <MainContent />
        </Container>
    )
}