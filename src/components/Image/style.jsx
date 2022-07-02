import styled from "styled-components"

export const Main = styled.div`
    max-width: 40%;
    min-width: 40%;
    height: 400px;
    background: linear-gradient(179.92deg, rgba(255, 255, 255, 0.57) 21.65%, rgba(255, 255, 255, 0.43) 99.93%);
    backdrop-filter: blur(6px);
    border-radius: 38px;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
    @media(max-width: 600px) {
        max-width: 50%;
        min-width: 50%;
    }

    @media(max-width: 360px) {
        max-width: 100%;
        min-width: 100%;
    }
`

export const Pet = styled.img`
    border-radius: 38px;
    width: 90%;
    height: 70%;
    background-color: #EFEFEF;
    margin: 10px;
    object-fit: cover;

`