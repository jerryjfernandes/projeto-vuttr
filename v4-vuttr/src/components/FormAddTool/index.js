import React from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';

import { Wrapper } from './FormAddToolStyles';

const baseUrl = "http://localhost:3000/tools"

/* O componente tem um formulário para receber os dados
da nova ferramenta a ser adicionada. Utiliza hooks para armazenar
essas informações e faz uma requisição POST pra adicionar à API. */

export default () => {
    const { form, onChange } = useForm({
        title: '', 
        link: '', 
        description: '', 
        tags: ''
    });

    const {title, link, description, tags} = form;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onChange(name, value);
    }

    const createTool = (e) => {
        e.preventDefault();
        const tagsToCreate = tags.split(" ");

        axios.post(baseUrl, {
            title: title,
            link: link,
            description: description,
            tags: tagsToCreate
        })
        .then(() => {
            alert("Ferramenta adicionada com sucesso!")
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <Wrapper>  
            <form onSubmit={createTool}>
                <h3>Add New Tool</h3>
                <input 
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                    placeholder="Title Tool"
                    required
                />
                <input 
                    value={link}
                    name="link"
                    onChange={handleInputChange}
                    placeholder="Tool Link"
                    required
                />
                <input 
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Tool Description"
                    required
                />
                <input 
                    value={tags}
                    name="tags"
                    onChange={handleInputChange}
                    placeholder="Tags"
                    required
                />
                <button type="submit">OK</button>
            </form>
        </Wrapper>
    )
}