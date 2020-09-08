import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgb(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Close = styled.button`
    background-color: transparent;
    outline: none;
    width: 2rem;
    height: 2rem;
    border: none;
    right: -47%;
    top: 1rem;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    ::before{
        content: " ";
        position: absolute;
        width: 0.1rem;
        height: 1.7rem;
        background-color: black;
        transform: rotate(45deg);
    }
    ::after {
        content: " ";
        position: absolute;
        width: 0.1rem;
        height: 1.7rem;
        background-color: black;
        transform: rotate(-45deg);
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`