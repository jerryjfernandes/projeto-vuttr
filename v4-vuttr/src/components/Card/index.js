import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal';

import { 
    Container, 
    Header,
    RemoveButton, 
    Main, 
    DeleteTool 
} from './CardStyles';


const baseUrl = "http://localhost:3000/tools";

/* O componente card guarda as informações de cada ferramenta.
Também guarda a funcionalidade de apagar uma ferramenta da lista
via requisição DELETE. */

export default ({ tool }) => {
    const [modalView, setModalView] = useState(false);
    const tags = tool.tags;

    const visibilityOfModal = () => {
        modalView === false ? setModalView(true) : setModalView(false);
    }

    const deleteTool = (id) => {
        axios.delete(`${baseUrl}/${id}`)
        .then(() => {
            alert("Ferramenta deletada com sucesso!")
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
    }

    const tagItems = tool && tags.map((item, index) => {
        return (
            <span key={index}><strong>#{item} </strong></span>
        )
    });

    return (
        <Container>
            <Header>
                <a href={tool.link}>{tool.title}</a>
                <RemoveButton onClick={() => visibilityOfModal()}>Remove</RemoveButton>
                {modalView && (
                    <Modal onClose={() => visibilityOfModal()}>
                        <DeleteTool>
                            <h3>Remove Tool</h3>
                            <p>Are you sure you want to remove {tool.title}?</p>
                            <button onClick={() => visibilityOfModal()}>Cancel</button>
                            <button onClick={() => deleteTool(tool.id)}>Yes, remove</button>
                        </DeleteTool>
                    </Modal>
                )}
            </Header>
            <Main>
                <p>{tool.description}</p>
                {tagItems}
            </Main>
        </Container>

    )
}
