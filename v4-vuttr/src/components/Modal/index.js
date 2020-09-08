import React from 'react';
import { Wrapper, Container, Close, Content } from './ModalStyles';

export default ({id = "modal", children, onClose = () => {}}) => {

    const handleOutsideClick = (event) => {
        if(event.target.id === id) onClose();
    }

    return (
        <Wrapper id={id} onClick={handleOutsideClick}>
            <Container >
                <Close onClick={onClose} />
                <Content>{children}</Content>
            </Container>
        </Wrapper>
    )
}