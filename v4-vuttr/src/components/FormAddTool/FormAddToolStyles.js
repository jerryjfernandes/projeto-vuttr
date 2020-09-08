import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    form {
        width: 60%;
        display: flex;
        flex-direction: column;

        input {
            height: 2rem;
            margin: 0.5rem 0;
            background-color: #FFF;
        }
        
        button {
            width: 3rem;
            height: 2rem;
            margin-top: 0.5rem;
            font-weight: bold;
        }
        
        @media (min-width: 900px) {
            width: 80%;     
        
        }
    }

    @media (min-width: 900px) {
        width: 30rem;
        height: 30rem;       
        
    }
`