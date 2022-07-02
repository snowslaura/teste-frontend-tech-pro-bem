import styled from "styled-components"

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`
    font-family: 'Indie Flower', cursive;
    color:#37916E;
    font-size: 80px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 50px;

    @media(max-width: 600px) {
        font-size: 50px;
    }
`

export const Middle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80vw;
    height: 80vh;
    

    @media(max-width: 600px) {
        flex-direction: column;
        margin-top:20px;
    }

    
`