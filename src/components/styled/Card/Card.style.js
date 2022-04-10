import styled from 'styled-components'

export const Card = styled.div`
    max-width: 300px;
    background-color: #970C10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin: 0 0.5em;
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
        background: hsla(37, 58%, 45%, 1);
        background: linear-gradient(90deg, hsla(37, 58%, 45%, 1) 0%, hsla(31, 60%, 31%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(37, 58%, 45%, 1) 0%, hsla(31, 60%, 31%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(37, 58%, 45%, 1) 0%, hsla(31, 60%, 31%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#B68230", endColorstr="#7D501F", GradientType=1 );
    }

`