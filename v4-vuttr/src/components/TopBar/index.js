import React, { useState } from 'react';
import FormAddTool from '../FormAddTool';
import useForm from '../../hooks/useForm';
import Modal from '../Modal';

import { Wrapper, AddButton } from './TopBarStyles';

/* O componente TopBar guarda a funcionalidade de busca da aplicação.
Ele recebe via props a lista original com todas as ferramentas
e um set que cuida do armazenamento dos dados filtrados.
Dentro dele também se encontra o componente de Adicionar uma nova ferramenta. */

export default ({tools, setFilteredList}) => {
    const [ modalView, setModalView ] = useState(false);
    const { form, onChange } = useForm({search:''});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onChange(name, value);
        searchTool(value)
    }

    const visibilityOfModal = () => { 
        modalView === false ? setModalView(true) : setModalView(false);
    }

    const searchTool = (searchValue) => {
            const toolsList = []
            tools.filter(tool => {
                if(tool.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    toolsList.push(tool)
                }
                return false
            });
            setFilteredList(toolsList)
    }


    return (
        <Wrapper>  
            <input
                value={form.search}
                name="search"
                onChange={handleInputChange}
                placeholder="Search Tool"
            />
            <AddButton onClick={() => visibilityOfModal()}>+ ADD</AddButton>
            {modalView && (
                <Modal onClose={() => visibilityOfModal()}>
                    <FormAddTool visibilityOfModal={visibilityOfModal} />
                </Modal>
            )}
        </Wrapper>
    )
}