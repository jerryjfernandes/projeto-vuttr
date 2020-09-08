import styled from 'styled-components';

export const Container = styled.div`
    width: 65%;
    margin: 2rem 0;
    padding: 1rem;
    border: 0.1rem solid #FFF;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
        font-size: 1.6rem;
        color: #FE2828;
        font-family: 'Open Sans', sans-serif;
    }
`

export const RemoveButton = styled.button`
    width: 5rem;
    background-color: #FE2828;
    color: #FFF;
    border: none;
    font-weight: bold;
    cursor: pointer;
`

export const Main = styled.div`
    width: 100%;
    margin: 0.8rem 0;
    font-size: 1.4rem;

    p {
        padding: 0.8rem 0;
    }
`

export const DeleteTool = styled.div`
    width: 100%;
    padding: 1rem;

    p {
        padding: 1.2rem 0;
        
        @media (min-width: 900px) {
            font-size: 1.2rem;
        
        }
    }

    button {
        width: 6rem;
        height: 1.8rem;
        margin: 0.3rem;
        cursor: pointer;
        font-weight: bold;

        @media (min-width: 900px) {
            width: 8rem;
            height: 2.5rem;
            font-size: 1rem;
        
        }
    }

    button:last-child {
        background-color: #FE2828;
        color: #FFF;
    }

    @media (min-width: 900px) {
        width: 25rem;
        
    }
` 