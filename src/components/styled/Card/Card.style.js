import styled from 'styled-components'

export const Card = styled.div`
    max-width: 300px;
    background-color: #970C10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin: 0.5em;
    border-radius: 5px;
    // variant jako props (muze byt jiny nazev nez variant), kde mohu menit css pro jednu komponentu
    //background-color: ${(props) => props.variant === 'white' ? 'white' : 'brown'};
    img {
        max-width: 100%;
        height: 300px
    }
    a {
        display: block;
        width: fit-content;
        margin: auto auto 0;
        padding: 0.4em 1em;
        font-size: 1.4em;
        border-radius: 5px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        background: rgb(182,130,48);
        background: linear-gradient(0deg, rgba(182,130,48,1) 0%, rgba(101,71,24,1) 100%);
        &:hover {
            background: rgb(166,116,38);
            background: linear-gradient(0deg, rgba(166,116,38,1) 0%, rgba(83,57,17,1) 100%);
        }
    }
`
